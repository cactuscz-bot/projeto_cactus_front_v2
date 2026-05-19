import Cabecalho from "@/src/components/layout/cabecalho/normal/Cabecalho";
import Footer from "@/src/components/layout/footer/Footer";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col ">
      <div className="min-h-screen">
        <Cabecalho />
        <main>{children}</main>
      </div>

      <Footer />
    </div>
  );
}
