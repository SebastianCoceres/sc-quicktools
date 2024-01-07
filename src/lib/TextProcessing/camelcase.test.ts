import { expect, test } from 'vitest'

import { Camelcase } from './camelcase'

test('camelCase', () => {
    expect(Camelcase('hello world')).toBe('helloWorld')
    expect(Camelcase('HelloWorld')).toBe('helloWorld')
    expect(Camelcase('helloWorld')).toBe('helloWorld')
    expect(Camelcase('HELLO WORLD')).toBe('helloWorld')
    expect(Camelcase('hello-world')).toBe('helloWorld')
    expect(Camelcase('HELLO_WORLD')).toBe('helloWorld')
    expect(Camelcase('HELLOWORLD')).toBe('helloworld')
})