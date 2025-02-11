// libs
import LocalFont from "next/font/local";
import { Inter, Fira_Code } from "next/font/google";
import { getLanguageDirection } from "@/i18n/request";
import { getLocale, getMessages } from "next-intl/server";
// providers
import { I18nProvider } from "@/providers/I18nProvider";
import { ReduxProvider } from "@/providers/ReduxProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";
// types
import type { Metadata } from "next";
// stylesheets
import "./globals.css";
import "@/theme/palette.css";
import "@/theme/shape.css";
import "@/theme/breakpoints.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const SequenciaFont = LocalFont({
    src: "./fonts/sequencia/Sequencia.ttf",
    weight: "600",
    variable: "--sequencia-font",
});
const InterFont = Inter({
    variable: "--inter-font",
    weight: ["100", "200", "300", "400", "500", "700", "800", "900"],
    subsets: ["latin"],
});
const Fira_CodeFont = Fira_Code({
    variable: "--Fira_CodeFont-font",
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Toranj Restaurant",
    description: "Generated by create next app",
    icons: "/assets/images/logo.png",
};

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const locale = await getLocale();
    const messages = await getMessages();
    const dir = getLanguageDirection(locale);
    return (
        <html lang={locale} dir={dir} suppressHydrationWarning>
            <body
                className={`${SequenciaFont.variable} ${Fira_CodeFont.variable} ${InterFont.className} scroll-smooth antialiased`}
            >
                <ReduxProvider>
                    <ThemeProvider>
                        <I18nProvider messages={messages}>
                            {children}
                        </I18nProvider>
                    </ThemeProvider>
                </ReduxProvider>
            </body>
        </html>
    );
}
