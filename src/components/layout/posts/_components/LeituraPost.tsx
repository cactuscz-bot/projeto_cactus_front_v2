import { BlogPost } from "@/src/types/post.types";
import DOMPurify from "isomorphic-dompurify";
import "./leituraPost.css";
import { formatarData } from "@/src/utils/formatarData";

interface LeituraPostProps {
  post: BlogPost;
}

export default function LeituraPost({ post }: LeituraPostProps) {
  return (
    <section className="flex flex-col gap-8">
      <h1 className="text-3xl font-bold">{post.title}</h1>

      {post.image_url && (
        <img src={post.image_url} alt={post.title} className="w-150 mx-auto max-h-100 object-cover rounded-lg" />
      )}

      <div
        className="editor-content prose text-gray-700"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(post.content),
        }}
      />

      <p className="text-sm text-(--gray)">{formatarData(post.created_at)}</p>
    </section>
  );
}
