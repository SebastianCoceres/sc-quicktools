import { expect, test } from 'vitest'
import { Snakecase } from ".";

test('Snakecase', () => {
    expect(Snakecase('')).toBe('');
    expect(Snakecase('hello world')).toBe('hello_world');
    expect(Snakecase('HELLO WORLD')).toBe('hello_world');
    expect(Snakecase('hello123! world')).toBe('hello123_world');
    expect(Snakecase('helloWorld')).toBe('hello_world');
    expect(Snakecase('HelloWorld')).toBe('hello_world');
    expect(Snakecase('hello_world')).toBe('hello_world');
});
