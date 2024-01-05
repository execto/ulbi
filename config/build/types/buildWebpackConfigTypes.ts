type BuildWebpackConfigMode = "production" | "development";

export type WebpackConfigPaths = {
  entry: string;
  output: string;
  html: string;
  src: string;
};

export type BuildWebpackConfigOptions = {
  mode: BuildWebpackConfigMode;
  paths: WebpackConfigPaths;
  isDev: boolean;
  devServerPort: number;
};

export type WebpackConfigEnv = {
  mode: "production" | "development";
  port: number;
};
