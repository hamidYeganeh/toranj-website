// libs
import LocalFont from "next/font/local";
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

const BemirsFont1 = LocalFont({
    src: "./fonts/bemirs1/Bemirs.ttf",
    weight: "600",
    variable: "--bemirs1-font",
});

const BrilliantFont2 = LocalFont({
    src: "./fonts/brillant2/brillant.otf",
    weight: "400",
    variable: "--brilliant2-font",
});
const PerpetuaFont6 = LocalFont({
    src: "./fonts/perpetua6/perpetua.ttf",
    weight: "600",
    variable: "--perpetua6-font",
});

export const metadata: Metadata = {
    title: "Toranj Restaurant",
    description:
        "Das persische Restaurant Toranj in Wien gehört seit August 2021 zu den kulinarischen Treffpunkten im beliebten Wienerbezirk. Genießen Sie authentisch persische Küche, romantisch-gemütliches Ambiente und herzlich aufmerksame Bedienung.",
    icons: "/assets/images/logo.png",
    category: "Restaurant",
    keywords: [
        "Toranj",
        "toranj",
        "restaurant",
        "Restaurant",
        "kebab",
        "vienna",
        "wien",
    ],
    creator: "https://spexup.com",
    authors: {
        name: "Spexup Team",
        url: "https://spexup.com",
    },
    robots: { index: true },
    openGraph: {
        type: "website",
        countryName: "Austria",
        description:
            "Das persische Restaurant Toranj in Wien gehört seit August 2021 zu den kulinarischen Treffpunkten im beliebten Wienerbezirk. Genießen Sie authentisch persische Küche, romantisch-gemütliches Ambiente und herzlich aufmerksame Bedienung.",
        url: "https://toranj.at",
        emails: "info@toranj.at",
        locale: "de",
        phoneNumbers: "+4319978097",
        siteName: "Toranj Restaurant",
        title: "Toranj Restaurant",
    },
    generator: "Next js",
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
                className={`${BemirsFont1.variable} ${PerpetuaFont6.variable} ${BrilliantFont2.variable} scroll-smooth antialiased`}
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
