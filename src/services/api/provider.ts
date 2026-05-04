import axios from "axios";
import { authConstants } from "@/src/constants/auth.constants";

export const provider = axios.create({
  baseURL: authConstants.BASE_URL,
});

// provider.interceptors.response.use(
//   (response: AxiosResponse) => response,
//   async (error: AxiosError) => {
//     if (error.status === HttpStatusCode.Unauthorized) {
//       if (typeof window !== "undefined") {
//         document.cookie = `${authConstants.NAME_TOKEN_IN_STORAGE}=; Path=/; Max-Age=0; expires=Thu, 01 Jan 1970 00:00:00 GMT;`;

//         window.location.replace("/login");
//       }
//     }

//     return Promise.reject(error);
//   },
// );
