export type BlogPost = {
  id: string;
  title: string;
  content: string;
  image_url: string;
  created_at: string;
};

export type BlogPostCreate = Omit<BlogPost, "id" | "created_at" | "image_url"> & {
  image: File | null;
};

export type BlogPostEdit = Omit<BlogPost, "created_at" | "image_url" | "id">;
