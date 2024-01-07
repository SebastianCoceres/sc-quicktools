import { Trimmed } from ".";

export const RemoveExtraSpaces = (text: string) => {
    return Trimmed(text.replace(/\s+/g, " "));
};