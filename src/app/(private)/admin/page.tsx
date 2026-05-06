"use client";
import ListagemPosts from "@/src/components/layout/posts/ListagemPosts";
import ButtonCustom from "@/src/components/ui/button/Button";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Admin() {
  const router = useRouter();

  return (
    <main className="flex-1 pt-12 pb-18">
      <div className="container-principal flex flex-col gap-10">
        <ButtonCustom
          className="w-fit ml-auto bg-primary hover:bg-primary/80 transition-colors duration-300"
          onClick={() => router.push("/admin/post/new")}
          title="Criar nova postagem"
        >
          Nova postagem <Plus size={28} className="font-bold" />
        </ButtonCustom>

        <ListagemPosts onClickPostEvent={(id) => router.push(`/admin/post/${id}`)} />
      </div>
    </main>
  );
}
