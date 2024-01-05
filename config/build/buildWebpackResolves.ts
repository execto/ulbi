import { ResolveOptions } from "webpack";
import { BuildWebpackConfigOptions } from "./types/buildWebpackConfigTypes";

export const buildWebpackResolves = ({
  paths,
}: BuildWebpackConfigOptions): ResolveOptions => {
  return {
    extensions: [".tsx", ".ts", ".js"],
    preferAbsolute: true,
    modules: [paths.src, "node_modules"],
    mainFiles: ["index"],
  };
};
