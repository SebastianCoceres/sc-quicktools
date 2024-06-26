import { expect, test } from 'vitest'
import { convertToNormalText } from "@/services/TextProcessing/convertToNormalText";

test('convertToNormalText', () => {
    // Pruebas para snake_case
    expect(convertToNormalText('hello_world')).toBe('hello world');
    expect(convertToNormalText('example_text_here')).toBe('example text here');

    // Pruebas para kebab-case
    expect(convertToNormalText('hello-world')).toBe('hello world');
    expect(convertToNormalText('example-text-here')).toBe('example text here');

    // Pruebas para Capital_Snake_Case
    expect(convertToNormalText('HELLO_WORLD')).toBe('HELLO WORLD');
    expect(convertToNormalText('EXAMPLE_TEXT_HERE')).toBe('EXAMPLE TEXT HERE');

    // Pruebas para PascalCase
    expect(convertToNormalText('HelloWorld')).toBe('Hello World');
    expect(convertToNormalText('ExampleTextHere')).toBe('Example Text Here');

    // Pruebas para camelCase
    expect(convertToNormalText('helloWorld')).toBe('hello World');
    expect(convertToNormalText('exampleTextHere')).toBe('example Text Here');

    // Pruebas para texto normal
    expect(convertToNormalText('hello world')).toBe('hello world');
    expect(convertToNormalText('  hello    world ')).toBe('hello world'); // Con espacios extra

    // Pruebas para textos con números y caracteres especiales
    expect(convertToNormalText('helloWorld123')).toBe('hello World123');
    expect(convertToNormalText('hello-world-123')).toBe('hello world 123');
    expect(convertToNormalText('1234')).toBe('1234');
    expect(convertToNormalText('!@#$%^&*()')).toBe('!@#$%^&*()');

    // Pruebas con textos vacíos o solo espacios
    expect(convertToNormalText('')).toBe('');
    expect(convertToNormalText('   ')).toBe('');

    expect(convertToNormalText('TextóDeEjemplo')).toBe('Texto De Ejemplo');
    expect(convertToNormalText('Textó_De-Ejemplo')).toBe('Textó De Ejemplo');
    expect(convertToNormalText('TextóDe$Ejemplo')).toBe('Texto De Ejemplo');
});
