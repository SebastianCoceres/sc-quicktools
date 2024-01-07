import { RemoveExtraSpaces, Trimmed } from ".";
import { checkType } from "./checkType";

export const convertToNormalText = (text: string) => {
    text = Trimmed(RemoveExtraSpaces(text))
    if (checkType.isSnakeCase(text) || checkType.isKebabCase(text) || checkType.isCapitalSnakeCase(text)) {
        return text.replace(/[_-]/g, " ");
    }
    if (checkType.isPascalCase(text) || checkType.isCamelCase(text)) {
        return text.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/([0-9])([A-Z])/g, '$1 $2')
    }

    return text
}

