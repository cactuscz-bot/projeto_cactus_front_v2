import Posts from "@/src/data/posts.json";
import BackButton from "../../../../../components/layout/backButton/BackButton";
import ButtonCustom from "@/src/components/ui/button/Button";
import { Trash } from "lucide-react";
import FormPost from "../_components/formPost";

interface DetalhesPostAdminProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function DetalhesPostAdmin({ params }: DetalhesPostAdminProps) {
  const { id } = await params;

  const post = Posts.find((p) => p.id === id);

  if (!post) {
    return <div>Post não encontrado</div>;
  }

  return (
    <main className="container-menor flex flex-col gap-8 pt-10 pb-20">
      <div className="flex justify-between">
        <BackButton />

        <ButtonCustom className="w-fit rounded-sm bg-destructive/70 ">
          <Trash />
        </ButtonCustom>
      </div>

      <FormPost mode="edit" initialData={post} />
    </main>
  );
}
