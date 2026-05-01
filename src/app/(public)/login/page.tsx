"use client";

import { Mail, Lock } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Field, FieldGroup } from "@/components/ui/field";
import InputCustom from "@/src/components/ui/input/Input";
import ButtonCustom from "@/src/components/ui/button/Button";

export default function Login() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const token = "abcd";
    document.cookie = `token=${token}; path=/; max-age=86400`;

    router.replace("/admin");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="bg-secondary rounded-sm p-10 shadow-md border border-gray">
            <h1 className="text-3xl font-bold text-dark text-center mb-8">Acessar administrador</h1>

            <form onSubmit={handleSubmit}>
              <FieldGroup className="space-y-3">
                <FieldGroup>
                  <InputCustom
                    icon={<Mail />}
                    classNameContainer="bg-background border-gray"
                    type="email"
                    label="E-mail"
                    id="fieldgroup-email"
                    required
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                  />

                  <InputCustom
                    icon={<Lock />}
                    classNameContainer="bg-background border-gray"
                    type="password"
                    label="Senha"
                    id="fieldgroup-password"
                    required
                    placeholder="Digite sua senha"
                    value={formData.password}
                    onChange={(e) => handleChange("password", e.target.value)}
                  />
                </FieldGroup>

                <Field orientation="horizontal">
                  <ButtonCustom size="lg" type="submit" title="Fazer login" className="hover:opacity-80">
                    ENTRAR
                  </ButtonCustom>
                </Field>
              </FieldGroup>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
