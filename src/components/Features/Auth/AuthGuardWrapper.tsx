"use client"

// Client wrapper جدا از layout سرور، تا Header (Server Component) بتونه به‌عنوان
// prop از بیرون پاس داده بشه و مستقیم داخل فایل کلاینتی import نشه (خطای async Server Component in Client)
import { useAuthGuard } from "@/components/Features/Auth";
import PageLoading from "@/components/ui/Loading/PageLoading";
import Main from "@/components/ui/Main";
import { ProfileNavigation } from "@/components/ui/Profile";

export default function AuthGuardWrapper({
  header,
  children,
}: {
  header: React.ReactNode;
  children: React.ReactNode;
}) {
  const { isLoading } = useAuthGuard({redirectTo: "/"});

  if (isLoading) return <PageLoading />;
  

  return (
    <>
      {header}
      <Main className="py-5">
        <div className="flex">
          <div className="w-[250px] relative hidden lg:block">
            <ProfileNavigation />
          </div>
          <div className="flex-1 px-4">{children}</div>
        </div>
      </Main>
    </>
  );
}