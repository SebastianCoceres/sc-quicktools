import { COLORS, regexs } from "@/services/colorTransform/detectColorFormat";

/**
 * Returns the hexadecimal representation of a named color.
 *
 * @param {string} color - The name of the color.
 * @return {string} The hexadecimal representation of the color, or an empty string if the color is not found.
 * 
 * @example
 * const hex = namedColorToHex("red");
 * console.log(hex);
 * // Output: "#ff0000"
 */
export function namedColorToHex(color: string): string {
    if (!regexs.named.test(color)) return 'Invalid format';
    return COLORS[color as keyof typeof COLORS] || 'Invalid format'
}