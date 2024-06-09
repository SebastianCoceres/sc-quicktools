import { expect, test } from 'vitest'
import { GetAccentsCount } from ".";

test('GetAccentsCount', () => {
    expect(GetAccentsCount('Canción Ágil, Ñandú')).toBe(5);
    expect(GetAccentsCount('Hello World')).toBe("0");
    expect(GetAccentsCount('')).toBe("0");
    expect(GetAccentsCount('.-._')).toBe(4);
    expect(GetAccentsCount('El Niño plays football')).toBe(1);
});
