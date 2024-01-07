import { expect, test } from 'vitest'
import { GetWordCount } from ".";

test('GetWordCount', () => {
    expect(GetWordCount('Hello\nworld\t!')).toBe(2);
    expect(GetWordCount('Hello    world')).toBe(2);
    expect(GetWordCount('Hello, world! 123')).toBe(3);
    expect(GetWordCount('')).toBe(0);
    expect(GetWordCount('Hello world')).toBe(2);
    expect(GetWordCount('Hola mundo')).toBe(2);
    expect(GetWordCount('Bonjour le monde')).toBe(3);
});
