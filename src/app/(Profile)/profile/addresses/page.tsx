import {
  Edit,
  MapPin,
  MoreVertical,
  Plus,
  Trash2,
} from "lucide-react";

const addresses = [
  {
    id: 1,
    title: "خانه",
    receiver: "علی روزبهانی",
    phone: "09123456789",
    province: "تهران",
    city: "تهران",
    address: "خیابان آزادی، خیابان بهبودی، کوچه سوم، پلاک ۲۴",
    postalCode: "1234567890",
    isDefault: true,
  },
  {
    id: 2,
    title: "محل کار",
    receiver: "علی روزبهانی",
    phone: "09123456789",
    province: "تهران",
    city: "تهران",
    address: "خیابان ولیعصر، بالاتر از میدان ونک، پلاک ۱۵۰",
    postalCode: "1234567891",
    isDefault: false,
  },
];

export default function AddressesPage() {
  return (
    <section className="space-y-5">
      {/* Header */}
      <div className="flex flex-col gap-4 bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-lg font-bold text-gray-900">
            آدرس‌های من
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            آدرس‌های خود را مدیریت کنید
          </p>
        </div>

        <button
          type="button"
          className="flex h-11 items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          <Plus size={18} />
          افزودن آدرس جدید
        </button>
      </div>

      {/* Addresses */}
      <div className="space-y-4">
        {addresses.map((address) => (
          <div
            key={address.id}
            className="relative bg-white p-5"
          >
            {/* Card Header */}
            <div className="flex items-start justify-between gap-4 border-b border-gray-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <MapPin size={20} />
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="font-bold text-gray-900">
                      {address.title}
                    </h2>

                    {address.isDefault && (
                      <span className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-600">
                        آدرس پیش‌فرض
                      </span>
                    )}
                  </div>

                  <p className="mt-1 text-xs text-gray-500">
                    گیرنده: {address.receiver}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  aria-label="ویرایش آدرس"
                  className="flex size-9 items-center justify-center rounded-lg text-gray-500 transition hover:bg-blue-50 hover:text-blue-600"
                >
                  <Edit size={17} />
                </button>

                <button
                  type="button"
                  aria-label="حذف آدرس"
                  className="flex size-9 items-center justify-center rounded-lg text-gray-500 transition hover:bg-red-50 hover:text-red-600"
                >
                  <Trash2 size={17} />
                </button>

                <button
                  type="button"
                  aria-label="گزینه‌های بیشتر"
                  className="flex size-9 items-center justify-center rounded-lg text-gray-500 transition hover:bg-gray-100"
                >
                  <MoreVertical size={18} />
                </button>
              </div>
            </div>

            {/* Address Info */}
            <div className="pt-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <span className="text-xs text-gray-400">
                    شماره تماس
                  </span>
                  <p className="mt-1 text-sm text-gray-700">
                    {address.phone}
                  </p>
                </div>

                <div>
                  <span className="text-xs text-gray-400">
                    استان و شهر
                  </span>
                  <p className="mt-1 text-sm text-gray-700">
                    {address.province}، {address.city}
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <span className="text-xs text-gray-400">
                  نشانی
                </span>

                <p className="mt-1 text-sm leading-6 text-gray-700">
                  {address.address}
                </p>
              </div>

              <div className="mt-4">
                <span className="text-xs text-gray-400">
                  کد پستی
                </span>

                <p className="mt-1 text-sm text-gray-700">
                  {address.postalCode}
                </p>
              </div>
            </div>

            {/* Default Address Action */}
            {!address.isDefault && (
              <div className="mt-5 border-t border-gray-100 pt-4">
                <button
                  type="button"
                  className="text-sm font-medium text-blue-600 transition hover:text-blue-700"
                >
                  انتخاب به‌عنوان آدرس پیش‌فرض
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Empty State - در صورت نداشتن آدرس */}
      {/* 
      <div className="flex flex-col items-center justify-center bg-white px-5 py-16 text-center">
        <div className="flex size-16 items-center justify-center rounded-full bg-gray-100 text-gray-400">
          <MapPin size={28} />
        </div>

        <h2 className="mt-4 font-bold text-gray-900">
          هنوز آدرسی ثبت نکرده‌اید
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          برای ثبت سفارش ابتدا یک آدرس اضافه کنید.
        </p>

        <button
          type="button"
          className="mt-5 flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white"
        >
          <Plus size={18} />
          افزودن آدرس
        </button>
      </div>
      */}
    </section>
  );
}