"use client";

import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty";
import Image from "next/image";
import EmptyIcon from "@/public/img/empty-con.svg";
import ErroIcon from "@/public/img/erro-icon.svg";

interface EmptyCustomProps {
  title?: string;
  description?: string;
  content?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  isError?: boolean;
}

export default function EmptyCustom({ title, description, content, size = "md", isError = false }: EmptyCustomProps) {
  const sizes = {
    sm: {
      icon: "w-10 h-10",
      title: "text-sm",
      description: "text-xs",
      spacing: "py-6",
    },
    md: {
      icon: "w-20 h-20",
      title: "text-base",
      description: "text-sm",
      spacing: "py-10",
    },
    lg: {
      icon: "w-30 h-30",
      title: "text-lg",
      description: "text-base",
      spacing: "py-14",
    },
  };

  const atributes = {
    iconSrc: isError ? ErroIcon : EmptyIcon,
    altText: isError ? "Ícone de erro" : "Ícone de vazio",
    defaultTitle: title || (isError ? "Ocorreu um erro" : "Nenhum resultado encontrado"),
    defaultDescription:
      description || (isError ? "Tente novamente mais tarde" : "Tente ajustar seus filtros ou palavras-chave"),
  };

  const current = sizes[size];

  return (
    <Empty className={current.spacing}>
      <EmptyHeader>
        <EmptyMedia variant="default" className={current.icon}>
          <Image src={atributes.iconSrc} alt={atributes.altText} className="w-full" priority />
        </EmptyMedia>

        <EmptyTitle className={current.title}>{atributes.defaultTitle}</EmptyTitle>

        <EmptyDescription className={current.description}>{atributes.defaultDescription}</EmptyDescription>
      </EmptyHeader>

      {content && <EmptyContent>{content}</EmptyContent>}
    </Empty>
  );
}
