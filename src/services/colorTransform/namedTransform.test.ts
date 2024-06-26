import { expect, test } from 'vitest'

import { namedColorToHex } from '@/services/colorTransform/namedTransform'
import { COLORS } from '@/services/colorTransform/detectColorFormat';

test('NamedTransform', () => {
    //invalid
    expect(namedColorToHex('hello world')).toBe('Invalid format');
    expect(namedColorToHex('')).toBe('Invalid format');
    expect(namedColorToHex('greenblue')).toBe('Invalid format');
    expect(namedColorToHex('rgb(0, 0, 0)')).toBe('Invalid format');
    expect(namedColorToHex('#f00')).toBe('Invalid format');

    //valid
    expect(namedColorToHex('red')).toBe(COLORS["red"]);
    expect(namedColorToHex('blue')).toBe(COLORS["blue"]);
    expect(namedColorToHex('green')).toBe(COLORS["green"]);
    expect(namedColorToHex('yellow')).toBe(COLORS["yellow"]);

})