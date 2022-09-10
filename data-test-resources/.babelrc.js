const commonPresets = ['@babel/typescript'];
const common = {
    presets: commonPresets
};

module.exports = {
    env: {
        esmUnbundled: {
            ...common
        },
        cjs: {
            ...common,
            presets: [
                [
                    '@babel/env',
                    { modules: 'commonjs' }
                ],
                ...commonPresets
            ],
        }
    }
};
