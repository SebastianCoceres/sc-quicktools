import { expect, test } from 'vitest'
import { Trimmed } from ".";

test('Trimmed', () => {
    expect(Trimmed('')).toBe('');
    expect(Trimmed(' ')).toBe('');
    expect(Trimmed('  hello world  ')).toBe('hello world');
    expect(Trimmed('  hello   world  ')).toBe('hello   world');
});
