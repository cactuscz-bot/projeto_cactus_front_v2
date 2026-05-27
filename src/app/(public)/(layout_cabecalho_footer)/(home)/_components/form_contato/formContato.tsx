"use client";
import ButtonCustom from "@/src/components/ui/button/Button";
import "./formContato.css";
import useFormContato from "./useFormContato";

export default function FormContato() {
  const { handleSubmit, sendContactMutation } = useFormContato();

  return (
    <form onSubmit={handleSubmit} id="form-contato" className="form-contato">
      <div className="campo">
        <label htmlFor="nome">Nome Completo</label>
        <input type="text" id="nome" name="nome" placeholder="Digite seu nome" required />
      </div>

      <div className="campo">
        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" name="email" placeholder="exemplo@dominio.com" required />
      </div>

      <div className="campo">
        <label htmlFor="mensagem">Mensagem</label>
        <textarea id="mensagem" name="mensagem" rows={5} placeholder="Como podemos ajudar?" required></textarea>
      </div>

      <div className="container-btn">
        <ButtonCustom
          type="submit"
          className="btn-enviar w-full md:w-fit mx-auto"
          size="lg"
          loading={sendContactMutation.isPending}
        >
          Enviar Mensagem
        </ButtonCustom>
      </div>
    </form>
  );
}
