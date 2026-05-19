"use client";
import Link from "next/link";
import "./cabecalho.css";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import CactusLogo from "@/public/img/CactusLogo.png";

export default function Cabecalho() {
  const pathName = usePathname();
  const router = useRouter();

  const paletaCoresConformePath =
    pathName === "/"
      ? { headerClass: "header-primary", colorItemDestaque: "text-(--color-secondary)" }
      : { headerClass: "header-secondary", colorItemDestaque: "text-(--color-primary)" };

  const destacarItem = (path: string) => {
    if (path === pathName) return paletaCoresConformePath.colorItemDestaque;

    return "";
  };

  return (
    <header className={`${paletaCoresConformePath.headerClass} transition-colors`}>
      <div className="container-principal nav-bar">
        <Link href="/" className="logo">
          <Image src={CactusLogo} alt="Logo Cactus" className="logo-img" priority />
        </Link>
        <nav>
          <ul className="lista-nav">
            <li onClick={() => router.push("/")} className={`nav-item ${destacarItem("/")}`} title="Pagina inicial">
              <span className="nav-text">Home</span>
            </li>
            <li className="nav-item" onClick={() => router.push("/#contato")} title="Área de contato">
              <span className="nav-text">Contato</span>
            </li>
            <li
              onClick={() => router.push("/blog")}
              className={`nav-item ${destacarItem("/blog")}`}
              title="Blog de postagens"
            >
              <span className="nav-text">Blog</span>
            </li>
            <li
              onClick={() => router.push("/dashboard")}
              className={`nav-item ${destacarItem("/dashboard")}`}
              title="Dashboard informativo"
            >
              <span className="nav-text">Dashboard</span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
