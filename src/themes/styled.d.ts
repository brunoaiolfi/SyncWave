import "styled-components";

declare module "styled-components" {
  interface DesignSystem {
    accent: string,
    info: string,

    danger: string,
    warning: string,
    success: string,

    gray800: string,
    white500: string,
  }

  export interface DefaultTheme {
    colors: DesignSystem;
  }
}
