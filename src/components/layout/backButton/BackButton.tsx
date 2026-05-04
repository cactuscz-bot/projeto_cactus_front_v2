"use client";

import ButtonCustom from "@/src/components/ui/button/Button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface BackButtonProps {
  title?: string;
  previewNavigationBack?: () => void;
  fallbackUrl: string;
}

export default function BackButton({
  title = "Voltar para a pagina anterior",
  previewNavigationBack,
  fallbackUrl,
}: BackButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    previewNavigationBack?.();

    if (window.history.length > 1) {
      window.history.back();
    } else {
      router.push(fallbackUrl);
    }
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
