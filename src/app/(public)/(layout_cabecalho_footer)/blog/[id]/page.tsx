import DetalharPostCustom from "@/src/components/layout/posts/_components/DetalharPost";

interface DetalhesPostProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function DetalhesPost({ params }: DetalhesPostProps) {
  const { id } = await params;

  return <DetalharPostCustom id={id} />;
}
