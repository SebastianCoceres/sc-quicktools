import { expect, test } from 'vitest'

import { checkType } from './checkType'

test('checkTypes', () => {
    // Pruebas para isCamelCase
    expect(checkType.isCamelCase('anotherExample')).toBe(true);
    expect(checkType.isCamelCase('AnotherExample')).toBe(false);
    expect(checkType.isCamelCase('another_example')).toBe(false);
    expect(checkType.isCamelCase('another-example')).toBe(false);
    expect(checkType.isCamelCase('anotherexample')).toBe(false);
    expect(checkType.isCamelCase('ANOTHEREXAMPLE')).toBe(false);

    // Pruebas para isSnakeCase
    expect(checkType.isSnakeCase('another_example')).toBe(true);
    expect(checkType.isSnakeCase('Another_Example')).toBe(false);
    expect(checkType.isSnakeCase('another-Example')).toBe(false);
    expect(checkType.isSnakeCase('anotherExample')).toBe(false);
    expect(checkType.isSnakeCase('anotherexample')).toBe(false);
    expect(checkType.isSnakeCase('ANOTHEREXAMPLE')).toBe(false);

    // Pruebas para isKebabCase
    expect(checkType.isKebabCase('another-example')).toBe(true);
    expect(checkType.isKebabCase('Another-Example')).toBe(false);
    expect(checkType.isKebabCase('another_example')).toBe(false);
    expect(checkType.isKebabCase('anotherExample')).toBe(false);
    expect(checkType.isKebabCase('anotherexample')).toBe(false);
    expect(checkType.isKebabCase('ANOTHEREXAMPLE')).toBe(false);

    // Pruebas para isPascalCase
    expect(checkType.isPascalCase('AnotherExample')).toBe(true);
    expect(checkType.isPascalCase('anotherExample')).toBe(false);
    expect(checkType.isPascalCase('Another_example')).toBe(false);
    expect(checkType.isPascalCase('another-example')).toBe(false);
    expect(checkType.isPascalCase('anotherexample')).toBe(false);
    expect(checkType.isPascalCase('ANOTHEREXAMPLE')).toBe(false);

    // Pruebas para isCapitalSnakeCase
    expect(checkType.isCapitalSnakeCase('ANOTHER_EXAMPLE')).toBe(true);
    expect(checkType.isCapitalSnakeCase('ANOTHER_example')).toBe(false);
    expect(checkType.isCapitalSnakeCase('Another_Example')).toBe(false);
    expect(checkType.isCapitalSnakeCase('another_example')).toBe(false);
    expect(checkType.isCapitalSnakeCase('ANOTHER-EXAMPLE')).toBe(false);
    expect(checkType.isCapitalSnakeCase('ANOTHEREXAMPLE')).toBe(false);
});