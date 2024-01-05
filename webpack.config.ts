import path from "path";
import webpack from "webpack";
import {
  WebpackConfigEnv,
  WebpackConfigPaths,
} from "./config/build/types/buildWebpackConfigTypes";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";

export default (env: WebpackConfigEnv): webpack.Configuration => {
  const paths: WebpackConfigPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
  };

  const mode = env.mode || "development";
  const isDev = mode === "development";
  const DEV_SERVER_PORT = env.port || 3000;

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    devServerPort: DEV_SERVER_PORT,
  });

  return config;
};
