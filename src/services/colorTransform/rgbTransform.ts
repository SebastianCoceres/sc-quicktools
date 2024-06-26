import { regexs } from "@/services/colorTransform/detectColorFormat";
import { formatfloatString } from "@/lib/utils"

/**
 * Converts an RGBA color string to a hexadecimal color string.
 *
 * @param {string} color - The RGBA color string to convert.
 * @return {string} The color converted to hexadecimal format.
 * 
 * @example
 * const hex = rgbaToHex("rgba(255, 0, 0, 0.5)");
 * console.log(hex);
 * // Output: "#ff000080"
 */
export function rgbaToHex(color: string): string {
    const match = color.match(regexs.rgb);
    if (!match) return "Invalid format";
    const rgba = match.slice(1, 5) ?? ["0", "0", "0", "1"]
    return `#${rgbToHex(rgba[0], rgba[1], rgba[2])}${parseFloat(rgba[3]) < 1 ? Math.round(parseFloat(rgba[3]) * 255).toString(16).padStart(2, "0") : ""}`
}
/**
 * Converts RGB values to a hexadecimal color string.
 *
 * @param {string} r - The red color value.
 * @param {string} g - The green color value.
 * @param {string} b - The blue color value.
 * @return {string} The hexadecimal color string.
 * 
 * @example
 * const hex = rgbToHex("255", "0", "0");
 * console.log(hex);
 * // Output: "#ff0000"
 */
export function rgbToHex(r: string, g: string, b: string): string {
    return [r, g, b].map((x) => parseInt(x).toString(16).padStart(2, "0")).join("")
}


/**
 * Converts an RGBA color string to an HSLA color string.
 *
 * @param {string} color - The RGBA color string to convert.
 * @return {string} The HSLA color string.
 * 
 * @example
 * rgbaToHsla("255, 0, 0, 1"); // Output: "hsla(0, 100%, 50%, 1)"
 * rgbaToHsla("0, 255, 0, 0.5"); // Output: "hsla(120, 100%, 50%, 0.5)"
 * rgbaToHsla("0, 0, 0, 0"); // Output: "hsla(0, 0%, 0%, 0)"
 */
export function rgbaToHsla(color: string): string {
    const match = color.match(regexs.rgb);
    if (!match) return "Invalid format";

    const rgba = match.slice(1, 5).map((value, index) => index < 3 ? parseInt(value) : (value ? parseFloat(value) : 1));

    const [r, g, b, a] = rgba;

    return `hsla(${rgbToHsl(r, g, b)}, ${a})`;
}

/**
 * Converts an RGB color to its corresponding HSL (Hue, Saturation, Lightness) representation.
 *
 * @param {number} r - The red component of the RGB color.
 * @param {number} g - The green component of the RGB color.
 * @param {number} b - The blue component of the RGB color.
 * @return {string} The HSL representation of the RGB color in the format "h, s%, l%".
 * 
 * @example
 * const hsl = rgbToHsl(255, 0, 0);
 * console.log(hsl);
 * // Output: "0, 100%, 50%"
 */
export function rgbToHsl(r: number, g: number, b: number): string {
    const _r = r / 255;
    const _g = g / 255;
    const _b = b / 255;

    const max = Math.max(_r, _g, _b);
    const min = Math.min(_r, _g, _b);
    const diff = max - min;

    let h = 0;
    let s = 0;
    const l = (max + min) / 2;

    if (diff !== 0) {
        s = l > 0.5 ? diff / (2 - max - min) : diff / (max + min);

        switch (max) {
            case _r:
                h = ((_g - _b) / diff + (_g < _b ? 6 : 0)) % 6;
                break;
            case _g:
                h = ((_b - _r) / diff + 2) % 6;
                break;
            case _b:
                h = ((_r - _g) / diff + 4) % 6;
                break;
        }

        h *= 60;
    }

    const hue = formatfloatString((h).toFixed(1));
    const saturation = formatfloatString((s * 100).toFixed(1));
    const lightness = formatfloatString((l * 100).toFixed(1));


    return `${hue}, ${saturation}%, ${lightness}%`;
}
