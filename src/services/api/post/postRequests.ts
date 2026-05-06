import { BlogPost, BlogPostCreate, BlogPostEdit, BlogPostList } from "@/src/types/post.types";
import { provider, providerPubic } from "../provider";

export class PostRequests {
  private static BASE_ROUTE = "/posts";

  static async getAll(): Promise<BlogPostList[]> {
    const { data } = await providerPubic.get(`${this.BASE_ROUTE}`);

    return data;
  }

  static async getById(id: string): Promise<BlogPost> {
    const { data } = await providerPubic.get(`${this.BASE_ROUTE}/${id}`);

    return data;
  }

  static async create(formData: FormData): Promise<BlogPost> {
    const { data } = await provider.post(`${this.BASE_ROUTE}`, formData);

    return data;
  }

  static async edit({ id, dataEdit }: { id: string; dataEdit: BlogPostEdit }): Promise<BlogPost> {
    const { data } = await provider.patch(`${this.BASE_ROUTE}/${id}`, dataEdit);

    return data;
  }

  static async delete(id: string): Promise<void> {
    await provider.delete(`${this.BASE_ROUTE}/${id}`);
  }
}
