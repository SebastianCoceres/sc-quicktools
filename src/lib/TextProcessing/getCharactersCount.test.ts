import { expect, test } from 'vitest'
import { GetCharacterCount } from ".";

test('GetCharacterCount', () => {
    expect(GetCharacterCount('hello world')).toBe(10);
    expect(GetCharacterCount('helloworld')).toBe(10);
    expect(GetCharacterCount('')).toBe(0);
    expect(GetCharacterCount('     ')).toBe(0);
    expect(GetCharacterCount('123 !@#')).toBe(6);
    expect(GetCharacterCount('hello🌍 world')).toBe(11);
});
