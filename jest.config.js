module.exports = {
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?|mjs?)$",
    transform: {
        "^.+\\.jsx?$": "babel-jest",
        "^.+\\.mjs$": "babel-jest",
    },
    testPathIgnorePatterns: ["./node_modules/"],
    moduleFileExtensions: ["js", "jsx", "mjs"]
}