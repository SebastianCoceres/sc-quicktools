export const functionsData = [
    {
        category: "Text Formatting and Cleaning",
        functions: [
            {
                name: "Trimmed",
                description:
                    "Elimina espacios en blanco al inicio y al final del texto.",
                example: "  Helló   World -> Hello World",
            },
            {
                name: "RemoveExtraSpaces",
                description: "Elimina espacios adicionales dentro del texto.",
                example: "  Hello   World  -> Hello World",
            },
            {
                name: "RemoveAccents",
                description:
                    "Elimina acentos y caracteres especiales, normalizando el texto.",
                example: "  áéíóú -> aeiou",
            },
            {
                name: "CleanText",
                description: "Combina funciones para limpiar el texto.",
                example: "  Helló   World  -> Hello World",
            },
        ],
    },
    {
        category: "Case Conversion",
        functions: [
            {
                name: "Uppercase",
                description: "Convierte el texto a mayúsculas.",
                example: "Hello World -> HELLO WORLD",
            },
            {
                name: "Lowercase",
                description: "Convierte el texto a minúsculas.",
                example: "Hello World -> hello world",
            },
            {
                name: "firstCapital",
                description: "Convierte la primera letra de la oración a mayúscula.",
                example: "hello world -> Hello world",
            },
            {
                name: "TitleCase",
                description: "Convierte la primera letra de cada palabra a mayúscula.",
                example: "hello world -> Hello World",
            },
        ],
    },
    {
        category: "Text Transformation",
        functions: [
            {
                name: "Reverse",
                description: "Invierte el orden de los caracteres en el texto.",
                example: "hello world -> dlrow olleh",
            },
            {
                name: "Camelcase",
                description: "Convierte el texto a formato camelCase.",
                example: "hello world -> helloWorld",
            },
            {
                name: "Snakecase",
                description: "Convierte el texto a formato snake_case.",
                example: "hello world -> hello_world",
            },
            {
                name: "Kebabcase",
                description: "Convierte el texto a formato kebab-case.",
                example: "hello world -> hello-world",
            },
            {
                name: "PascalCase",
                description: "Convierte el texto a formato PascalCase.",
                example: "hello world -> HelloWorld",
            },
            {
                name: "CapitalSnakeCase",
                description:
                    "Convierte el texto a snake_case pero con todas las letras en mayúsculas.",
                example: "hello world -> HELLO_WORLD",
            },
            {
                name: "ConvertToNormalText",
                description:
                    "Convierte el texto de los distintos formatos a uno normal agregando espacios donde faltan. No cambia las mayusculas. Los acentos y caracteres especiales se mantienen.",
                example: "helloWorld -> hello World",
            },
        ],
    },
    {
        category: "Counting Functions",
        functions: [
            {
                name: "GetLength",
                description:
                    "Devuelve la longitud del texto después de eliminar espacios adicionales.",
                example: "hello world -> 11",
            },
            {
                name: "GetWordCount",
                description: "Cuenta la cantidad de palabras en el texto.",
                example: "hello world -> 2",
            },
            {
                name: "GetCharacterCount",
                description: "Cuenta la cantidad de caracteres en el texto.",
                example: "hello world -> 11",
            },
            {
                name: "CountSpaces",
                description: "Cuenta la cantidad de espacios en el texto.",
                example: "hello world -> 1",
            },
            {
                name: "GetAccentsCount",
                description: "Cuenta la cantidad de caracteres con acentos.",
                example: "Adiós del mundo -> 1",
            },
        ],
    },
];