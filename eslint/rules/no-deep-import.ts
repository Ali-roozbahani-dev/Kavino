import fs from 'node:fs';
import path from 'node:path';
import { ESLintUtils, type TSESTree } from '@typescript-eslint/utils';

const createRule = ESLintUtils.RuleCreator(
  (name) => `https://internal-docs/eslint-rules/${name}`,
);

type Options = [
  {
    roots?: string[];
    tsconfigPath?: string;
  },
];

type MessageIds = 'useIndex';

// --- tsconfig loading & caching ---

interface TsconfigInfo {
  baseUrl: string;
  paths: Record<string, string[]>;
}

const tsconfigCache = new Map<string, TsconfigInfo | null>();

function stripJsonComments(text: string): string {
  return text
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/(^|[^:])\/\/.*$/gm, '$1')
    .replace(/,(\s*[}\]])/g, '$1');
}

function loadTsconfig(tsconfigPath: string): TsconfigInfo | null {
  if (tsconfigCache.has(tsconfigPath)) {
    return tsconfigCache.get(tsconfigPath) ?? null;
  }

  let result: TsconfigInfo | null = null;
  try {
    const raw = fs.readFileSync(tsconfigPath, 'utf8');
    const json = JSON.parse(stripJsonComments(raw)) as {
      compilerOptions?: { baseUrl?: string; paths?: Record<string, string[]> };
    };
    const dir = path.dirname(tsconfigPath);
    const baseUrl = path.resolve(dir, json.compilerOptions?.baseUrl ?? '.');
    const paths = json.compilerOptions?.paths ?? {};
    result = { baseUrl, paths };
  } catch {
    result = null;
  }

  tsconfigCache.set(tsconfigPath, result);
  return result;
}

function matchAliasPattern(pattern: string, source: string): string | null {
  if (!pattern.includes('*')) {
    return source === pattern ? '' : null;
  }
  const [prefix, suffix] = pattern.split('*');
  if (!source.startsWith(prefix) || !source.endsWith(suffix)) return null;
  return source.slice(prefix.length, source.length - suffix.length);
}

function resolveAliasToAbsPath(
  source: string,
  tsconfig: TsconfigInfo | null,
): string | null {
  if (!tsconfig) return null;
  const { baseUrl, paths } = tsconfig;

  for (const [pattern, targets] of Object.entries(paths)) {
    const captured = matchAliasPattern(pattern, source);
    if (captured === null) continue;

    for (const target of targets) {
      const resolvedTarget = target.includes('*')
        ? target.replace('*', captured)
        : target;
      return path.resolve(baseUrl, resolvedTarget);
    }
  }
  return null;
}

interface SliceInfo {
  root: string;
  sliceName: string;
  sliceDir: string;
}

export default createRule<Options, MessageIds>({
  name: 'no-deep-slice-import',
  meta: {
    type: 'suggestion',
    docs: {
      description:
        'If a slice has an index.ts, imports must go through it instead of a deep path',
    },
    schema: [
      {
        type: 'object',
        properties: {
          roots: { type: 'array', items: { type: 'string' } },
          tsconfigPath: { type: 'string' },
        },
        additionalProperties: false,
      },
    ],
    messages: {
      useIndex:
        "Slice '{{slice}}' has an index.ts; import from it instead of the deep path '{{importPath}}'.",
    },
  },
  defaultOptions: [{ roots: [], tsconfigPath: 'tsconfig.json' }],

  create(context, [options]) {
    const cwd = context.cwd ?? process.cwd();
    const roots = (options.roots ?? []).map((r) => path.resolve(cwd, r));
    const tsconfigPath = path.resolve(
      cwd,
      options.tsconfigPath ?? 'tsconfig.json',
    );
    const tsconfig = loadTsconfig(tsconfigPath);

    function findSlice(absPath: string): SliceInfo | null {
      for (const root of roots) {
        const rootWithSep = root + path.sep;
        if (!absPath.startsWith(rootWithSep)) continue;
        const rel = path.relative(root, absPath);
        const sliceName = rel.split(path.sep)[0];
        return { root, sliceName, sliceDir: path.join(root, sliceName) };
      }
      return null;
    }

    function resolveSourceToAbs(
      source: string,
      filename: string,
    ): string | null {
      if (source.startsWith('.') || path.isAbsolute(source)) {
        return path.resolve(path.dirname(filename), source);
      }
      const aliasResolved = resolveAliasToAbsPath(source, tsconfig);
      if (aliasResolved) return aliasResolved;
      return null;
    }

    function checkSource(
      node: TSESTree.ImportDeclaration | TSESTree.ExportNamedDeclaration | TSESTree.ExportAllDeclaration,
      source: string,
    ): void {
      const filename = context.filename;
      const targetAbs = resolveSourceToAbs(source, filename);
      if (!targetAbs) return;

      const targetSlice = findSlice(targetAbs);
      if (!targetSlice) return;

      const indexPath = path.join(targetSlice.sliceDir, 'index.ts');
      if (!fs.existsSync(indexPath)) return;

      const isIndexItself =
        targetAbs === targetSlice.sliceDir ||
        targetAbs === indexPath ||
        targetAbs === indexPath.replace(/\.ts$/, '');
      if (isIndexItself) return;

      const importerSlice = findSlice(path.resolve(filename));
      if (importerSlice && importerSlice.sliceDir === targetSlice.sliceDir) {
        return;
      }

      context.report({
        node,
        messageId: 'useIndex',
        data: { slice: targetSlice.sliceName, importPath: source },
      });
    }

    return {
      ImportDeclaration(node) {
        checkSource(node, node.source.value);
      },
      ExportNamedDeclaration(node) {
        if (node.source) checkSource(node, node.source.value);
      },
      ExportAllDeclaration(node) {
        if (node.source) checkSource(node, node.source.value);
      },
    };
  },
});