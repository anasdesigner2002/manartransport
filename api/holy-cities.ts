import type { IncomingMessage, ServerResponse } from "node:http";
import { handleHolyCityData } from "../server/holyCities.js";

export default function handler(request: IncomingMessage, response: ServerResponse) {
  return handleHolyCityData(request, response);
}
