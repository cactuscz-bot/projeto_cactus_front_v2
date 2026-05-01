"use client";
import { Field, FieldLabel } from "@/components/ui/field";
import Editor from "@/src/components/layout/editor/Editor";
import ButtonCustom from "@/src/components/ui/button/Button";
import InputCustom from "@/src/components/ui/input/Input";
import InputImageCustom from "@/src/components/ui/input/InputImage";
import { BlogPost, BlogPostCreate, BlogPostEdit } from "@/src/types/post.types";
import { Edit, Plus } from "lucide-react";
import { useState } from "react";

interface FormPostProps {
  initialData?: BlogPost;
  mode?: "edit" | "create";
}

export default function FormPost({ initialData, mode = "create" }: FormPostProps) {
  const [content, setContent] = useState(initialData?.content || "");
  const [image, setImage] = useState<File | null>(null);
  const [title, setTitle] = useState(initialData?.title || "");

  const handleImageChange = (file: File | null) => {
    setImage(file);
  };

  const forMode = {
    create: {
      titleBtn: (
        <>
          Criar post <Plus />
        </>
      ),
      fn: (data: BlogPostCreate) => {
        console.log("Criar post com os dados", data);
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
      },
      classBtn: "bg-blue-500",
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    forMode[mode].fn({
      title,
      content,
      image,
    });
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      {mode === "create" && <InputImageCustom label="Capa" onChange={handleImageChange} />}

      <InputCustom
        placeholder="Preencha o title"
        label="title"
        required
        classNameContainer="bg-secondary/50 border-gray-300"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Field>
        <FieldLabel className="font-bold">
          Conteúdo
          <span className="text-destructive">*</span>
        </FieldLabel>
        <Editor onEditorChange={(c) => setContent(c)} initialValue={content} />
      </Field>

      <ButtonCustom className={`w-fit ml-auto ${forMode[mode].classBtn}`} type="submit">
        {forMode[mode].titleBtn}
      </ButtonCustom>
    </form>
  );
}
