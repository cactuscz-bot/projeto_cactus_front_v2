"use client";

import { InputHTMLAttributes, useState } from "react";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { Eye, EyeOff } from "lucide-react";
import { Field, FieldLabel } from "@/components/ui/field";

interface InputCustomProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  icon?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  label?: React.ReactNode;
  classNameContainer?: string;
}

export default function InputCustom({
  type = "text",
  id,
  required = true,
  icon,
  size = "md",
  label,
  classNameContainer = "",
  ...props
}: InputCustomProps) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  const sizes = {
    sm: "h-9 text-sm",
    md: "h-11 text-base",
    lg: "h-14 text-lg",
  };

  return (
    <Field>
      {label && (
        <FieldLabel htmlFor={id} className="font-bold">
          {required ? (
            <>
              {label}
              <span className="text-destructive">*</span>
            </>
          ) : (
            label
          )}
        </FieldLabel>
      )}

      <InputGroup
        className={`w-full bg-orange-50 border-orange-200 text-gray-800 focus-within:ring-2 focus-within:ring-orange-500 transition-all ${sizes[size]} ${classNameContainer}`}
      >
        {icon && <InputGroupAddon align="inline-start">{icon}</InputGroupAddon>}

        <InputGroupInput type={isPassword && showPassword ? "text" : type} required={required} {...props} />

        {isPassword && (
          <InputGroupAddon
            className="cursor-pointer text-black"
            align="inline-end"
            onClick={() => setShowPassword((prev) => !prev)}
            title={showPassword ? "Ocultar senha" : "Mostrar senha"}
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </InputGroupAddon>
        )}
      </InputGroup>
    </Field>
  );
}
