"use client"

// Client wrapper جدا از layout سرور، تا Header (Server Component) بتونه به‌عنوان
// prop از بیرون پاس داده بشه و مستقیم داخل فایل کلاینتی import نشه (خطای async Server Component in Client)
import { useAuthGuard } from "@/components/Features/Auth";
import PageLoading from "@/components/ui/Loading/PageLoading";

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
    {children}      
    </>
  );
}