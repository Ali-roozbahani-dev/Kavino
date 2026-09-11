import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface Props {
  formType: "update" | "create";
  isPending: boolean;
  disabled: boolean;
}

export default function SubmitAddressBtn({
  formType,
  isPending,
  disabled,
}: Props) {
  return (
    <Button
      type="submit"
      variant="Blue1"
      disabled={disabled}
      className="mt-5 h-12 w-full rounded-md"
    >
      {isPending ? (
        <Loader2 className="h-5 w-5 animate-spin" />
      ) : formType === "create" ? (
        "افزودن آدرس"
      ) : (
        "ثبت تغییرات"
      )}
    </Button>
  );
}

