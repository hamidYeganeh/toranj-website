import { cva } from "class-variance-authority";

export const IconVariants = cva("rounded flex items-center justify-center", {
    variants: {
        variant: {
            contained: "text-text-primary",
            outlined:
                "text-text-primary bg-transparent border border-primary-500",
            light: "text-primary-500 bg-primary-100",
            text: "bg-transparent text-text-primary",
        },
        size: {
            sm: "px-2 py-1 h-8 text-sm [&_svg]:size-4",
            md: "px-4 py-1 h-10 text-md [&_svg]:size-5",
            lg: "px-6 py-3 h-12 text-xl gap-2 [&_svg]:size-6",
        },
    },
});

export const IconColors = {
    primary: {
        contained:
            "bg-primary-500 text-text-secondary hover:bg-primary-700 hover:shadow-primary-500",
        outlined: "border border-2 border-primary-500 text-primary-500",
        light: "text-primary-500 bg-primary-100",
        text: "bg-transparent text-primary-500",
    },
    secondary: {
        contained: "bg-secondary-500 text-text-secondary",
        outlined: "border border-2 border-secondary-500 text-secondary-500",
        light: "text-secondary-500 bg-secondary-100",
        text: "bg-transparent text-secondary-500",
    },
    tertiary: {
        contained: "bg-tertiary-500 text-text-secondary",
        outlined: "border border-2 border-tertiary-500 text-tertiary-500",
        light: "text-tertiary-500 bg-tertiary-100",
        text: "bg-transparent text-tertiary-500 ",
    },
    success: {
        contained: "bg-success-main text-text-secondary",
        outlined: "border border-2 border-success-main text-success-main ",
        light: "text-success-main bg-success-lighter",
        text: "bg-transparent text-success-main ",
    },
    error: {
        contained: "bg-error-main text-text-secondary",
        outlined: "border border-2 border-error-main text-error-main",
        light: "text-error-main bg-error-lighter",
        text: "bg-transparent text-error-main ",
    },
    warning: {
        contained: "bg-warning-main text-text-secondary hover:bg-warning-dark ",
        outlined: "border border-2 border-warning-main text-warning-main",
        light: "text-warning-main bg-warning-lighter",
        text: "bg-transparent text-warning-main ",
    },
    info: {
        contained: "bg-info-main text-text-secondary",
        outlined: "border border-2 border-info-main text-info-main",
        light: "text-info-main bg-info-lighter",
        text: "bg-transparent text-info-main",
    },
};
