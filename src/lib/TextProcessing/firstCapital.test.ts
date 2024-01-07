import { expect, test } from 'vitest'
import { FirstCapital } from ".";

test('FirstCapital', () => {
    expect(FirstCapital('')).toBe('');
    expect(FirstCapital('hello world')).toBe('Hello world');
    expect(FirstCapital('HELLO WORLD')).toBe('Hello world');
    expect(FirstCapital('123hello!')).toBe('123hello!');
    expect(FirstCapital('hElLo WoRlD')).toBe('Hello world');
    expect(FirstCapital('!hello world')).toBe('!hello world');
    expect(FirstCapital('convertToNormalText')).toBe('Convert to normal text');
    expect(FirstCapital('hello-world')).toBe('Hello world');
    expect(FirstCapital('hello-world-123')).toBe('Hello world 123');
    expect(FirstCapital('hello_world')).toBe('Hello world');
    expect(FirstCapital('HelloWorld')).toBe('Hello world');
    expect(FirstCapital('HELLOWORLD')).toBe('Helloworld');
});
