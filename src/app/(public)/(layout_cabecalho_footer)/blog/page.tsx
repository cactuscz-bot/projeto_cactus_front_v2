"use client";
import ListagemPosts from "@/src/components/layout/posts/ListagemPosts";
import { useRouter } from "next/navigation";

export default function Blog() {
  const router = useRouter();

  return (
    <main className="flex-1 pt-16 pb-12">
      <div className="container-principal">
        <ListagemPosts onClickPostEvent={(id) => router.push(`/blog/${id}`)} />
      </div>
    </main>
  );
}
