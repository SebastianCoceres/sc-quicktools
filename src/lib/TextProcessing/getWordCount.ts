import { convertToNormalText } from ".";
import { CleanText } from "./cleanText";

export const GetWordCount = (text: string) => {
    if (text === "") return 0
    return CleanText(convertToNormalText(text)).split(" ").length;
}