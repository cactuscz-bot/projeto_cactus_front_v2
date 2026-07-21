import { providerPubic } from "../provider";
import { LoginRequest, LoginResponse } from "@/src/types/auth.types";

export class AuthRequests {
  static async login(dataLogin: LoginRequest): Promise<LoginResponse> {
    const { data } = await providerPubic.post(`/login`, dataLogin);

    return data;
  }
}
