"use client";
import ButtonCustom from "../../ui/button/Button";
import Post from "./_components/Post";
import EmptyCustom from "../../ui/empty/Empty";
import Loading from "../../ui/loading/Loading";
import useListagemPosts from "./useListagemPosts";

interface ListagemPostsProps {
  onClickPostEvent?: (id: string) => void;
}

export default function ListagemPosts({ onClickPostEvent }: ListagemPostsProps) {
  const { data, isLoading, isSuccess, visiblePosts, hasMore, handleLoadMore } = useListagemPosts();

  if (isLoading) {
    return <Loading message="Carregando postagens..." />;
  }

  if (!isSuccess) {
    return <EmptyCustom isError title="Erro ao carregar postagens" size="lg" />;
  }

  if (data && !data.length) {
    return <EmptyCustom title="Sem publicações" description="Aguarde o editor publicar postagens" size="lg" />;
  }

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {visiblePosts?.map((post) => (
          <Post post={post} key={post.id} onClickEvent={onClickPostEvent} />
        ))}
      </div>

      {hasMore && (
        <div className="w-full flex justify-center">
          <ButtonCustom
            onClick={handleLoadMore}
            className="bg-primary w-fit hover:bg-primary/80 transition-all duration-300"
            size="md"
            title="Clique para ver mais postagens"
          >
            Ver mais
          </ButtonCustom>
        </div>
      )}
    </section>
  );
}
