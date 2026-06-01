"use client";
import { Field, FieldLabel } from "@/components/ui/field";
import Editor from "@/src/components/layout/editor/Editor";
import ButtonCustom from "@/src/components/ui/button/Button";
import InputCustom from "@/src/components/ui/input/Input";
import InputImageCustom from "@/src/components/ui/input/InputImage";
import { BlogPost } from "@/src/types/post.types";
import useFormPost from "./useFormPost";

export interface FormPostProps {
  initialData?: BlogPost;
  mode?: "edit" | "create";
}

export default function FormPost({ initialData, mode = "create" }: FormPostProps) {
  const { handleSubmit, handleImageChange, setTitle, title, setContent, forMode, editMutation, createMutation } =
    useFormPost({
      initialData,
      mode,
    });

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      {mode === "create" && <InputImageCustom label="Capa" onChange={handleImageChange} />}

      <InputCustom
        placeholder="Preencha o titulo da postagem"
        label="Titulo"
        required
        classNameContainer="bg-secondary/50 border-gray-300"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        maxLength={255}
      />

      <Field>
        <FieldLabel className="font-bold">
          Conteúdo
          <span className="text-destructive">*</span>
        </FieldLabel>
        <Editor
          onEditorChange={(c) => setContent(c)}
          initialValue={mode === "edit" ? initialData?.content : ""}
          style={`
          body {
            font-family: Arial, sans-serif;
          }
          `}
        />
      </Field>

      <ButtonCustom
        className={`w-fit ml-auto ${forMode[mode].classBtn}`}
        type="submit"
        loading={editMutation.isPending || createMutation.isPending}
      >
        {forMode[mode].titleBtn}
      </ButtonCustom>
    </form>
  );
}
