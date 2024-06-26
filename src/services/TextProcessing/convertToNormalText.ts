import { RemoveAccents, RemoveExtraSpaces, Trimmed } from ".";
import { checkType } from "@/services/TextProcessing/checkType";

export const convertToNormalText = (text: string) => {
    text = Trimmed(RemoveExtraSpaces(text))

    if (checkType.isSnakeCase(RemoveAccents(text)) || checkType.isKebabCase(RemoveAccents(text)) || checkType.isCapitalSnakeCase(RemoveAccents(text))) {
        return RemoveAccents(text).replace(/[_-]/g, " ");
    }

    if (checkType.isPascalCase(RemoveAccents(text)) || checkType.isCamelCase(RemoveAccents(text))) {
        return RemoveAccents(text).replace(/([a-z\u00E0-\u00FC])([A-Z\u00C0-\u00DC])/g, '$1 $2').replace(/([0-9])([A-Z\u00C0-\u00DC])/g, '$1 $2')
    }

    if (text.includes('_') || text.includes('-')) {
        return text.replace(/[_-]/g, " ")
    }



    return Trimmed(text)
}

