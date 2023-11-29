import webpack from "webpack";

import { BuildWebpackConfigOptions } from "./types/buildWebpackConfigTypes";
import { buildWebpackPlugins } from "./buildWebpackPlugins";
import { buildWebpackResolves } from "./buildWebpackResolves";
import { buildWebpackLoaders } from "./buildWebpackLoaders";
import { buildDevServer } from "./buildDevServer";

export const buildWebpackConfig = (
  options: BuildWebpackConfigOptions
): webpack.Configuration => {
  const { paths, mode, isDev } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.output,
      clean: true,
    },
    module: {
      rules: buildWebpackLoaders(options),
    },
    resolve: {
      extensions: buildWebpackResolves(),
    },
    plugins: buildWebpackPlugins(options),
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
};
