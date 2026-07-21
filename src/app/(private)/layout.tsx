import CabecalhoAdmin from "@/src/components/layout/cabecalho/admin/CabecalhoAdmin";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col ">
      <div className="min-h-screen">
        <CabecalhoAdmin />
        <main>{children}</main>
      </div>
    </div>
  );
}
