"use client";

import { BlogPostCreate, BlogPostEdit } from "@/src/types/post.types";
import { Edit, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { FormPostProps } from "./formPost";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PostRequests } from "@/src/services/api/post/postRequests";
import { isContentEmpty } from "@/src/utils/verificarHTML";

export default function useFormPost({ mode = "create", initialData }: FormPostProps) {
  const router = useRouter();
  const queryClient = useQueryClient();

  const [content, setContent] = useState(initialData?.content || "");
  const [image, setImage] = useState<File | null>(null);
  const [title, setTitle] = useState(initialData?.title || "");

  const editMutation = useMutation({
    mutationFn: async ({ id, data }: { id: string; data: BlogPostEdit }) => {
      return await PostRequests.edit({ id, dataEdit: data });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["postagens"] });

      toast.success(`Postagem editada com sucesso!`);
    },
    onError: () => {
      toast.error("Erro ao editar a postagem. Tente novamente.");
    },
  });

  const createMutation = useMutation({
    mutationFn: async (data: FormData) => {
      return await PostRequests.create(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["postagens"] });

      router.push("/admin");
      toast.success(`Postagem criada com sucesso!`);
    },
    onError: () => {
      toast.error("Erro ao criar a postagem. Tente novamente.");
    },
  });

  const handleCreate = (data: BlogPostCreate) => {
    if (isContentEmpty(data.content)) {
      toast.error("O conteúdo do post é obrigatório.");
      return;
    }

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("content", data.content);

    if (data.image) {
      formData.append("image", data.image);
    }

    createMutation.mutate(formData);
  };

  const handleEdit = (data: BlogPostEdit) => {
    if (isContentEmpty(data.content)) {
      toast.error("O conteúdo do post é obrigatório.");
      return;
    }

    if (data.title === initialData!.title && data.content === initialData!.content) return;

    editMutation.mutate({ id: initialData!.id, data });
  };

  const forMode = {
    create: {
      titleBtn: (
        <>
          Criar post <Plus />
        </>
      ),
      fn: handleCreate,
      classBtn: "bg-green-500",
    },
    edit: {
      titleBtn: (
        <>
          Salvar <Edit />
        </>
      ),
      fn: handleEdit,
      classBtn: "bg-blue-500",
    },
  };

  const handleImageChange = (file: File | null) => {
    setImage(file);
  };

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();

    forMode[mode].fn({
      title,
      content,
      image,
    });
  };

  return {
    content,
    setContent,
    image,
    handleImageChange,
    title,
    setTitle,
    handleSubmit,
    forMode,
    editMutation,
    createMutation,
  };
}
