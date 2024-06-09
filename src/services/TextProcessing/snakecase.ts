import { CleanText, Lowercase, convertToNormalText } from ".";

export const Snakecase = (text: string) => {
    return Lowercase(CleanText(convertToNormalText(text))).replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match) {
        if (+match === 0) return "_";
        return match.toLowerCase()
    });
}