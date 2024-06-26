import { expect, test } from 'vitest'

import { rgbaToHex, rgbaToHsla } from './rgbTransform'

test('rgb', () => {
    //invalid
    expect(rgbaToHex('hello world')).toBe('Invalid format')
    expect(rgbaToHsla('hello world')).toBe('Invalid format')
    expect(rgbaToHex('rgba(260, 0, 0, 1)')).toBe('Invalid format')
    expect(rgbaToHsla('hsla(260, 0, 0, 1)')).toBe('Invalid format')
    expect(rgbaToHex('#12ddee')).toBe('Invalid format')


    //valid
    expect(rgbaToHex('rgba(255, 0, 0, 1)')).toBe('#ff0000')
    expect(rgbaToHex('rgba(255, 0, 0, 0.5)')).toBe('#ff000080')
    expect(rgbaToHex('rgba(255, 0, 0, 0)')).toBe('#ff000000')
    expect(rgbaToHsla('rgba(255, 0, 0, 1)')).toBe('hsla(0, 100%, 50%, 1)')
    expect(rgbaToHsla('rgba(255, 0, 0, 0.5)')).toBe('hsla(0, 100%, 50%, 0.5)')
    expect(rgbaToHsla('rgba(255, 0, 0, 0)')).toBe('hsla(0, 100%, 50%, 0)')


})