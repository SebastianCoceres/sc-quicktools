import { expect, test } from 'vitest'

import { TransformColor } from './transformColor'

test('TransformColor', () => {
    //invalid
    expect(TransformColor('hello world')).toEqual({
        hex: '',
        rgba: '',
        hsla: '',
    })
    expect(TransformColor('')).toEqual({
        hex: '',
        rgba: '',
        hsla: '',
    })

    //valid
    expect(TransformColor('#fff')).toEqual({
        hex: '#ffffff',
        rgba: 'rgba(255, 255, 255, 1)',
        hsla: 'hsla(0, 0%, 100%, 1)',
    })
    expect(TransformColor('rgba(255, 0, 0, 1)')).toEqual(
        {
            hex: '#ff0000',
            rgba: 'rgba(255, 0, 0, 1)',
            hsla: 'hsla(0, 100%, 50%, 1)',
        }
    )
    expect(TransformColor('#3a277c')).toEqual({
        hex: '#3a277c',
        rgba: 'rgba(58, 39, 124, 1)',
        hsla: 'hsla(253.4, 52.1%, 32%, 1)',

    })
    expect(TransformColor('hsla(87, 65%, 20%, 1)')).toEqual({
        hex: '#365412',
        rgba: 'rgba(54, 84, 18, 1)',
        hsla: 'hsla(87, 65%, 20%, 1)',

    })
    expect(TransformColor('red')).toEqual(
        {
            hex: '#ff0000',
            rgba: 'rgba(255, 0, 0, 1)',
            hsla: 'hsla(0, 100%, 50%, 1)',
        }
    )
})

