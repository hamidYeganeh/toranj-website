// libs
import { cva } from "class-variance-authority";

export const InputOTPVariants = cva(
    "flex items-center gap-2 has-[:disabled]:opacity-50",
    {
        variants: {
            variant: {
                outlined: "",
            },
            size: {
                sm: "",
                md: "",
                lg: "",
            },
        },
        defaultVariants: { variant: "outlined", size: "md" },
    },
);
