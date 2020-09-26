module.exports = {
    roots: [
        '<rootDir>/src/tests'
    ],
    testRegex: 'Tests.tsx$',
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
    testURL: 'http://localhost/',
    setupFilesAfterEnv: ["<rootDir>/setupTests.js"]
}
