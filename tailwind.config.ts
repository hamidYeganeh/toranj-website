import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            container: {
                center: true,
                padding: {
                    xs: "8px",
                    sm: "8px",
                    md: "8px",
                    lg: "8px",
                    xl: "8px",
                },
                screens: {
                    xs: "var(--screen-xs)",
                    sm: "var(--screen-sm)",
                    md: "var(--screen-md)",
                    lg: "var(--screen-lg)",
                    xl: "var(--screen-xl)",
                },
            },
            screens: {
                xs: "375px",
                sm: "575px",
                md: "768px",
                lg: "1024px",
                xl: "1400px",
            },
            fontFamily: {
                sequencia: "var(--sequencia-font)",
                bemirs: "var(--bemirs1-font)",
                brilliant: "var(--brilliant2-font)",
                perpetua: "var(--perpetua6-font)",
                montserrat: "var(--montserrat-font)",
            },
            fontSize: {
                extreme: "204px",
                huge: "160px",
            },
            colors: {
                brand: {
                    "50": "var(--brand-50)",
                    "100": "var(--brand-100)",
                    "200": "var(--brand-200)",
                    "300": "var(--brand-300)",
                    "400": "var(--brand-400)",
                    "500": "var(--brand-500)",
                    "600": "var(--brand-600)",
                    "700": "var(--brand-700)",
                    "800": "var(--brand-800)",
                    "900": "var(--brand-900)",
                    "950": "var(--brand-950)",
                },
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
            zIndex: {
                header: "9998",
                reserve: "9999",
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
            animation: {
                marquee: "marquee 40s linear infinite",
                "marquee-reverse": "marquee 40s linear reverse",
                "hero-image-reveal": "hero-image 1.2s linear forwards",
            },
            keyframes: {
                marquee: {
                    "0%": { transform: "translateX(50%)" },
                    "100%": { transform: "translateX(-150%)" },
                },
                "hero-image": {
                    "0%": {
                        width: "50%",
                    },
                    "37%": {
                        "animation-timing-function":
                            "cubic-bezier(0.76, 0, 0.24, 1)",
                    },
                    "68%": {
                        "animation-timing-function":
                            "cubic-bezier(0.76, 0, 0.24, 1)",
                    },
                    "99%": {
                        width: "100%",
                        "animation-timing-function":
                            "cubic-bezier(0.76, 0, 0.24, 1)",
                    },
                    "100%": {
                        opacity: "1",
                    },
                },
            },
        },
    },
    plugins: [require("tailwindcss-animate"), require("tailwindcss-animated")],
} satisfies Config;
