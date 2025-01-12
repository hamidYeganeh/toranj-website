"use client";

// libs
import { ThemeProvider as NextThemesProvider } from "next-themes";
// types
import type { FC, PropsWithChildren } from "react";

export const ThemeProvider: FC<PropsWithChildren> = (props) => {
    const { children } = props;

    return (
        <NextThemesProvider
            attribute="class"
            enableSystem
            enableColorScheme
            defaultTheme="light"
        >
            {children}
        </NextThemesProvider>
    );
};
