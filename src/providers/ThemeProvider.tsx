// libs
import { ThemeProvider as NextThemesProvider } from "next-themes";
// types
import type { FC, PropsWithChildren } from "react";

export interface IThemeProvider extends PropsWithChildren {}

export const ThemeProvider: FC<IThemeProvider> = (props) => {
  const { children } = props;

  return (
    // <NextThemesProvider
    //   attribute="class"
    //   defaultTheme="system"
    //   enableSystem
    //   disableTransitionOnChange
    // >
    // </NextThemesProvider>
    <>{children}</>
  );
};
