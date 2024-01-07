export const CountSpaces = (text: string) => {
    if (text === "") return "0"

    const spacesFinded = text.match(/\s{1}/g) ?? []
    return String(spacesFinded.length)
}
