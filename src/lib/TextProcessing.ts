//! Text Formatting and Cleaning Functions

const ConvertToNormalText = (text: string) => {
    let t = text;

    // Agregar espacio entre letras y números
    if (/\d/.test(text)) {
        t = t.replace(/([a-z])(\d+)/gi, function (_, letter, digits) {
            return letter + ' ' + digits;
        });
    }

    // Agregar espacio entre palabras en camelCase
    const words = t.split(/(?=[A-Z])|_|-| /);

    // Manejar guiones y guiones bajos como separadores de palabras
    const normalizedText = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    return normalizedText;
};

export const Trimmed = (text: string) => {
    return ConvertToNormalText(text).trim();
};

export const RemoveExtraSpaces = (text: string) => {
    // Eliminar espacios adicionales
    return ConvertToNormalText(text).replace(/ {2,}/g, " ");
};

export const RemoveAccents = (text: string) => {
    // Eliminar acentos y caracteres especiales
    return ConvertToNormalText(text).normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^\w\s]|_/g, '').replace(/[ñÑ]/g, 'n');
};

export const CleanText = (text: string) => {
    // Aplicar todas las funciones de normalización
    return Trimmed(RemoveAccents(RemoveExtraSpaces(ConvertToNormalText(text))));
};

//! Case Conversion Functions
export const Uppercase = (text: string) => {
    return ConvertToNormalText(text).toUpperCase();
    // Example: "hello world" -> "HELLO WORLD"
}

export const Lowercase = (text: string) => {
    return ConvertToNormalText(text).toLowerCase();
    // Example: "Hello World" -> "hello world"
}

export const FirstCapital = (text: string) => {
    const words = ConvertToNormalText(text)
    return words.charAt(0).toUpperCase() + words.slice(1).toLowerCase();
    // Example: "hello world" -> "Hello world"
}

export const TitleCase = (text: string) => {
    return RemoveExtraSpaces(ConvertToNormalText(text)).replace(/([^\W_]+[^\s-]*) */g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase();
    });
    // Example: "hello world" -> "Hello World"
}

//! Text Transformation Functions
export const Reverse = (text: string) => {
    return ConvertToNormalText(text).split("").reverse().join("");
    // Example: "hello world" -> "dlrow olleh"
}

export const Camelcase = (text: string) => {
    return CleanText(ConvertToNormalText(text)).replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
        if (+match === 0) return "";
        return index === 0 ? match.toLowerCase() : match.toUpperCase();
        // Example: "Hello World" -> "helloWorld"
    });
}

export const Snakecase = (text: string) => {
    return CleanText(ConvertToNormalText(text)).replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
        if (+match === 0) return "_";
        return index === 0 ? match.toLowerCase() : match.toUpperCase();
        // Example: "Hello World" -> "hello_world"
    });
}

export const Kebabcase = (text: string) => {
    const normal = ConvertToNormalText(text)
    const cleaned = CleanText(normal)
    return cleaned.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match) {
        if (+match === 0) return "-";
        return match.toLowerCase();
        // Example: "Hello World" -> "hello-world"
    })
}

export const PascalCase = (text: string) => {
    return CleanText(ConvertToNormalText(text)).replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
        if (+match === 0) return "";
        return index === 0 ? match.toUpperCase() : match.toUpperCase();
        // Example: "Hello World" -> "HelloWorld"
    });
}

export const CapitalSnakeCase = (text: string) => {
    return Uppercase(CleanText(ConvertToNormalText(text))).replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match) {
        if (+match === 0) return "_";
        return match.toUpperCase();
        // Example: "Hello World" -> "HELLO_WORLD"
    });
}

//! Counting Functions
export const GetLength = (text: string) => {
    return String(RemoveExtraSpaces(text).length);
    // Example: "hello world" -> 11
}

export const GetWordCount = (text: string) => {
    return String(Trimmed(RemoveExtraSpaces(CleanText(text))).split(" ").length);
    // Example: "hello world" -> 2
}

export const GetCharacterCount = (text: string) => {
    return String(RemoveExtraSpaces(text).replace(/\s/g, "").length);
    // Example: "hello world" -> 11
}

export const CountSpaces = (text: string) => {
    return String(text.split(' ').length - 1)
}

export const GetAccentsCount = (text: string) => {
    return text.match(/[ÁÉÍÓÚáéíóúÑñ._-]/g)?.length || "0";
}

