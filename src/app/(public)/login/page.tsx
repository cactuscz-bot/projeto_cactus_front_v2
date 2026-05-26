"use client";

import { Mail, Lock } from "lucide-react";
import { Field, FieldGroup } from "@/components/ui/field";
import InputCustom from "@/src/components/ui/input/Input";
import ButtonCustom from "@/src/components/ui/button/Button";
import useLogin from "./useLogin";

export default function Login() {
  const { formData, handleChange, handleSubmit, loginMutation } = useLogin();

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="bg-transparent md:bg-secondary rounded-sm p-8 md:p-10 shadow-0 md:shadow-md border border-gray">
            <h1 className="text-3xl font-bold text-dark text-center mb-8">Acessar administrador</h1>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
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
                  <ButtonCustom
                    size="lg"
                    type="submit"
                    title="Fazer login"
                    className="hover:opacity-90"
                    loading={loginMutation.isPending}
                  >
                    {loginMutation.isPending ? "Entrando" : "Entrar"}
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
