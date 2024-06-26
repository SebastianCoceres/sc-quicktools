import { rgbaToHsla } from "@/services/colorTransform/rgbTransform";
import { regexs } from "@/services/colorTransform/detectColorFormat";

/**
 * Validates if the input string is a valid hexadecimal color code.
 *
 * @param {string} hex - The hexadecimal color code to check.
 * @return {boolean} True if the input is a valid hexadecimal color code, false otherwise.
 */
export function checkHex(hex: string): boolean {
    return !!hex && regexs.hex.test(hex)
}


/**
 * Returns an array of hexadecimal color parts (r, g, b, a) from a given hex color string.
 *
 * @param {string} hex - The hex color string.
 * @return {string[]} An array of hexadecimal color parts (r, g, b, a).
 * 
 * @example
 * const hexParts = getHexParts("#dc1914");
 * console.log(hexParts);
 * // Output: ["dc", "19", "14", "ff"]
 * 
 * @example
 * const hexParts = getHexParts("#dc1914aa");
 * console.log(hexParts);
 * // Output: ["dc", "19", "14", "aa"]
 * 
 * @example
 * const hexParts = getHexParts("#dc1");
 * console.log(hexParts);
 * // Output: ["dd", "cc", "11", "ff"]
 */
export function getHexPartsInRgba(hex: string): number[] | [] {
    if (!checkHex(hex)) return [];
    hex = hex.replace(/^#/, '');
    let r = '0', g = '0', b = '0', a = '1';
    if (hex.length === 3) {
        r = hex[0] + hex[0];
        g = hex[1] + hex[1];
        b = hex[2] + hex[2];
    } else if (hex.length === 4) {
        r = hex[0] + hex[0];
        g = hex[1] + hex[1];
        b = hex[2] + hex[2];
        a = hex[3] + hex[3];
    }
    else if (hex.length === 6) {
        r = hex.slice(0, 2);
        g = hex.slice(2, 4);
        b = hex.slice(4, 6);
    } else if (hex.length === 8) {
        r = hex.slice(0, 2);
        g = hex.slice(2, 4);
        b = hex.slice(4, 6);
        a = hex.slice(6, 8);
    }

    const red = parseInt(r, 16)
    const green = parseInt(g, 16)
    const blue = parseInt(b, 16)
    let alpha = a === "1" ? 1 : (parseInt(a, 16) / 255);

    if (alpha !== 0 && alpha !== 1) {
        alpha = parseFloat(alpha.toFixed(2));
    }
    return [red, green, blue, alpha]
}

/**
 * Converts a hexadecimal color code to an RGBA color string.
 *
 * @param {string} hex - The hexadecimal color code to convert.
 * @return {string} The RGBA color string.
 * 
 * @example
 * const rgb = hexToRgba("#dc1914");
 * console.log(rgb);
 * // Output: "rgba(220, 25, 20, 1)"
 */
export function hexToRgba(hex: string): string {
    if (!checkHex(hex)) return 'Invalid format';
    const [r, g, b, a] = getHexPartsInRgba(hex)
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

/**
 * Converts a hexadecimal color code to an HSLA color string.
 *
 * @param {string} hex - The hexadecimal color code to convert.
 * @return {string} The HSLA color string.
 * 
 * @example
 * const hsl = hexToHsla("#dc1914");
 * console.log(hsl);
 * // Output: "hsla(0, 100%, 50%, 1)"
 */
export function hexToHsla(hex: string): string {
    if (!checkHex(hex)) return 'Invalid format';
    const rgb = hexToRgba(hex)
    const hsl = rgbaToHsla(rgb)
    return hsl

}

export function standarizeHexColor(hex: string) {
    if (!checkHex(hex)) return 'Invalid format';
    hex = hex.trim().replace("#", "")

    if (hex.length === 3) {
        return `#${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`
    }

    if (hex.length === 4) {
        return `#${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`
    }

    if (hex.length === 6) {
        return `#${hex}`
    }

    if (hex.length === 8) {
        return `#${hex}`
    }

    return `#${hex}`

}