"use client";
import { BlogPost } from "@/src/types/post.types";

interface PostProps {
  post: Omit<BlogPost, "content">;
  onClickEvent?: (id: string) => void;
}

export default function Post({ post, onClickEvent }: PostProps) {
  return (
    <article
      key={post.id}
      className="bg-background border-2 border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 transition-normal transform cursor-pointer"
      title={post.title}
      onClick={() => (onClickEvent ? onClickEvent(post.id) : {})}
    >
      <div className="w-full h-48 overflow-hidden">
        <img src={post.image_url} alt={post.title} className="w-full h-full object-cover" />
      </div>

      <div className="p-4">
        <p className="text-xs text-(--gray) mb-1">{post.created_at}</p>

        <h2 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">{post.title}</h2>
      </div>
    </article>
  );
}
