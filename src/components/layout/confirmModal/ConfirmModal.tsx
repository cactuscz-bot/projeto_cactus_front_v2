"use client";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import Loading from "../../ui/loading/Loading";

type ConfirmCustomProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void | Promise<void>;
  variant?: "default" | "destructive";
  title?: string;
  description?: string | React.ReactNode;
  confirmText?: string;
  loading?: boolean;
};

export function ConfirmCustom({
  open,
  onOpenChange,
  onConfirm,
  variant = "default",
  title = "Tem certeza?",
  description = "Essa ação não pode ser desfeita.",
  confirmText = "Confirmar",
  loading = false,
}: ConfirmCustomProps) {
  const variants = {
    default: {
      title: "text-(--dark)",
      action: "bg-primary text-white hover:bg-primary/90",
    },
    destructive: {
      title: "text-red-500",
      action: "bg-red-500 text-white hover:bg-red-600",
    },
  };

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className={variants[variant].title}>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>

          <AlertDialogAction onClick={onConfirm} className={variants[variant].action}>
            {loading ? <Loading size="sm" withMessage={false} /> : confirmText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
