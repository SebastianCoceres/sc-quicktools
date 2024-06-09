import { expect, test } from 'vitest'
import { RemoveAccents } from ".";

test('RemoveAccents', () => {
    expect(RemoveAccents('')).toBe('');
    expect(RemoveAccents('Hello, world!')).toBe('Hello world');
    expect(RemoveAccents('Canción')).toBe('Cancion');
    expect(RemoveAccents('¡Hola! ¿Cómo estás?')).toBe('Hola Como estas');
    expect(RemoveAccents('hello-world_foo')).toBe('hello world foo');
    expect(RemoveAccents('Niño')).toBe('Nino');
    expect(RemoveAccents('Test 123')).toBe('Test 123');
    expect(RemoveAccents('Test 1234 🚀')).toBe('Test 1234');
});
