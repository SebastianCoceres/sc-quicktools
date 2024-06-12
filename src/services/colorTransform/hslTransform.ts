import { regexs } from "./detectColorFormat";

export function hslaToHex(color: string) {
    const hsla = color.match(regexs.hsl)?.slice(1, 5) ?? ["0", "0", "0", "1"]

    return `#${hslToHex(hsla[0], hsla[1], hsla[2])}${parseFloat(hsla[3]) < 1 ? Math.round(parseFloat(hsla[3]) * 255).toString(16).padStart(2, "0") : ""}`
}
export function hslToHex(h: string, s: string, l: string) {
    const _l = parseInt(l) / 100;
    const a = parseInt(s) * Math.min(_l, 1 - _l) / 100;
    const f = (n: number) => {
        const k = (n + parseInt(h) / 30) % 12;
        const color = _l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
    };
    return `${f(0)}${f(8)}${f(4)}`;
}
export function hslaToRgba(color: string) {
    const hsla = color.match(regexs.hsl)?.slice(1, 5) ?? ["0", "0", "0", "1"]
    return `rgba(${hslToRgb(hsla[0], hsla[1], hsla[2])}, ${hsla[3] ?? "1"})`
}
export function hslToRgb(h: string, s: string, l: string) {
    const r = Math.round((parseFloat(h) / 360) * 255)
    const g = Math.round((parseFloat(s) / 100) * 255)
    const b = Math.round((parseFloat(l) / 100) * 255)

    return [r, g, b].join(",")
}