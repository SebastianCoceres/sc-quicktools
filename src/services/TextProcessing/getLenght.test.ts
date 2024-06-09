import { expect, test } from 'vitest'
import { GetLength } from ".";

test('GetLength', () => {
    expect(GetLength('hello world')).toBe(11);
    expect(GetLength('')).toBe(0);
    expect(GetLength('123 !@#')).toBe(7);
    expect(GetLength('hello🌍 world')).toBe(13);
    expect(GetLength('   ')).toBe(3);
    expect(GetLength('Abc 123 🚀')).toBe(10);
});
