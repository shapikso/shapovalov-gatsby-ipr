import 'csstype';

declare module '*.module.scss';
declare module '*.min.css';
declare module '*.svg';

declare module 'csstype' {
  interface Properties {
    [index: string]: any;
  }
}

declare module 'gatsby-plugin-modal-routing';
