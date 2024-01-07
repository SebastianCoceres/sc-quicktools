export function DetectFormat(color: string) {
    if (color.startsWith("#")) {
        return "hex"
    }
    if (color.startsWith("rgb")) {
        return "rgb"
    }
    if (color.startsWith("rgba")) {
        return "rgba"
    }
    if (color.startsWith("hsl")) {
        return "hsl"
    }
    if (color.startsWith("hsla")) {
        return "hsla"
    }
    return "invalid format"
}