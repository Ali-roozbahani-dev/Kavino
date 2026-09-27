import { defineConfig } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import tseslint from "@typescript-eslint/eslint-plugin";
import noDeepImport from "./eslint/rules/no-deep-import.ts";

export default defineConfig([
  ...nextVitals,

  {
    plugins: {
      "@typescript-eslint": tseslint,
      local: {
        rules: {
          "no-deep-import": noDeepImport,
        },
      },
    },

    rules: {
      "no-console": "warn",

      "local/no-deep-import": [
        "warn",
        {
          roots: [
            "src/entities",
            "src/features",
            "src/components/Features",
          ],
          tsconfigPath: "tsconfig.json",
        },
      ],

      "no-unused-vars": "off",

      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
]);