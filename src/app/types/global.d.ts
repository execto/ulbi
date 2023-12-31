declare module "*.scss" {
  type ClassNames = Record<string, string>;
  const classNames: ClassNames;
  export = classNames;
}

declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module "*.jpg";
declare module "*.jpeg";
declare module "*.png";

declare const __IS_DEV__: boolean;
