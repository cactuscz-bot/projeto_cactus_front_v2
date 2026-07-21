"use client";
import { ShieldUser } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ConfirmCustom } from "../../../confirmModal/ConfirmModal";
import { deleteCookie } from "cookies-next/client";

export default function MenuAdmin() {
  const router = useRouter();
  const [isConfirmingLogout, setIsConfirmingLogout] = useState(false);

  const handleChangeConfirmLogout = (open: boolean) => {
    setIsConfirmingLogout(open);
  };

  const handleLogout = () => {
    deleteCookie("token");
    handleChangeConfirmLogout(false);

    router.replace("/");
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div
            className="flex items-center gap-1 cursor-pointer p-2 rounded-xl hover:bg-background transition-colors duration-300 hover:text-primary"
            title="Área do administrador"
          >
            <span className="text-sm font-semibold">Admin</span>
            <ShieldUser size={24} />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => handleChangeConfirmLogout(true)}>Sair</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <ConfirmCustom
        variant="destructive"
        open={isConfirmingLogout}
        onOpenChange={handleChangeConfirmLogout}
        onConfirm={handleLogout}
        title="Sair"
        description="Você tem certeza que deseja sair?"
        confirmText="Sair"
      />
    </>
  );
}
