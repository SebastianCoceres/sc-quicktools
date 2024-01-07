export const GetAccentsCount = (text: string) => {
    // eslint-disable-next-line no-useless-escape
    return text.match(/[ÁÉÍÓÚáéíóúÑñ,.;:"'(){}\[\]?!\-_\/\\*&#@%+=<>`^~|]/g)?.length || "0";
}
