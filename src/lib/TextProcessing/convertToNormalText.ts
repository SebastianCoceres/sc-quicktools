import { RemoveExtraSpaces, Trimmed } from ".";
import { checkType } from "./checkType";

export const convertToNormalText = (text: string) => {
    text = Trimmed(RemoveExtraSpaces(text))
    if (checkType.isPascalCase(text) || checkType.isCamelCase(text)) {
        return text.replace(/([a-z\u00E0-\u00FC])([A-Z\u00C0-\u00DC])/g, '$1 $2').replace(/([0-9])([A-Z\u00C0-\u00DC])/g, '$1 $2')
    }

    if (text.includes('_') || text.includes('-')) {
        text = text.replace(/[_-]/g, " ")
    }

    return text
}

