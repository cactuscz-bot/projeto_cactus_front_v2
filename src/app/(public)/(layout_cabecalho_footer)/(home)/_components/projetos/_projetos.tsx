"use client";

import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import "./projetos.css";
import { useState } from "react";
import { VisuallyHidden } from "radix-ui";
import projetos from "@/src/data/projetos.json";

export default function Projetos() {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const mudarImagem = (direction: number, totalImgs: number) => {
    setCurrentImgIndex((prev) => {
      const nextIndex = prev + direction;

      if (nextIndex >= totalImgs) return 0;
      if (nextIndex < 0) return totalImgs - 1;

      return nextIndex;
    });
  };

  return (
    <section className="projetos">
      <h3>Nossos projetos</h3>

      <div className="container-projetos">
        {projetos.map((projeto) => (
          <Dialog key={projeto.id}>
            <DialogTrigger asChild>
              <div className="projetosCards">
                <img src={projeto.capa} alt={projeto.titulo} />
                <span className="tipoProject">{projeto.categoria}</span>
                <p>{projeto.titulo}</p>
              </div>
            </DialogTrigger>

            <DialogContent className="modal-content">
              <VisuallyHidden.Root>
                <DialogTitle>{projeto.titulo}</DialogTitle>
                <DialogDescription>{projeto.descricao}</DialogDescription>
              </VisuallyHidden.Root>

              <div className="carousel-container">
                <button className="carousel-btn prev" onClick={() => mudarImagem(-1, projeto.imgs.length)}>
                  &#10094;
                </button>

                <img className="modal-img" src={projeto.imgs[currentImgIndex]} alt="Imagem do Projeto" />

                <button className="carousel-btn next" onClick={() => mudarImagem(+1, projeto.imgs.length)}>
                  &#10095;
                </button>
              </div>

              <div className="modal-body">
                <span className="tipoProject modal-specialty">{projeto.categoria}</span>
                <h3 className="modal-title">{projeto.titulo}</h3>
                <p className="modal-description">{projeto.descricao}</p>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
}
