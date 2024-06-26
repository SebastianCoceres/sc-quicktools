import { DetectColorFormat } from "@/services/colorTransform/detectColorFormat"
import { hexToRgba, hexToHsla, standarizeHexColor } from "@/services/colorTransform/hexTransform"
import { hslaToHex, hslaToRgba } from "@/services/colorTransform/hslTransform"
import { namedColorToHex } from "@/services/colorTransform/namedTransform"
import { rgbaToHex, rgbaToHsla } from "@/services/colorTransform/rgbTransform"

/**
 * Transform the input color to different color formats (hex, rgba, hsla) based on the detected color format.
 *
 * @param {string} color - The color to be transformed.
 * @return {Record<string, string>} An object containing the transformed color values in different formats.
 * 
 * @example
 * const transformedColors = TransformColor("rgb(255, 0, 0)");
 * console.log(transformedColors);
 * // Output: {
 * //   hex: "#ff0000",
 * //   rgba: "rgba(255, 0, 0, 1)",
 * //   hsla: "hsla(0, 100%, 50%, 1)"
 * // }
 */
export function TransformColor(color: string): Record<string, string> {
    if (!color) return {}
    color = color.toLocaleLowerCase()

    const transformedColors = {
        hex: '',
        rgba: '',
        hsla: '',
    }

    if (DetectColorFormat(color) == "hex") {
        transformedColors.hex = standarizeHexColor(color)
        transformedColors.rgba = hexToRgba(color)
        transformedColors.hsla = hexToHsla(color)
    }

    if (DetectColorFormat(color) == "rgba") {
        transformedColors.rgba = color
        transformedColors.hex = rgbaToHex(color)
        transformedColors.hsla = rgbaToHsla(color)
    }

    if (DetectColorFormat(color) == "hsla") {
        transformedColors.hsla = color
        transformedColors.hex = hslaToHex(color)
        transformedColors.rgba = hslaToRgba(color)
    }

    if (DetectColorFormat(color) == "named") {
        transformedColors.hex = namedColorToHex(color)
        if (!transformedColors.hex) return transformedColors
        transformedColors.rgba = hexToRgba(transformedColors.hex)
        transformedColors.hsla = hexToHsla(transformedColors.hex)
    }

    return transformedColors
}

