type BuildWebpackConfigMode = "production" | "development";

export interface WebpackConfigPaths {
  entry: string;
  output: string;
  html: string;
  src: string;
}

export interface BuildWebpackConfigOptions {
  mode: BuildWebpackConfigMode;
  paths: WebpackConfigPaths;
  isDev: boolean;
  devServerPort: number;
}

export interface WebpackConfigEnv {
  mode: "production" | "development";
  port: number;
}
