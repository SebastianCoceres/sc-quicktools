const CAMELCASEREGEX = /^[a-z\u00E0-\u00FC][a-zA-Z0-9\u00E0-\u00FC]*[A-Z\u00C0-\u00DC][a-z0-9\u00E0-\u00FC]*$/
const SNAKECASEREGEX = /^[a-z\u00E0-\u00FC]+(_[a-z\u00E0-\u00FC]+)+$/
const KEBABCASEREGEX = /^[a-z\u00E0-\u00FC][a-z0-9\u00E0-\u00FC]*(-[a-z0-9\u00E0-\u00FC]+)+$/
const PASCALCASEREGEX = /^[A-Z\u00C0-\u00DC][a-z0-9\u00E0-\u00FC]+(?:[A-Z\u00C0-\u00DC][a-z0-9\u00E0-\u00FC]+)*$/
const CAPITALSNAKECASEREGEX = /^[A-Z\u00C0-\u00DC]+(_[A-Z\u00C0-\u00DC]+)+$/

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