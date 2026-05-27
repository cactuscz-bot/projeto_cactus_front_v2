"use client";

import { ContactRequests } from "@/src/services/api/contact/contactRequests";
import { SendContact } from "@/src/types/contact.types";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useFormContato() {
  const sendContactMutation = useMutation({
    mutationFn: async (data: SendContact) => {
      return await ContactRequests.send(data);
    },
    onError: () => {
      toast.error("Ocorreu um erro ao enviar a mensagem. Tente novamente.");
    },
  });

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("nome") as string;
    const email = formData.get("email") as string;
    const message = formData.get("mensagem") as string;

    sendContactMutation.mutate(
      { name, email, message },
      {
        onSuccess: () => {
          toast.success(`Agradecemos pela sua mensagem!`);
          form.reset();
        },
      },
    );
  };

  return { handleSubmit, sendContactMutation };
}
