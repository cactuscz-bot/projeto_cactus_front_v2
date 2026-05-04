import { BlogPost, BlogPostList } from "@/src/types/post.types";
import { provider } from "../provider";

export class PostRequests {
  private static BASE_ROUTE = "/posts";

  static async getAll(): Promise<BlogPostList[]> {
    const { data } = await provider.get(`${this.BASE_ROUTE}`);

    return data;
  }

  static async getById(id: string): Promise<BlogPost> {
    const { data } = await provider.get(`${this.BASE_ROUTE}/${id}`);

    return data;
  }
}
