import { authConstants } from "@/src/constants/auth.constants";
import { providerPubic } from "../provider";
import { SendContact } from "@/src/types/contact.types";

export class ContactRequests {
  static async send(dataContact: SendContact) {
    const { data } = await providerPubic.post(`${authConstants.BASE_URL}/email`, dataContact);

    return data;
  }
}
