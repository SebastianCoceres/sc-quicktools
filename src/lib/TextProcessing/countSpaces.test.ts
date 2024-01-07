import { expect, test } from 'vitest'
import { CountSpaces } from ".";

test('countSpaces', () => {
    expect(CountSpaces('Hello')).toBe('0');
    expect(CountSpaces('Hello World')).toBe('1');
    expect(CountSpaces('OpenAI has developed GPT-4')).toBe('3');
    expect(CountSpaces('Hello   World')).toBe('3');
    expect(CountSpaces('This  is   a test')).toBe('6');
    expect(CountSpaces('')).toBe('0');
    expect(CountSpaces('   ')).toBe('3');
    expect(CountSpaces(' Hello World ')).toBe('3');
    expect(CountSpaces('  Leading and trailing spaces  ')).toBe('7');
    expect(CountSpaces('Special! @# $%^&*() characters')).toBe('3');
});
