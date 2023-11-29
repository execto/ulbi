import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildWebpackConfigOptions } from "./types/buildWebpackConfigTypes";

export const buildWebpackLoaders = ({ isDev }: BuildWebpackConfigOptions) => {
  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const sassLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resourcePath: string) => resourcePath.includes(".module."),
            localIdentName: isDev
              ? "[path][name]__[local]_[hash:base64:5]"
              : "[hash:base64:8]",
          },
        },
      },
      "sass-loader",
    ],
  };

  return [sassLoader, tsLoader];
};
