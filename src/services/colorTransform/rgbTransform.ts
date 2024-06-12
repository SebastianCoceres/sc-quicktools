import { regexs } from "./detectColorFormat"

export function rgbaToHex(color: string) {
    if (!color.match(regexs.rgb)) return ""
    const rgba = color.match(regexs.rgb)?.slice(1, 5) ?? ["0", "0", "0", "1"]
    return `#${rgbToHex(rgba[0], rgba[1], rgba[2])}${parseFloat(rgba[3]) < 1 ? Math.round(parseFloat(rgba[3]) * 255).toString(16).padStart(2, "0") : ""}`
}
export function rgbToHex(r: string, g: string, b: string) {
    return [r, g, b].map((x) => parseInt(x).toString(16).padStart(2, "0")).join("")
}

export function rgbaToHsla(color: string) {
    if (!color.match(regexs.rgb)) return ""
    const rgba = color.match(regexs.rgb)?.slice(1, 5) ?? ["0", "0", "0", "1"]
    return `hsla(${rgbToHsl(rgba[0], rgba[1], rgba[2])}, ${rgba[3]})`
}

export function rgbToHsl(r: string, g: string, b: string) {
    const _r = parseInt(r) / 255;
    const _g = parseInt(g) / 255;
    const _b = parseInt(b) / 255;

    const max = Math.max(_r, _g, _b)
    const min = Math.min(_r, _g, _b)
    const diff = max - min
    let h = 0
    let s = 0
    let l = 0

    // Hue
    if (diff == 0) h = 0
    // Red is on the dominant side
    else if (max == _r) h = ((_g - _b) / diff) % 6
    // Green is on the dominant side
    else if (max == _g) h = (_b - _r) / diff + 2
    // Blue is on the dominant side
    else h = (_r - _g) / diff + 4

    h = Math.round(60 * h)

    // Lightness
    l = (max + min) / 2

    // Saturation
    s = diff == 0 ? 0 : diff / (1 - Math.abs(2 * l - 1))

    s = +(s * 100).toFixed()
    l = +(l * 100).toFixed()
    return `${h}, ${s}%, ${l}%`
}