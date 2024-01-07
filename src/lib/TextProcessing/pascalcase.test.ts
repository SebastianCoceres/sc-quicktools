import { expect, test } from 'vitest'
import { PascalCase } from ".";

test('PascalCase', () => {
    expect(PascalCase('')).toBe('');
    expect(PascalCase('hello world')).toBe('HelloWorld');
    expect(PascalCase('HELLO WORLD')).toBe('HelloWorld');
    expect(PascalCase('Hello World')).toBe('HelloWorld');
    expect(PascalCase('HelloWorld')).toBe('HelloWorld');
    expect(PascalCase('hello123! world')).toBe('Hello123World');

    expect(PascalCase('helloWorld')).toBe('HelloWorld');
    expect(PascalCase('hello_world')).toBe('HelloWorld');
    expect(PascalCase('hello-world')).toBe('HelloWorld');
    expect(PascalCase('hello-world-123')).toBe('HelloWorld123');
});
