
// import { ReactComponent as ClassesIconSvg } from 'public/icons/arrow-right.svg';

// path: custom.d.ts
declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}