import DetalharPostCustom from "@/src/components/layout/posts/_components/DetalharPost";

interface DetalhesPostAdminProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function DetalhesPostAdmin({ params }: DetalhesPostAdminProps) {
  const { id } = await params;

  return <DetalharPostCustom id={id} isAdmin />;
}
