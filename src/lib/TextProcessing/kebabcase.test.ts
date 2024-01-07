import { expect, test } from 'vitest'
import { Kebabcase } from ".";

test('Kebabcase', () => {
    expect(Kebabcase('')).toBe('');
    expect(Kebabcase('Hello, world!')).toBe('hello-world');
    expect(Kebabcase('Hello2World')).toBe('hello2-world');
    expect(Kebabcase('Hello World')).toBe('hello-world');
    expect(Kebabcase('hello World')).toBe('hello-world');
    expect(Kebabcase('Hello world')).toBe('hello-world');

    expect(Kebabcase('camelCaseText')).toBe('camel-case-text');
    expect(Kebabcase('PascalCaseText')).toBe('pascal-case-text');
    expect(Kebabcase('snake_case_text')).toBe('snake-case-text');
    expect(Kebabcase('CAPITAL_SNAKE_CASE_TEXT')).toBe('capital-snake-case-text');
});
