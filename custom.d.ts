declare module '*.svg' {
  // @ts-ignore
  import { ReactElement, SVGProps, SVGElement } from 'react';
  export interface CustomSVG {
    (props: SVGProps<SVGElement>): ReactElement;
  }
  const content: CustomSVG;
  export default content;
}
