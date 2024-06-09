import { RemoveExtraSpaces } from ".";

export const Reverse = (text: string) => {
    return RemoveExtraSpaces(text).split("").reverse().join("");

}