import { expect, test } from 'vitest'

import { hslaToHex } from '@/services/colorTransform/hslTransform'

test('hslToHex', () => {
    //invalid
    expect(hslaToHex("rgb(0, 0, 0)")).toBe('Invalid format');
    expect(hslaToHex("")).toBe('Invalid format');
    expect(hslaToHex(" ")).toBe('Invalid format');
    expect(hslaToHex("#f00fff")).toBe('Invalid format');

    //valid
    expect(hslaToHex("hsla(0, 52%, 33%, 1)")).toBe('#802828');
    expect(hslaToHex("hsla(195.1, 54%, 46.1%, 1)")).toBe('#3695b5');
    expect(hslaToHex("hsla(195.1, 54%, 46.1%, 0)")).toBe('#3695b500');
    expect(hslaToHex("hsla(64, 65.9%, 44.9%, 0.5)")).toBe('#b4be2780');


})