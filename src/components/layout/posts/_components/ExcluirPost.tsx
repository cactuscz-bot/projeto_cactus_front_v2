"use client";

import { ConfirmCustom } from "@/src/components/layout/confirmModal/ConfirmModal";
import ButtonCustom from "@/src/components/ui/button/Button";
import { PostRequests } from "@/src/services/api/post/postRequests";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

interface ExcluirPostProps {
  id: string;
}

export default function ExcluirPost({ id }: ExcluirPostProps) {
  const router = useRouter();
  const queryClient = useQueryClient();

  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);

  const handleChangeConfirmDelete = (open: boolean) => {
    setIsConfirmingDelete(open);
  };

  const excluirMutation = useMutation({
    mutationFn: async () => {
      return await PostRequests.delete(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["postagens"] });

      handleChangeConfirmDelete(false);
      router.replace("/admin");
      toast.success(`Postagem deletada com sucesso!`);
    },
    onError: () => {
      toast.error("Erro ao deletar a postagem. Tente novamente.");
    },
  });

  return (
    <>
      <ButtonCustom
        className="w-fit rounded-sm bg-destructive/70"
        onClick={() => handleChangeConfirmDelete(true)}
        title="Deletar postagem"
        disabled={excluirMutation.isPending}
      >
        <Trash />
      </ButtonCustom>
      <ConfirmCustom
        variant="destructive"
        open={isConfirmingDelete}
        onOpenChange={handleChangeConfirmDelete}
        onConfirm={excluirMutation.mutateAsync}
        loading={excluirMutation.isPending}
        title="Deletar postagem"
        description="Tem certeza que deseja deletar a postagem?"
        confirmText="Deletar"
      />
    </>
  );
}
