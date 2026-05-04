"use client";

import { BlogPostCreate, BlogPostEdit } from "@/src/types/post.types";
import { Edit, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { FormPostProps } from "./formPost";

export default function useFormPost({ mode = "create", initialData }: FormPostProps) {
  const router = useRouter();

  const [content, setContent] = useState(initialData?.content || "");
  const [image, setImage] = useState<File | null>(null);
  const [title, setTitle] = useState(initialData?.title || "");

  const handleImageChange = (file: File | null) => {
    setImage(file);
  };

  useEffect(() => console.log(content), [content]);

  const forMode = {
    create: {
      titleBtn: (
        <>
          Criar post <Plus />
        </>
      ),
      fn: (data: BlogPostCreate) => {
        if (!data.content.trim()) {
          toast.error("O conteúdo do post é obrigatório.");
          return;
        }

        router.push("/admin");
        toast.success("Postagem criada com sucesso!");
      },
      classBtn: "bg-green-500",
    },
    edit: {
      titleBtn: (
        <>
          Salvar <Edit />
        </>
      ),
      fn: (data: BlogPostEdit) => {
        console.log("Editar post com os dados", data);
        toast.success("Postagem editada com sucesso!");
      },
      classBtn: "bg-blue-500",
    },
  };

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();

    forMode[mode].fn({
      title,
      content,
      image,
    });
  };

  return { content, setContent, image, handleImageChange, title, setTitle, handleSubmit, forMode };
}
