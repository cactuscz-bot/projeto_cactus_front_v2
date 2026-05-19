import Link from "next/link";
import "../normal/cabecalho.css";
import Image from "next/image";
import CactusLogo from "@/public/img/CactusLogo.png";
import MenuAdmin from "./components/MenuAdmin";

export default function CabecalhoAdmin() {
  return (
    <header className={`header-secondary`}>
      <div className="container-principal nav-bar">
        <Link href="/admin" className="logo">
          <Image src={CactusLogo} alt="Logo Cactus" className="logo-img" priority />
        </Link>

        <MenuAdmin />
      </div>
    </header>
  );
}
