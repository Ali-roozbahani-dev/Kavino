"use client";

import { useState } from "react";
import { useAuth } from "../../Auth";
import {
  UserInformationField,
  type EditableField,
  type FieldConfig,
} from "./UserInformationField";
import { useUpdateUser } from "./hooks/useUpdateUser";
import { updateUserSchema } from "./schema/updateUserSchema ";

const fields: FieldConfig[] = [
  {
    key: "first_name",
    label: "نام",
    type: "text",
    placeholder: "نام خود را وارد کنید",
  },
  {
    key: "last_name",
    label: "نام خانوادگی",
    type: "text",
    placeholder: "نام خانوادگی خود را وارد کنید",
  },
  {
    key: "email",
    label: "ایمیل",
    type: "email",
    placeholder: "ایمیل خود را وارد کنید",
  },
];

export function UserInformation() {
  const { data: user, isPending, error } = useAuth();
  const { mutateAsync: updateUser, isPending: isSaving } = useUpdateUser();

  const [editingField, setEditingField] = useState<EditableField | null>(null);
  const [value, setValue] = useState("");
  const [saveError, setSaveError] = useState("");

  if (isPending) return null;
  if (error) throw new Error("خطا در دریافت اطلاعات");
  if (!user?.phone_number) return null;

  const startEditing = (field: EditableField) => {
    setEditingField(field);
    setValue(user[field] ?? "");
    setSaveError("");
  };

  const cancelEditing = () => {
    setEditingField(null);
    setValue("");
    setSaveError("");
  };

  const handleSave = async (field: EditableField) => {
    const normalizedValue = value.trim();
    const currentValue = user[field] ?? "";

    if (normalizedValue === currentValue) {
      cancelEditing();
      return;
    }

    const result = updateUserSchema.shape[field].safeParse(normalizedValue);

    if (!result.success) {
      setSaveError(result.error.issues[0]?.message ?? "مقدار وارد شده معتبر نیست");
      return;
    }

    setSaveError("");

    try {
      await updateUser({
        phoneNumber: user.phone_number,
        payload: { [field]: result.data },
      });
      cancelEditing();
    } catch {
      setSaveError("ذخیره اطلاعات انجام نشد. دوباره تلاش کنید.");
    }
  };

  return (
    <div className="overflow-hidden mb-5 rounded-2xl border bg-white shadow-sm">
      <div className="border-b p-5">
        <h2 className="font-bold">اطلاعات کاربری</h2>
        <p className="mt-1 text-xs text-muted-foreground">
          برای تغییر اطلاعات، روی آیکون ویرایش کلیک کنید.
        </p>
      </div>

      <div className="divide-y">
        {fields.map((field) => {
          const isEditing = editingField === field.key;

          return (
            <UserInformationField
              key={field.key}
              field={field}
              currentValue={user[field.key] ?? ""}
              isEditing={isEditing}
              value={value}
              isSaving={isSaving}
              error={isEditing ? saveError : undefined}
              onChange={setValue}
              onStartEdit={() => startEditing(field.key)}
              onCancel={cancelEditing}
              onSave={() => void handleSave(field.key)}
            />
          );
        })}

        <div className="flex items-center justify-between gap-4 p-5">
          <span className="text-sm text-muted-foreground">شماره همراه</span>

          <span dir="ltr" className="text-sm font-medium">
            {user.phone_number}
          </span>
        </div>
      </div>
    </div>
  );
}
