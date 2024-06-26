import { RemoveAccents } from "@/services/TextProcessing/removeAccents";
import { RemoveExtraSpaces } from "@/services/TextProcessing/removeExtraSpaces";
import { Trimmed } from "@/services/TextProcessing/trimmed";

export const CleanText = (text: string) => {
    return Trimmed(RemoveAccents(RemoveExtraSpaces(text)));
};