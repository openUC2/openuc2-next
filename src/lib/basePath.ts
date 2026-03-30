// Central base path constant derived from the Next.js config.
// Change NEXT_PUBLIC_BASE_PATH in .env (or next.config.ts) to switch
// between root deployment ("") and sub-path deployment ("/openuc2-next").
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
