import { CleanText, Lowercase, convertToNormalText } from ".";

export const PascalCase = (text: string) => {
    return Lowercase(CleanText(convertToNormalText(text))).replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
        if (+match === 0) return "";
        return index === 0 ? match.toUpperCase() : match.toUpperCase();
    });
}
