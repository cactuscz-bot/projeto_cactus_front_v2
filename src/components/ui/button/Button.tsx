"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";
import Loading from "../loading/Loading";

interface ButtonCustomProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "size"> {
  loading?: boolean;
  fullWidth?: boolean;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  size?: "sm" | "md" | "lg";
  componentLoading?: React.ReactNode;
}

export default function ButtonCustom({
  loading = false,
  componentLoading = <Loading withMessage={false} size="sm" />,
  fullWidth = true,
  children,
  className = "",
  disabled,
  type = "button",
  variant = "default",
  size = "md",
  ...props
}: ButtonCustomProps) {
  const sizeClasses = {
    sm: "h-9 px-3 text-sm",
    md: "h-11 px-4 text-base",
    lg: "h-14 px-6 text-lg",
  };

  return (
    <Button
      type={type}
      className={`
        ${fullWidth ? "w-full" : ""}
        flex items-center border-0 justify-center gap-2 rounded-lg font-bold
        transition-all shadow-md hover:shadow-lg
        disabled:opacity-50 disabled:cursor-not-allowed
        ${sizeClasses[size]}
        ${className}
      `}
      disabled={disabled || loading}
      variant={variant}
      {...props}
    >
      {loading ? (
        <>
          {children}
          {componentLoading}
        </>
      ) : (
        children
      )}
    </Button>
  );
}
