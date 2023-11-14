# SC-QuickTools

SC-QuickTools is a personal project created for the love of text and the joy of playing with words. It's not about selling a tool but about providing a fun and functional space for users to tweak and twist their text in creative ways.

## Dependencies

SC-QuickTools is powered by React + TypeScript + Vite + Radix UI + Framer Motion + Tailwind CSS.

## What's Inside?

### Text Formatting and Cleaning

1. **Trimmed:** 
   - Elimina espacios en blanco al inicio y al final del texto.
   - Ejemplo: "Helló World" -> "Hello World"

2. **RemoveExtraSpaces:** 
   - Elimina espacios adicionales dentro del texto.
   - Ejemplo: "Hello   World" -> "Hello World"

3. **RemoveAccents:** 
   - Elimina acentos y caracteres especiales, normalizando el texto.
   - Ejemplo: "áéíóú" -> "aeiou"

4. **CleanText:** 
   - Combina funciones para limpiar el texto.
   - Ejemplo: "  Helló   World  " -> "Hello World"

### Case Conversion

5. **Uppercase:** 
   - Convierte el texto a mayúsculas.
   - Ejemplo: "hello world" -> "HELLO WORLD"

6. **Lowercase:** 
   - Convierte el texto a minúsculas.
   - Ejemplo: "Hello World" -> "hello world"

7. **First Capital:** 
   - Convierte la primera letra de la oración a mayúscula.
   - Ejemplo: "hello world" -> "Hello world"

8. **TitleCase:** 
   - Convierte la primera letra de cada palabra a mayúscula.
   - Ejemplo: "hello world" -> "Hello World"

### Text Transformation

9. **Reverse:** 
   - Invierte el orden de los caracteres en el texto.
   - Ejemplo: "hello world" -> "dlrow olleh"

10. **Camelcase:** 
    - Convierte el texto a formato camelCase.
    - Ejemplo: "Hello World" -> "helloWorld"

11. **Snakecase:** 
    - Convierte el texto a formato snake_case.
    - Ejemplo: "Hello World" -> "hello_world"

12. **Kebabcase:** 
    - Convierte el texto a formato kebab-case.
    - Ejemplo: "Hello World" -> "hello-world"

13. **PascalCase:** 
    - Convierte el texto a formato PascalCase.
    - Ejemplo: "Hello World" -> "HelloWorld"

14. **CapitalSnakeCase:** 
    - Convierte el texto a snake_case pero con todas las letras en mayúsculas.
    - Ejemplo: "Hello World" -> "HELLO_WORLD"

### Counting Functions

15. **GetLength:** 
    - Devuelve la longitud del texto después de eliminar espacios adicionales.
    - Ejemplo: "hello world" -> "11"

16. **GetWordCount:** 
    - Cuenta la cantidad de palabras en el texto.
    - Ejemplo: "hello world" -> "2"

17. **GetCharacterCount:** 
    - Cuenta la cantidad de caracteres en el texto.
    - Ejemplo: "hello world" -> "11"

18. **CountSpaces:** 
    - Cuenta la cantidad de espacios en el texto.
    - Ejemplo: "hello world" -> "1"

19. **GetAccentsCount:** 
    - Cuenta la cantidad de caracteres con acentos.
    - Ejemplo: "Adiós del mundo" -> "1"