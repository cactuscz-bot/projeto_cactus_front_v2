"use client";
import "./formContato.css";

export default function FormContato() {
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const nome = formData.get("nome") as string;
    const email = formData.get("email") as string;
    const mensagem = formData.get("mensagem") as string;

    const mailto = `mailto:cactus.cz@ifpb.edu.br
    ?subject=${encodeURIComponent(`Contato de ${nome}`)}
    &body=${encodeURIComponent(`Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`)}`;

    window.open(mailto, "_blank");
  };

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
        <button type="submit" className="btn-enviar">
          Enviar Mensagem
        </button>
      </div>
    </form>
  );
}
