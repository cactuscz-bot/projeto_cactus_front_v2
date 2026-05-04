"use client";

import { ConfirmCustom } from "@/src/components/layout/confirmModal/ConfirmModal";
import ButtonCustom from "@/src/components/ui/button/Button";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

interface ExcluirPostProps {
  id: string;
}

export default function ExcluirPost({ id }: ExcluirPostProps) {
  const router = useRouter();

  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);

  const handleChangeConfirmDelete = (open: boolean) => {
    setIsConfirmingDelete(open);
  };

  const handleDelete = () => {
    router.push("/admin");
    toast.success(`Postagem de ID: ${id} deletada com sucesso!`);
  };
  return (
    <>
      <ButtonCustom
        className="w-fit rounded-sm bg-destructive/70"
        onClick={() => handleChangeConfirmDelete(true)}
        title="Deletar postagem"
      >
        <Trash />
      </ButtonCustom>
      <ConfirmCustom
        variant="destructive"
        open={isConfirmingDelete}
        onOpenChange={handleChangeConfirmDelete}
        onConfirm={handleDelete}
        title="Deletar postagem"
        description="Tem certeza que deseja deletar a postagem?"
        confirmText="Deletar"
      />
    </>
  );
}
