import { expect, test } from 'vitest'
import { RemoveExtraSpaces } from ".";

test('RemoveExtraSpaces', () => {
    expect(RemoveExtraSpaces('')).toBe('');
    expect(RemoveExtraSpaces('  ')).toBe('');
    expect(RemoveExtraSpaces('Hello,   world!')).toBe('Hello, world!');
    expect(RemoveExtraSpaces('  Hello,   world!  ')).toBe('Hello, world!');
});
