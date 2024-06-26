import { expect, test } from 'vitest'

import { hexToRgba, hexToHsla } from '@/services/colorTransform/hexTransform'

test('hexToRgba', () => {

    //invalid
    expect(hexToRgba("")).toBe("Invalid format");
    expect(hexToRgba(" ")).toBe("Invalid format");
    expect(hexToRgba("rgb(0, 0, 0)")).toBe("Invalid format");
    expect(hexToRgba("#f00ffff")).toBe("Invalid format");
    expect(hexToRgba("#f00ff")).toBe("Invalid format");
    expect(hexToRgba("hsla(100, 45%, 30% ,1)")).toBe("Invalid format");

    expect(hexToHsla("")).toBe("Invalid format");
    expect(hexToHsla(" ")).toBe("Invalid format");
    expect(hexToHsla("rgb(0, 0, 0)")).toBe("Invalid format");
    expect(hexToHsla("#f00ffff")).toBe("Invalid format");
    expect(hexToHsla("#f00ff")).toBe("Invalid format");
    expect(hexToHsla("hsla(100, 45%, 30% ,1)")).toBe("Invalid format");

    //valid
    expect(hexToRgba("#ffffff")).toBe("rgba(255, 255, 255, 1)");
    expect(hexToRgba("#00000000")).toBe("rgba(0, 0, 0, 0)");
    expect(hexToRgba("#f00")).toBe("rgba(255, 0, 0, 1)");
    expect(hexToRgba("#f00f")).toBe("rgba(255, 0, 0, 1)");
    expect(hexToRgba("#f00fffaa")).toBe("rgba(240, 15, 255, 0.67)");
    expect(hexToHsla("#f00fff")).toBe("hsla(296.3, 100%, 52.9%, 1)");

})