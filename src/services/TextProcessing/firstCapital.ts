import { Lowercase, convertToNormalText } from ".";

export const FirstCapital = (text: string) => {
    const words = Lowercase(convertToNormalText(text))
    return words.charAt(0).toUpperCase() + words.slice(1).toLowerCase();
}