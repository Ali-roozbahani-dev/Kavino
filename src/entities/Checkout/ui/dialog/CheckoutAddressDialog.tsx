import { AddressDetail } from "@/entities/Address/types/AddressDetail";
import { formatNumberWithoutSeparator } from "@/utils/formatNumber";

interface CheckoutAddressSectionProps {
  address: AddressDetail;
}

export default function CheckoutAddressDialog({
  address,
}: CheckoutAddressSectionProps) {
  return (
    <section className="space-y-3">
      <h3 className="font-semibold">آدرس ارسال</h3>

      <div className="rounded-lg border p-4 text-sm">
        <p className="leading-6 text-muted-foreground">
          {address.province.name}، {address.city.name}،{" "}
          {address.address_line}
        </p>

        <p className="my-2 text-muted-foreground">
          <span>گیرنده:</span>

          <span className="inline-block ms-2">
            {address.receiver_name}
          </span>

          {" - "}

          <span className="inline-block me-1" dir="ltr">
            +{formatNumberWithoutSeparator(Number(address.receiver_phone))}
          </span>
        </p>

        {(address.plaque || address.unit) && (
          <p className="mt-1 text-muted-foreground">
            {address.plaque && `پلاک ${address.plaque}`}
            {address.unit && `، واحد ${address.unit}`}
          </p>
        )}

        <p className="mt-1 text-muted-foreground">
          کد پستی:
          <span className="inline-block ms-2">
            {formatNumberWithoutSeparator(Number(address.postal_code))}
          </span>
        </p>
      </div>
    </section>
  );
}
