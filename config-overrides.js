const {
  override,
  fixBabelImports,
} = require("customize-cra");
const path = require("path")
const addLessLoader = require("customize-cra-less-loader");

const overrides = (config) => {
  let loader = config.module.rules[1].oneOf;
  config.entry.main = "./src/index.tsx";
  config.output.filename = "[name].[hash:8].js";

  loader.splice(loader.length - 1, 0, {
    test: /\.scss$/,
    use: [
      {
        loader: "style-loader",
      },
      {
        loader: "css-loader",
      },
      {
        loader: "sass-loader",
        options: {
          module: true,
          importLoader: 1,
          localIdentName: "[name]_[local]_[hash:base64]",
          sourceMap: true,
        },
      },
    ],
  });
  return config;
}
module.exports = {
  webpack: override(
    overrides,
    fixBabelImports("import", {
      libraryName: "antd",
      libraryDirectory: "es",
      style: true,
    }),
    addLessLoader({
      lessLoaderOptions: {
        lessOptions: {
          javascriptEnabled: true,
          modifyVars: {},
        },
      },
    })
  ),
  jest: function (config) {
    return config;
  },
  devServer: function (configFunction) {
    return function (proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);
      return config;
    };
  },
  paths: function (paths, env) {
    paths.appBuild = path.resolve(__dirname, 'dist_staging');
    return paths;
  },
 
};
