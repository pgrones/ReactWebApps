module.exports = {
    roots: [
        '<rootDir>/src/tests'
    ],
    testRegex: 'Tests.js$',
    moduleFileExtensions: [
        'ts',
        'tsx',
        'js',
        'jsx',
        'json',
        'node'
    ],
    moduleDirectories: ["node_modules", "src"],
    collectCoverageFrom: [
        'src/**/*.{ts,tsx}',
        '!src/**/index.tsx',
    ],
    testURL: 'http://localhost/'
}
