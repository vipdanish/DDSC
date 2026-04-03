import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getAssetPath(path: string) {
  // Use relative paths but ensure they work across routes
  const baseUrl = import.meta.env.BASE_URL || '/';
  // Ensure the path doesn't start with a slash
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  // Use root-relative path based on the deployment base
  return `${baseUrl}${cleanPath}`;
}
