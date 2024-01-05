import { Configuration } from "webpack-dev-server";
import { BuildWebpackConfigOptions } from "./types/buildWebpackConfigTypes";

export const buildDevServer = ({
  devServerPort,
}: BuildWebpackConfigOptions): Configuration => {
  return {
    port: devServerPort,
    open: true,
    historyApiFallback: true,
    hot: true,
  };
};
