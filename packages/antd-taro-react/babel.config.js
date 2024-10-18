module.exports = {
    presets: ['@babel/preset-react', '@babel/preset-env'],
    plugins: [
        [
            '@wyw-in-js',
            {
                displayName: true,
                evaluate: true,
                rules: 'ignore',
            },
        ],
    ],
};