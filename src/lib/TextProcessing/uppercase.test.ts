import { expect, test } from 'vitest'
import { Uppercase } from ".";

test('Uppercase', () => {
    expect(Uppercase('')).toBe('');
    expect(Uppercase('hello world')).toBe('HELLO WORLD');
    expect(Uppercase('HELLO WORLD')).toBe('HELLO WORLD');
    expect(Uppercase('hello123! world')).toBe('HELLO123! WORLD');
    expect(Uppercase('helloWorld')).toBe('HELLOWORLD');
    expect(Uppercase('HelloWorld')).toBe('HELLOWORLD');
    expect(Uppercase('hello_world')).toBe('HELLO_WORLD');
    expect(Uppercase('HELLO_WORLD')).toBe('HELLO_WORLD');
    expect(Uppercase('hello_world123')).toBe('HELLO_WORLD123');
    expect(Uppercase('hello_world123!')).toBe('HELLO_WORLD123!');
});
