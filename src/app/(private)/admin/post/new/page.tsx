import BackButton from "@/src/components/layout/backButton/BackButton";
import FormPost from "../_components/formPost";

export default function CriarPost() {
  return (
    <main className="container-menor flex flex-col gap-8 pt-10 pb-20 px-5 md:px-0">
      <BackButton fallbackUrl="/admin" />

      <FormPost />
    </main>
  );
}
