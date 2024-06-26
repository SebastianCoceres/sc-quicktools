import { regexs } from "@/services/colorTransform/detectColorFormat";

export function checkHsl(hsl: string): boolean {
    return !!hsl && regexs.hsl.test(hsl)
}

/**
 * Converts HSLA color to hexadecimal format.
 *
 * @param {string} color - The HSLA color string to convert.
 * @return {string} The color converted to hexadecimal format.
 * 
 * @example
 * const hex = hslaToHex("hsla(0, 100%, 50%, 0.5)");
 * console.log(hex);
 * // Output: "#ff000080"
 */
export function hslaToHex(color: string): string {
    if (!checkHsl(color)) return 'Invalid format';
    const hsla = color.match(regexs.hsl)?.slice(2, 6) ?? ["0", "0", "0", "1"]
    return `#${hslToHex(hsla[0], hsla[1], hsla[2])}${parseFloat(hsla[3]) < 1 ? Math.round(parseFloat(hsla[3]) * 255).toString(16).padStart(2, "0") : ""}`
}

/**
 * Converts an HSL color to a hexadecimal color code.
 *
 * @param {string} h - The hue value of the HSL color.
 * @param {string} s - The saturation value of the HSL color.
 * @param {string} l - The lightness value of the HSL color.
 * @return {string} The hexadecimal color code.
 * 
 * @example
 * const hex = hslToHex("0", "100", "50");
 * console.log(hex);
 * // Output: "#ff0000"
 */

/*No se transforma bien de hsl a hex revisar */
export function hslToHex(h: string, s: string, l: string): string {
    const hue = parseFloat(h);
    const saturation = parseFloat(s) / 100;
    const lightness = parseFloat(l) / 100;

    const a = saturation * Math.min(lightness, 1 - lightness);

    const f = (n: number) => {
        const k = (n + hue / 30) % 12;
        const color = lightness - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0');
    };

    return `${f(0)}${f(8)}${f(4)}`;
}

/**
 * Converts an HSLA color to an RGBA color string.
 *
 * @param {string} color - The HSLA color string to convert.
 * @return {string} The color converted to RGBA format.
 * 
 * @example
 * const rgba = hslaToRgba("hsla(0, 100%, 50%, 0.5)");
 * console.log(rgba);
 * // Output: "rgba(255, 0, 0, 0.5)"
 */
export function hslaToRgba(color: string): string {
    if (!checkHsl(color)) return 'Invalid format';
    const hsla = color.match(regexs.hsl)?.slice(1, 5) ?? ["0", "0", "0", "1"]
    return `rgba(${hslToRgb(hsla[1], hsla[2], hsla[3])}, ${hsla[4] ?? "1"})`
}


/**
 * Converts an HSL color to an RGB color string.
 *
 * @param {string} h - The hue value of the HSL color.
 * @param {string} s - The saturation value of the HSL color.
 * @param {string} l - The lightness value of the HSL color.
 * @return {string} The color converted to RGB format.
 *
 * @example
 * const rgb = hslToRgb("0", "100", "50");
 * console.log(rgb);
 * // Output: "255,0,0"
 */
export function hslToRgb(h: string, s: string, l: string): string {
    let r: number, g: number, b: number;
    const hue = parseFloat(h) / 360;
    const saturation = parseFloat(s) / 100;
    const lightness = parseFloat(l) / 100;

    if (saturation === 0) {
        r = g = b = lightness;
    } else {
        const hue2rgb = (p: number, q: number, t: number): number => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };

        const q = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
        const p = 2 * lightness - q;

        r = hue2rgb(p, q, hue + 1 / 3);
        g = hue2rgb(p, q, hue);
        b = hue2rgb(p, q, hue - 1 / 3);
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)].join(", ");
}
