import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatfloatString(num: string): number {
  if (Number.isInteger(num)) {
    return parseInt(num)
  } else {
    return parseFloat(num)
  }
}