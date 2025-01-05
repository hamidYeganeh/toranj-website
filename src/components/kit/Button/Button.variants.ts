import { cva } from "class-variance-authority";

export const ButtonVariants = cva(
    "w-fit rounded flex items-center justify-center font-bold transition-all duration-300 outline-none gap-1",
    {
        variants: {
            variant: {
                contained: "text-text-primary hover:bg-primary-700",
                outlined:
                    "text-text-primary bg-transparent border border-primary-500",
                light: "text-primary-500 bg-primary-100 hover:bg-primary-200",
                text: "bg-transparent text-text-primary hover:bg-text-primary",
            },
            size: {
                sm: "px-2 py-1 h-8 text-sm [&_svg]:size-4",
                md: "px-4 py-1 h-10 text-md [&_svg]:size-5",
                lg: "px-6 py-3 h-12 text-xl gap-2 [&_svg]:size-6",
            },
        },
        defaultVariants: { size: "lg", variant: "contained" },
    },
);
export const IconButtonVariants = cva(
    "rounded flex items-center justify-center transition-all duration-300",
    {
        variants: {
            variant: {
                contained: "text-text-primary hover:bg-primary-700",
                outlined:
                    "border border-primary-500 text-text-primary hover:bg-primary-200",
                light: "text-primary-500 bg-primary-100 hover:bg-primary-200",
                text: "bg-transparent text-primary-500 hover:bg-primary-200",
            },
            size: {
                sm: "size-8 [&_svg]:size-4",
                md: "size-10 [&_svg]:size-5",
                lg: "size-12 [&_svg]:size-8",
            },
        },
        defaultVariants: { size: "lg", variant: "contained" },
    },
);

export const ButtonColors = {
    primary: {
        contained: "bg-primary-500 text-text-secondary hover:bg-primary-700",
        outlined:
            "border border-2 border-primary-500 text-primary-500 hover:bg-primary-200",
        light: "text-primary-500 bg-primary-100 hover:bg-primary-200",
        text: "bg-transparent text-primary-500 hover:bg-primary-100",
    },
    secondary: {
        contained:
            "bg-secondary-500 text-text-secondary hover:bg-secondary-700",
        outlined:
            "border border-2 border-secondary-500 text-secondary-500 hover:bg-secondary-200",
        light: "text-secondary-500 bg-secondary-100 hover:bg-secondary-200",
        text: "bg-transparent text-secondary-500 hover:bg-secondary-100",
    },
    tertiary: {
        contained: "bg-tertiary-500 text-text-secondary hover:bg-tertiary-700",
        outlined:
            "border border-2 border-tertiary-500 text-tertiary-500 hover:bg-tertiary-200",
        light: "text-tertiary-500 bg-tertiary-100 hover:bg-tertiary-200",
        text: "bg-transparent text-tertiary-500 hover:bg-tertiary-100",
    },
    success: {
        contained: "bg-success-main text-text-secondary hover:bg-success-dark",
        outlined:
            "border border-2 border-success-main text-success-main hover:text-success-dark hover:bg-success-light",
        light: "text-success-main bg-success-lighter hover:bg-success-light",
        text: "bg-transparent text-success-main hover:bg-success-lighter",
    },
    error: {
        contained: "bg-error-main text-text-secondary hover:bg-error-dark",
        outlined:
            "border border-2 border-error-main text-error-main hover:text-error-dark hover:bg-error-light",
        light: "text-error-main bg-error-lighter hover:bg-error-light",
        text: "bg-transparent text-error-main hover:bg-error-lighter",
    },
    warning: {
        contained: "bg-warning-main text-text-secondary hover:bg-warning-dark",
        outlined:
            "border border-2 border-warning-main text-warning-main hover:text-warning-dark hover:bg-warning-light",
        light: "text-warning-main bg-warning-lighter hover:bg-warning-light",
        text: "bg-transparent text-warning-main hover:bg-warning-lighter",
    },
    info: {
        contained: "bg-info-main text-text-secondary hover:bg-info-dark",
        outlined:
            "border border-2 border-info-main text-info-main hover:text-info-dark hover:bg-info-light",
        light: "text-info-main bg-info-lighter hover:bg-info-light",
        text: "bg-transparent text-info-main hover:bg-info-lighter",
    },
};
