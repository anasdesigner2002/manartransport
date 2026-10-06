import type { IncomingMessage, ServerResponse } from "node:http";

const UNSPLASH_API_URL = "https://api.unsplash.com/search/photos";
const CACHE_TTL_MS = 15 * 60 * 1000;

type UnsplashPhoto = {
  urls?: { regular?: string; full?: string };
  user?: { name?: string; links?: { html?: string } };
  links?: { html?: string };
  alt_description?: string | null;
};

type CachedImage = {
  expiresAt: number;
  imageUrl: string;
};

const imageCache = new Map<string, CachedImage>();

function getQueryParams(request: IncomingMessage) {
  return new URL(request.url || "/", "http://localhost").searchParams;
}

function withUnsplashAttribution(url: string) {
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}utm_source=manar_transport&utm_medium=referral`;
}

async function findImage(query: string, fallback: string) {
  const cacheKey = query.trim().toLowerCase();
  const cached = imageCache.get(cacheKey);
  if (cached && cached.expiresAt > Date.now()) {
    return cached.imageUrl;
  }

  const accessKey = process.env.UNSPLASH_ACCESS_KEY;
  if (!accessKey) {
    return fallback;
  }

  try {
    const searchUrl = new URL(UNSPLASH_API_URL);
    searchUrl.searchParams.set("query", query);
    searchUrl.searchParams.set("per_page", "1");
    searchUrl.searchParams.set("orientation", "landscape");
    searchUrl.searchParams.set("content_filter", "high");

    const response = await fetch(searchUrl, {
      headers: { Authorization: `Client-ID ${accessKey}` },
    });

    if (!response.ok) {
      return fallback;
    }

    const payload = (await response.json()) as { results?: UnsplashPhoto[] };
    const imageUrl = payload.results?.[0]?.urls?.regular;
    if (!imageUrl) {
      return fallback;
    }

    const attributedUrl = withUnsplashAttribution(imageUrl);
    imageCache.set(cacheKey, { expiresAt: Date.now() + CACHE_TTL_MS, imageUrl: attributedUrl });
    return attributedUrl;
  } catch {
    return fallback;
  }
}

export async function handleUnsplashImage(request: IncomingMessage, response: ServerResponse) {
  const params = getQueryParams(request);
  const query = params.get("query")?.trim();
  const fallback = params.get("fallback")?.trim();

  if (!query || !fallback) {
    response.writeHead(400, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Missing Unsplash query or fallback image");
    return;
  }

  const imageUrl = await findImage(query, fallback);
  response.writeHead(307, { Location: imageUrl, "Cache-Control": "public, max-age=900" });
  response.end();
}
