import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: {
      primary: string;
      secondary: string;
    };
    colors: {
      app: string;
      black: string;
      white: string;
      lightGrey: string;
      grey: string;
    };
  }
}
