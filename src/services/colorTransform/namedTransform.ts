import { COLORS } from "./detectColorFormat";

export function namedColorToHex(color: string) {
    return COLORS[color as keyof typeof COLORS] || ''
}