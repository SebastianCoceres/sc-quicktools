export const GetCharacterCount = (text: string) => {
    return Array.from(text.replace(/\s/g, "")).length;
}