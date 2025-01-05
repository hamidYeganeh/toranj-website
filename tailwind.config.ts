import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        screens: {
            xs: "var(--screen-xs)",
            sm: "var(--screen-sm)",
            md: "var(--screen-md)",
            lg: "var(--screen-lg)",
            xl: "var(--screen-xl)",
        },
        extend: {
            maxWidth: {
                xs: "var(--max-width-xs)",
                sm: "var(--max-width-sm)",
                md: "var(--max-width-md)",
                lg: "var(--max-width-lg)",
                xl: "var(--max-width-xl)",
            },
            fontFamily: {
                roboto: "var(--font-roboto)",
            },
            colors: {
                primary: {
                    "50": "var(--primary-50)",
                    "100": "var(--primary-100)",
                    "200": "var(--primary-200)",
                    "300": "var(--primary-300)",
                    "400": "var(--primary-400)",
                    "500": "var(--primary-500)",
                    "600": "var(--primary-600)",
                    "700": "var(--primary-700)",
                    "800": "var(--primary-800)",
                    "900": "var(--primary-900)",
                    "950": "var(--primary-950)",
                },
                secondary: {
                    "50": "var(--secondary-50)",
                    "100": "var(--secondary-100)",
                    "200": "var(--secondary-200)",
                    "300": "var(--secondary-300)",
                    "400": "var(--secondary-400)",
                    "500": "var(--secondary-500)",
                    "600": "var(--secondary-600)",
                    "700": "var(--secondary-700)",
                    "800": "var(--secondary-800)",
                    "900": "var(--secondary-900)",
                    "950": "var(--secondary-950)",
                },
                tertiary: {
                    "50": "var(--tertiary-50)",
                    "100": "var(--tertiary-100)",
                    "200": "var(--tertiary-200)",
                    "300": "var(--tertiary-300)",
                    "400": "var(--tertiary-400)",
                    "500": "var(--tertiary-500)",
                    "600": "var(--tertiary-600)",
                    "700": "var(--tertiary-700)",
                    "800": "var(--tertiary-800)",
                    "900": "var(--tertiary-900)",
                    "950": "var(--tertiary-950)",
                },
                gray: {
                    "50": "var(--gray-50)",
                    "100": "var(--gray-100)",
                    "200": "var(--gray-200)",
                    "300": "var(--gray-300)",
                    "400": "var(--gray-400)",
                    "500": "var(--gray-500)",
                    "600": "var(--gray-600)",
                    "700": "var(--gray-700)",
                    "800": "var(--gray-800)",
                    "900": "var(--gray-900)",
                    "950": "var(--gray-950)",
                },
                success: {
                    lighter: "var(--success-lighter)",
                    light: "var(--success-light)",
                    main: "var(--success-main)",
                    dark: "var(--success-dark)",
                    darker: "var(--success-darker)",
                    "contrast-text": "var(--success-light)",
                },
                error: {
                    lighter: "var(--error-lighter)",
                    light: "var(--error-light)",
                    main: "var(--error-main)",
                    dark: "var(--error-dark)",
                    darker: "var(--error-darker)",
                    "contrast-text": "var(--error-light)",
                },
                warning: {
                    lighter: "var(--warning-lighter)",
                    light: "var(--warning-light)",
                    main: "var(--warning-main)",
                    dark: "var(--warning-dark)",
                    darker: "var(--warning-darker)",
                    "contrast-text": "var(--warning-light)",
                },
                info: {
                    lighter: "var(--info-lighter)",
                    light: "var(--info-light)",
                    main: "var(--info-main)",
                    dark: "var(--info-dark)",
                    darker: "var(--info-darker)",
                    "contrast-text": "var(--info-light)",
                },
                text: {
                    primary: "var(--text-primary)",
                    secondary: "var(--text-secondary)",
                    disabled: "var(--text-disabled)",
                    light: "var(--text-light)",
                    dark: "var(--text-dark)",
                },
                bg: {
                    DEFAULT: "var(--background)",
                    paper: "var(--background-paper)",
                },
                divider: "var(--divider)",
            },
            borderRadius: {
                DEFAULT: "var(--radius)",
                lg: "var(--radius-lg)",
                sm: "var(--radius-sm)",
                md: "var(--radius-md)",
                xl: "var(--radius-xl)",
                "2xl": "var(--radius-2xl)",
                "3xl": "var(--radius-3xl)",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;
