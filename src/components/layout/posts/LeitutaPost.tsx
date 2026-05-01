import { BlogPost } from "@/src/types/post.types";
import DOMPurify from "isomorphic-dompurify";
import "./leituraPost.css";

interface LeituraPostProps {
  post: BlogPost;
}

export default function LeituraPost({ post }: LeituraPostProps) {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

      <img src={post.image_url} alt={post.title} className="w-150 mx-auto max-h-100 object-cover rounded-lg my-8" />

      <p className="text-sm text-(--gray) mb-2">{post.created_at}</p>

      <div
        className="editor-content prose text-gray-700"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(post.content),
        }}
      />
    </section>
  );
}
