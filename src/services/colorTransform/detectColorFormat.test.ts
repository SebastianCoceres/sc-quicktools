import { expect, test } from 'vitest'

import { DetectColorFormat } from './detectColorFormat'

test('DetectColorFormat', () => {

    //invalid
    expect(DetectColorFormat('')).toBe('invalid format');
    expect(DetectColorFormat(' ')).toBe('invalid format');
    expect(DetectColorFormat('  ')).toBe('invalid format');
    expect(DetectColorFormat('rgb(0, 0, 0')).toBe('invalid format');
    expect(DetectColorFormat('bluegreen')).toBe('invalid format');

    //valid
    expect(DetectColorFormat('rgb(255, 0, 0)')).toBe('rgba');
    expect(DetectColorFormat('rgba(255, 0, 0, 1)')).toBe('rgba');
    expect(DetectColorFormat('hsl(0, 0%, 0%)')).toBe('hsla');
    expect(DetectColorFormat('hsla(0, 0%, 0%, 1)')).toBe('hsla');
    expect(DetectColorFormat('#fff')).toBe('hex');
    expect(DetectColorFormat('#ffffff')).toBe('hex');
    expect(DetectColorFormat('#ffffff00')).toBe('hex');


})