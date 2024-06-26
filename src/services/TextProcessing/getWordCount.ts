import { convertToNormalText } from ".";
import { CleanText } from "@/services/TextProcessing/cleanText";

export const GetWordCount = (text: string) => {
    if (text === "") return 0
    return CleanText(convertToNormalText(text)).split(" ").length;
}