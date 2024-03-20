import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getTemplatesFromLocalStorage() {
  if (typeof window !== undefined) {
    return localStorage.getItem('templates');
  }
  return null;
}
