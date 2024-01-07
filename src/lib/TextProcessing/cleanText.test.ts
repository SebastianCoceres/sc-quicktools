import { expect, test } from 'vitest'

import { CleanText } from '.'

test('CapitalSnakeCase', () => {
    expect(CleanText('hello world')).toBe('hello world') // Sin cambios
    expect(CleanText('hello_world')).toBe('hello world') // Guiones
    expect(CleanText('  hello    world ')).toBe('hello world') // Espacios adicionales
    expect(CleanText('HelloWorld')).toBe('HelloWorld') // Mayúsculas
    expect(CleanText('Helló World')).toBe('Hello World') // Acentos
    expect(CleanText('helloworld')).toBe('helloworld') // todo minuscula
    expect(CleanText('Hello123')).toBe('Hello123'); // Combinación de letras y números
    expect(CleanText('Héllo Wórld')).toBe('Hello World'); // Acentos en mayúsculas y minúsculas
    expect(CleanText('HELLO_world')).toBe('HELLO world'); // Mayúsculas con guión bajo
    expect(CleanText('hello-WORLD')).toBe('hello WORLD'); // Combinación de guión y mayúsculas
    expect(CleanText('Hello_World')).toBe('Hello World'); // Mayúsculas con guión bajo
    expect(CleanText('hello-world')).toBe('hello world'); // Prueba con guiones
    expect(CleanText('hello   world')).toBe('hello world'); // Múltiples espacios

    expect(CleanText('Hello\nWorld')).toBe('Hello World'); // Salto de línea
    expect(CleanText('Hello\tWorld')).toBe('Hello World'); // Tabulación
    expect(CleanText('1234')).toBe('1234'); // Números
    expect(CleanText('!@#$%^&*()')).toBe(''); // Caracteres especiales
    expect(CleanText('')).toBe('') // Vacío
    expect(CleanText('  ')).toBe('') // Solo espacios
    expect(CleanText('\t')).toBe('') // Prueba con tabulación
    expect(CleanText('\n')).toBe('') // Prueba con salto de línea

})