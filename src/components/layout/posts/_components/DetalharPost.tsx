"use client";

import ExcluirPost from "@/src/components/layout/posts/_components/excluirPost";
import BackButton from "@/src/components/layout/backButton/BackButton";
import LeituraPost from "@/src/components/layout/posts/_components/LeituraPost";
import EmptyCustom from "@/src/components/ui/empty/Empty";
import Loading from "@/src/components/ui/loading/Loading";
import { PostRequests } from "@/src/services/api/post/postRequests";
import { useQuery } from "@tanstack/react-query";
import FormPost from "@/src/app/(private)/admin/post/_components/formPost";

interface DetalhesPostCustomProps {
  id: string;
  isAdmin?: boolean;
}

export default function DetalharPostCustom({ id, isAdmin = false }: DetalhesPostCustomProps) {
  const {
    data: post,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ["postagem", id],
    queryFn: async () => {
      return PostRequests.getById(id);
    },
  });

  return (
    <main className="container-menor flex flex-col gap-8 pt-12 pb-50">
      <div className="flex justify-between">
        <BackButton fallbackUrl={isAdmin ? "/admin" : "/blog"} />

        {isSuccess && isAdmin && <ExcluirPost id={post.id} />}
      </div>

      {isLoading ? (
        <Loading message="Carregando os detalhes..." />
      ) : isSuccess ? (
        isAdmin ? (
          <FormPost mode="edit" initialData={post} />
        ) : (
          <LeituraPost post={post} />
        )
      ) : (
        <EmptyCustom isError title="Erro ao detalhar a postagem" size="lg" />
      )}
    </main>
  );
}
