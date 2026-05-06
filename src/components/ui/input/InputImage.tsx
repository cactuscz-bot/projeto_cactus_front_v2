"use client";

import { Field, FieldLabel } from "@/components/ui/field";
import { Image as ImageIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface InputImageCustomProps {
  label?: React.ReactNode;
  className?: string;
  required?: boolean;
  description?: string;
  onChange?: (file: File | null) => void;
  id?: string;
  accept?: string;
  maxSize?: number;
}

const MAX_SIZE = 4 * 1024 * 1024;

export default function InputImageCustom({
  label,
  className = "",
  description = "Clique para selecionar",
  required = false,
  onChange,
  id = "upload-image",
  accept = "image/*",
  maxSize = MAX_SIZE,
}: InputImageCustomProps) {
  const [preview, setPreview] = useState<string | null>(null);

  const handleFile = (file: File | null) => {
    if (!file) {
      onChange?.(null);
      return;
    }

    if (file.size > maxSize) {
      toast.error(
        `O arquivo selecionado é muito grande. O tamanho máximo permitido é de ${maxSize / (1024 * 1024)}MB.`,
      );
      return;
    }

    onChange?.(file);
    setPreview(URL.createObjectURL(file));
  };

  return (
    <Field>
      {label && (
        <FieldLabel className="font-bold">
          {label}
          {required && <span className="text-destructive">*</span>}
        </FieldLabel>
      )}

      <div
        className={`border-2 border-dashed border-gray-300 rounded-xl text-center cursor-pointer bg-secondary/50 hover:bg-secondary transition-colors duration-300 ${className}`}
        title="Selecionar uma imagem"
      >
        <input
          type="file"
          accept={accept}
          className="hidden"
          id={id}
          onChange={(e) => handleFile(e.target.files?.[0] || null)}
        />

        <label htmlFor={id} className={`block cursor-pointer py-10`}>
          {!preview ? (
            <div className={`w-fit mx-auto flex flex-col items-center text-gray-400`}>
              <ImageIcon size={50} />
              <p>{description}</p>
            </div>
          ) : (
            <img src={preview} alt="preview" className={`max-h-68 mx-auto rounded-lg object-contain`} />
          )}
        </label>
      </div>
    </Field>
  );
}
