

const CAMELCASEREGEX = /^[a-z][a-zA-Z0-9]*[A-Z][a-z0-9]*$/
const SNAKECASEREGEX = /^[a-z]+(_[a-z]+)+$/
const KEBABCASEREGEX = /^[a-z][a-z0-9]*(-[a-z0-9]+)+$/
const PASCALCASEREGEX = /^[A-Z][a-z0-9]+(?:[A-Z][a-z0-9]+)*$/
const CAPITALSNAKECASEREGEX = /^[A-Z]+(_[A-Z]+)+$/


export const checkType: {
    isCamelCase: (str: string) => boolean,
    isSnakeCase: (str: string) => boolean,
    isKebabCase: (str: string) => boolean,
    isPascalCase: (str: string) => boolean,
    isCapitalSnakeCase: (str: string) => boolean
} = {
    isCamelCase: (str: string) => CAMELCASEREGEX.test(str),
    isSnakeCase: (str: string) => SNAKECASEREGEX.test(str),
    isKebabCase: (str: string) => KEBABCASEREGEX.test(str),
    isPascalCase: (str: string) => PASCALCASEREGEX.test(str),
    isCapitalSnakeCase: (str: string) => CAPITALSNAKECASEREGEX.test(str),
}