import type { IncomingMessage, ServerResponse } from "node:http";
import { handleUnsplashImage } from "../../server/unsplash.js";

export default function handler(request: IncomingMessage, response: ServerResponse) {
  return handleUnsplashImage(request, response);
}
