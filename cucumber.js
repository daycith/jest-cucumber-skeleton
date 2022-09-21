const common = [
    '--require-module ts-node/register' // Load TypeScript module
];
const mooc_backend = [
    ...common,
    'tests/features/**/*.feature',
    '--require tests/steps/*.steps.ts'
].join(' ');

module.exports = {
    mooc_backend
};