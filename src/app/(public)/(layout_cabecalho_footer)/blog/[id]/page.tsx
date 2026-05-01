import Posts from "@/src/data/posts.json";
import BackButton from "../../../../../components/layout/backButton/BackButton";
import LeituraPost from "@/src/components/layout/posts/LeitutaPost";

interface DetalhesPostProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function DetalhesPost({ params }: DetalhesPostProps) {
  const { id } = await params;

  const post = Posts.find((p) => p.id === id);

  if (!post) {
    return <div>Post não encontrado</div>;
  }

  return (
    <main className="container-menor flex flex-col gap-8 pt-12 pb-50">
      <BackButton />

      <LeituraPost post={post} />
    </main>
  );
}
