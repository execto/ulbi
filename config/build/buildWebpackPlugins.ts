import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import { BuildWebpackConfigOptions } from "./types/buildWebpackConfigTypes";

export const buildWebpackPlugins = ({ paths }: BuildWebpackConfigOptions) => {
  return [
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash].css",
    }),
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
  ];
};
