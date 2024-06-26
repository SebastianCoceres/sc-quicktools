import { TransformColor } from "@/services/colorTransform";
import { getHexPartsInRgba } from "@/services/colorTransform/hexTransform";

const CRED = 0.2126
const CGREEN = 0.7152
const CBLUE = 0.0722
const GAMMA = 2.4;

// /**
//  * Calculates the YIQ (Luminance) value of a given color.
//  *
//  * @param {string} color - The color to calculate the YIQ value for.
//  * @return {number} The YIQ value of the color.
//  * 
//  * @example
//  * const yiq = getYIQ("rgb(255, 0, 0)");
//  * console.log(yiq);
//  * // Output: 76.245
//  */
// export function getYIQ(color: string): number {
//     const transformed = TransformColor(color)
//     const [r, g, b] = getHexPartsInRgba(transformed.hex)
//     const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
//     return yiq
// }

/**
 * Calculates the luminance value of a color based on its RGB components.
 *
 * @param {number} r - The red component of the color.
 * @param {number} g - The green component of the color.
 * @param {number} b - The blue component of the color.
 * @return {number} The luminance value of the color.
 */
function luminance(r: number, g: number, b: number): number {
    const a = [r, g, b].map((v) => {
        v /= 255;
        return v <= 0.03928
            ? v / 12.92
            : Math.pow((v + 0.055) / 1.055, GAMMA);
    });
    return a[0] * CRED + a[1] * CGREEN + a[2] * CBLUE;
}

/**
 * Calculates the contrast ratio between two colors.
 *
 * @param {number[]} rgb1 - The RGB values of the first color.
 * @param {number[]} rgb2 - The RGB values of the second color.
 * @return {number} The contrast ratio between the two colors.
 */
export function contrast(rgb1: number[], rgb2: number[]): number {
    const lum1 = luminance(rgb1[0], rgb1[1], rgb1[2]);
    const lum2 = luminance(rgb2[0], rgb2[1], rgb2[2]);
    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);
    return (brightest + 0.05) / (darkest + 0.05);
}

/**
 * Calculates the contrast ratio between two colors.
 *
 * @param {string} color1 - The hexadecimal representation of the first color.
 * @param {string} [color2="#FFFFFF"] - The hexadecimal representation of the second color. Defaults to white.
 * @return {string} The contrast ratio between the two colors, rounded to two decimal places.
 */
export function contrastChecker(color1: string, color2: string = "#FFFFFF"): string {
    const transformedColor1 = TransformColor(color1)
    const transformedColor2 = TransformColor(color2)

    if (!transformedColor1.hex || !transformedColor2.hex) return 'Invalid format'

    const [r1, g1, b1] = getHexPartsInRgba(transformedColor1.hex)
    const [r2, g2, b2] = getHexPartsInRgba(transformedColor2.hex)

    const L = contrast([r1, g1, b1], [r2, g2, b2]).toFixed(2)
    return L
}