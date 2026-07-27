const { loadSite } = require("@docusaurus/core/lib/server/site");
const {
    createConfigureWebpackUtils,
    executePluginsConfigureWebpack,
} = require("@docusaurus/core/lib/webpack/configure");
const { createBuildClientConfig } = require("@docusaurus/core/lib/webpack/client");

process.stdout.write("Using Jest config for Docusaurus...\n");

const swapRootDir = (localPath, input) => {
    // Just return everything as an array, even if it's a single string
    if (typeof input === "string") {
        input = [input];
    }
    return input.map((path) => path.replace(localPath, "<rootDir>"));
};

const applyConfig = async (inputConfig) => {
    const newConfig = await makeConfig();
    // Map over each property and merge the values according to its type
    for (const key in newConfig) {
        const value = newConfig[key];
        if (key in inputConfig) {
            if (Array.isArray(inputConfig[key])) {
                inputConfig[key] = [...inputConfig[key], ...value];
            }
            else if (typeof inputConfig[key] === "object") {
                inputConfig[key] = { ...inputConfig[key], ...value };
            }
            else {
                inputConfig[key] = value;
            }
        }
        else {
            inputConfig[key] = value;
        }
    }
    return inputConfig;
};

const makeConfig = async (localPath = process.cwd()) => {
    const { props } = await loadSite({
        siteDir: process.cwd(),
    });
    const configureWebpackUtils = await createConfigureWebpackUtils({
        siteConfig: props.siteConfig,
    });
    // Load up the Docusaurus client Webpack config,
    // so we can extract its aliases
    let { config: webpackConfig } = await createBuildClientConfig({
        props,
        minify: false,
        faster: props.siteConfig.future.experimental_faster,
        configureWebpackUtils,
        bundleAnalyzer: false,
    });
    // Allow plugins to make any final tweaks to the config
    webpackConfig = executePluginsConfigureWebpack({
        plugins: props.plugins,
        config: webpackConfig,
        isServer: false,
        configureWebpackUtils,
    });
    const aliases = Object.entries(webpackConfig.resolve.alias).reduce((acc, [key, value]) => {
        // Need to expand some of these as wildcards
        if (["@generated", "@site"].includes(key)) {
            key = `${key}/(.*)`;
            value = `${value}/$1`;
        }
        acc[`^${key}$`] = swapRootDir(localPath, value);
        return acc;
    }, {});
    return {
        transformIgnorePatterns: ["node_modules/(?!@docusaurus/.*)"],
        moduleNameMapper: aliases,
    };
};


exports.applyConfig = applyConfig;
exports.makeConfig = makeConfig;
