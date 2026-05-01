"use client";

import ButtonCustom from "@/src/components/ui/button/Button";
import { ChevronLeft } from "lucide-react";

interface BackButtonProps {
  title?: string;
  onClick?: () => void;
}

export default function BackButton({ title = "Voltar para a pagina anterior", onClick }: BackButtonProps) {
  const handleClick = () => {
    onClick?.();
    window.history.back();
  };

  return (
    <ButtonCustom
      variant="outline"
      className="w-fit rounded-sm border border-primary text-primary hover:bg-primary/20 transition-all duration-300"
      title={title}
      onClick={handleClick}
    >
      <ChevronLeft /> Voltar
    </ButtonCustom>
  );
}
