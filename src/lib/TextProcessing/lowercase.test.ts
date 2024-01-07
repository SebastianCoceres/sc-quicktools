import { expect, test } from 'vitest'
import { Lowercase } from ".";

test('Lowercase', () => {
    expect(Lowercase('')).toBe('');
    expect(Lowercase('Hello, world!')).toBe('hello, world!');
    expect(Lowercase('Hello2World')).toBe('hello2world');
    expect(Lowercase('Hello World')).toBe('hello world');
    expect(Lowercase('hello World')).toBe('hello world');
    expect(Lowercase('Hello world')).toBe('hello world');
    expect(Lowercase('HELLO WORLD')).toBe('hello world');

    expect(Lowercase('hello   world')).toBe('hello world');

    expect(Lowercase('HELLO_WORLD')).toBe('hello_world');
    expect(Lowercase('helloWorld')).toBe('helloworld');
    expect(Lowercase('hello-world')).toBe('hello-world');
    expect(Lowercase('hello_world')).toBe('hello_world');
    expect(Lowercase('HelloWorld')).toBe('helloworld');


});
