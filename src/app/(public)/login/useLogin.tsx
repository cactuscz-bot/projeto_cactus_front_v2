"use client";

import { AuthRequests } from "@/src/services/api/auth/authRequests";
import { LoginRequest, PayloadToken } from "@/src/types/auth.types";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { toast } from "sonner";

export default function useLogin() {
  const router = useRouter();

  const [formData, setFormData] = useState<LoginRequest>({
    email: "admin@cactus.com",
    password: "cactusadminblog123",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const saveToken = (token: string) => {
    const decoded = jwtDecode<PayloadToken>(token);

    const now = Math.floor(Date.now() / 1000);
    const maxAge = decoded.exp - now;

    document.cookie = `token=${token}; path=/; max-age=${maxAge}`;
  };

  const loginMutation = useMutation({
    mutationFn: async (data: LoginRequest) => {
      return await AuthRequests.login(data);
    },
    onSuccess: (data) => {
      saveToken(data.token);
      router.replace("/admin");

      toast.info("Bem vindo a área administrativa!");
    },
    onError: () => {
      toast.error("Erro ao fazer login. Verifique suas credenciais e tente novamente.");
    },
  });

  const handleSubmit = async () => {
    loginMutation.mutate(formData);
  };

  return { formData, handleChange, handleSubmit, loginMutation };
}
