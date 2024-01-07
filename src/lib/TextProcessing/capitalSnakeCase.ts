import { CleanText, Uppercase, convertToNormalText } from ".";

export const CapitalSnakeCase = (text: string) => {
    return Uppercase(CleanText(convertToNormalText(text))).replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match) {
        if (+match === 0) return "_";
        return match.toUpperCase();
    });
}