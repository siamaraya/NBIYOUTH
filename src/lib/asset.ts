/** Prefix public asset paths with Vite base URL (works at / and /NBIYOUTH/) */
export const asset = (path: string) => import.meta.env.BASE_URL + path.replace(/^\//, '')
