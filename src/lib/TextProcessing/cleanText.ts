import { RemoveAccents } from "./removeAccents";
import { RemoveExtraSpaces } from "./removeExtraSpaces";
import { Trimmed } from "./trimmed";

export const CleanText = (text: string) => {
    return Trimmed(RemoveAccents(RemoveExtraSpaces(text)));
};