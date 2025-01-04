import { cva } from "class-variance-authority";

export const ContainerVariants = cva("w-full m-auto", {
    variants: {
        maxWidth: {
            xs: "max-w-xs",
            sm: "max-w-sm",
            md: "max-w-md",
            lg: "max-w-lg",
            xl: "max-w-xl",
        },
    },
    defaultVariants: {
        maxWidth: "xl",
    },
});
