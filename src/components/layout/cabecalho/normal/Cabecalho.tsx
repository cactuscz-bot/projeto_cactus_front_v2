"use client";
import Link from "next/link";
import "./cabecalho.css";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import CactusLogo from "@/public/img/CactusLogo.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";

export default function Cabecalho() {
  const pathName = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const paletaCoresConformePath =
    pathName === "/"
      ? {
          headerClass: "header-primary",
          colorItemDestaque: "text-(--color-secondary) bg-(--ring)",
        }
      : {
          headerClass: "header-secondary",
          colorItemDestaque: "text-(--color-primary) bg-(--border)",
        };

  const destacarItem = (path: string) => {
    if (path === pathName) return paletaCoresConformePath.colorItemDestaque;

    return "";
  };

  return (
    <header className={`${paletaCoresConformePath.headerClass} transition-colors`}>
      <div className="container-principal container-header">
        <div className="menu-itens-left">
          <Link href="/" className="logo">
            <Image src={CactusLogo} alt="Logo Cactus" className="logo-img" priority />
          </Link>
          {menuOpen ? (
            <X className="close-icon" onClick={() => setMenuOpen(false)} />
          ) : (
            <Menu className="hamburguer-icon" onClick={() => setMenuOpen(true)} />
          )}
        </div>

        {menuOpen && <Separator />}

        <nav className={`nav-bar ${menuOpen ? "nav-open" : ""}`}>
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
