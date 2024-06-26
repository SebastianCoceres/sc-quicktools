import { expect, test } from 'vitest'

import { contrastChecker } from './contrastChecker'

test('contrastChecker', () => {
    //invalid
    expect(contrastChecker('')).toBe('Invalid format');
    expect(contrastChecker(' ')).toBe('Invalid format');
    expect(contrastChecker('rgb(0, 0, 0')).toBe('Invalid format');
    expect(contrastChecker('#faa23')).toBe('Invalid format');

    //valid
    expect(contrastChecker('rgb(255, 0, 0)')).toBe('4.00')
    expect(contrastChecker('rgb(0, 0, 0)')).toBe('21.00');
    expect(contrastChecker('rgb(255, 255, 255)', 'rgb(0, 0, 0)')).toBe('21.00');
    expect(contrastChecker('hsla(0, 59.8%, 35.1%, 1)')).toBe('8.59');
    expect(contrastChecker('#3bc4c2')).toBe('2.13');
    expect(contrastChecker('#3bc4c2', '#000')).toBe('9.86');
    expect(contrastChecker('#931f1f', '#9b4b4b')).toBe('1.43');
})