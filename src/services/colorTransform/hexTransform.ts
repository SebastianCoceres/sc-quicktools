import { rgbaToHsla } from "./rgbTransform";

export function hexToRgba(hex: string) {
    let r = 0, g = 0, b = 0, a = 1;
    if (hex.length === 4) {
        r = parseInt(hex[1] + hex[1], 16)
        g = parseInt(hex[2] + hex[2], 16)
        b = parseInt(hex[3] + hex[3], 16)
    } else if (hex.length === 7) {
        r = parseInt(hex[1] + hex[2], 16)
        g = parseInt(hex[3] + hex[4], 16)
        b = parseInt(hex[5] + hex[6], 16)
    } else if (hex.length === 9) {
        r = parseInt(hex[1] + hex[2], 16)
        g = parseInt(hex[3] + hex[4], 16)
        b = parseInt(hex[5] + hex[6], 16)
        a = parseInt(hex[7] + hex[8], 16)
    }

    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

export function hexToHsla(hex: string) {
    const rgb = hexToRgba(hex)
    const hsl = rgbaToHsla(rgb)
    return hsl

}