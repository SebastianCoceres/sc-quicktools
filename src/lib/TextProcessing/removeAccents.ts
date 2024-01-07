import { Trimmed } from ".";

export const RemoveAccents = (text: string) => {
    // Eliminar acentos y caracteres especiales
    return Trimmed(text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/-|_/g, ' ')
        .replace(/[^\w\s]/g, '')
        .replace(/[^\p{L}\p{N}\p{P}\p{Z}]/gu, '')
        .replace(/[ñÑ]/g, 'n'));
};
