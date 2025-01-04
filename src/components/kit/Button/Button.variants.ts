import { cva } from "class-variance-authority";

export const ButtonVariants = cva(
    "w-fit rounded-lg flex items-center justify-center font-bold transition-all duration-300 outline-none",
    {
        variants: {
            variant: {
                contained: "text-text-primary hover:bg-primary-700",
                outlined: "",
                faded: "",
                text: "",
            },
            size: {
                sm: "px-2 py-1 h-8",
                md: "px-4 py-1 h-10",
                lg: "px-6 py-3 h-12 text-xl",
            },
        },
        defaultVariants: { size: "lg", variant: "contained" },
    },
);
export const IconButtonVariants = cva(
    "rounded-lg flex items-center justify-center transition-all duration-300",
    {
        variants: {
            variant: {
                contained: "text-text-primary hover:bg-primary-700",
                outlined:
                    "border border-primary-500 text-text-primary [&_svg]:fill-primary-500 hover:bg-primary-100",
                faded: "",
                text: "",
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
            "border border-primary-500 text-text-primary [&_svg]:fill-primary-500 hover:bg-primary-100",
        faded: "",
        text: "",
    },
    secondary: {
        contained: "bg-secondary-500 hover:bg-secondary-700",
        outlined:
            "border border-secondary-500 text-text-secondary [&_svg]:fill-secondary-500 hover:bg-secondary-100",
        faded: "",
        text: "",
    },
    tertiary: {
        contained: "bg-tertiary-500 hover:bg-tertiary-700",
        outlined: "",
        faded: "",
        text: "",
    },
    success: {
        contained: "bg-red-500",
        outlined: "",
        faded: "",
        text: "",
    },
    error: {
        contained: "bg-red-500",
        outlined: "",
        faded: "",
        text: "",
    },
    warning: {
        contained: "bg-red-500",
        outlined: "",
        faded: "",
        text: "",
    },
    info: {
        contained: "bg-red-500",
        outlined: "",
        faded: "",
        text: "",
    },
};
