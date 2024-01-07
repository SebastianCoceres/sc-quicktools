import { CleanText, convertToNormalText } from ".";

export const Kebabcase = (text: string) => {
    return CleanText(convertToNormalText(text)).replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match) {
        if (+match === 0) return "-";
        return match.toLowerCase();
    })
}