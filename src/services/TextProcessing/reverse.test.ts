import { expect, test } from 'vitest'
import { Reverse } from ".";

test('Reverse', () => {
    expect(Reverse('')).toBe('');
    expect(Reverse('Hello, world!')).toBe('!dlrow ,olleH');
    expect(Reverse('Hello2World')).toBe('dlroW2olleH');
    expect(Reverse('Hello World')).toBe('dlroW olleH');
    expect(Reverse('hello World')).toBe('dlroW olleh');
    expect(Reverse('Hello world')).toBe('dlrow olleH');
    expect(Reverse('HELLO WORLD')).toBe('DLROW OLLEH');
    expect(Reverse('hello   world')).toBe('dlrow olleh');
    expect(Reverse('HELLO_WORLD')).toBe('DLROW_OLLEH');
    expect(Reverse('helloWorld')).toBe('dlroWolleh');
    expect(Reverse('hello-world')).toBe('dlrow-olleh');
    expect(Reverse('hello_world')).toBe('dlrow_olleh');
});
