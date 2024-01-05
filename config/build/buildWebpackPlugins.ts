import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import { BuildWebpackConfigOptions } from "./types/buildWebpackConfigTypes";

export const buildWebpackPlugins = ({
  paths,
  isDev,
}: BuildWebpackConfigOptions): webpack.WebpackPluginInstance[] => {
  return [
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash].css",
    }),
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: isDev,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ];
};
