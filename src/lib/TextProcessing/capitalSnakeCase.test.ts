import { expect, test } from 'vitest'

import { CapitalSnakeCase } from '.'

test('CapitalSnakeCase', () => {
    expect(CapitalSnakeCase('hello world')).toBe('HELLO_WORLD')
    expect(CapitalSnakeCase('HelloWorld')).toBe('HELLO_WORLD')
    expect(CapitalSnakeCase('HELLO WORLD')).toBe('HELLO_WORLD')
    expect(CapitalSnakeCase('hello-world')).toBe('HELLO_WORLD')
    expect(CapitalSnakeCase('HELLO_WORLD')).toBe('HELLO_WORLD')
    expect(CapitalSnakeCase('HELLOWORLD')).toBe('HELLOWORLD')
    expect(CapitalSnakeCase('helloworld')).toBe('HELLOWORLD')
})