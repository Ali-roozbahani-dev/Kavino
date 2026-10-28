"use client";

import { Pencil, Check, X, Loader2 } from "lucide-react";
import { UpdateUserForm } from "./schema/updateUserSchema ";
import { Button } from "@/ui/button";

export type EditableField = keyof UpdateUserForm;

export interface FieldConfig {
  key: EditableField;
  label: string;
  type: "text" | "email";
  placeholder: string;
}

interface UserInformationFieldProps {
  field: FieldConfig;
  currentValue: string;
  isEditing: boolean;
  value: string;
  isSaving: boolean;
  error?: string;
  onChange: (value: string) => void;
  onStartEdit: () => void;
  onCancel: () => void;
  onSave: () => void;
}

export function UserInformationField({
  field,
  currentValue,
  isEditing,
  value,
  isSaving,
  error,
  onChange,
  onStartEdit,
  onCancel,
  onSave,
}: UserInformationFieldProps) {
  const isEmail = field.key === "email";

  return (
    <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
      <span className="shrink-0 text-sm text-muted-foreground">
        {field.label}
      </span>

      {isEditing ? (
        <form
          className="flex min-w-0 flex-1 flex-col gap-2 sm:max-w-md"
          noValidate
          onSubmit={(event) => {
            event.preventDefault();
            onSave();
          }}
        >
          <input
            autoFocus
            type={field.type}
            value={value}
            onChange={(event) => onChange(event.target.value)}
            placeholder={field.placeholder}
            disabled={isSaving}
            className="h-10 w-full rounded-lg border px-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />

          {error && (
            <p role="alert" className="text-xs text-destructive">
              {error}
            </p>
          )}

          <div className="flex items-center gap-2">
            <Button
              variant={"Blue2"}
              type="submit"
              disabled={isSaving}
              className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg  px-3  disabled:opacity-50"
            >
              {isSaving ? (
                <Loader2 className="size-4 animate-spin" />
              ) : (
                <Check className="size-4" />
              )}
              ذخیره
            </Button>

            <button
              type="button"
              onClick={onCancel}
              disabled={isSaving}
              className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg border px-3 text-sm transition hover:bg-muted disabled:opacity-50"
            >
              <X className="size-4" />
              لغو
            </button>
          </div>
        </form>
      ) : (
        <div className="flex min-w-0 items-center justify-between gap-3 sm:justify-end">
          <span
            dir={isEmail ? "ltr" : undefined}
            className="min-w-0 wrap-break-word text-sm font-medium"
          >
            {currentValue || "---"}
          </span>

          <button
            type="button"
            aria-label={`ویرایش ${field.label}`}
            onClick={onStartEdit}
            className="flex size-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition hover:bg-muted hover:text-foreground"
          >
            <Pencil className="size-4" />
          </button>
        </div>
      )}
    </div>
  );
}