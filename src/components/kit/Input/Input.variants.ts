import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

export const InputVariants = cva(
    cn(
        "block w-full relative rounded transition-colors file:border-0 file:bg-transparent bg-transparent file:text-foreground focus:ring-primary-500 duration-200 text-primary-500 font-medium focus-visible:ring-[2px] placeholder:text-muted-foreground outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "relative",
    ),
    {
        variants: {
            variant: {
                outlined: "border border-input",
            },
            size: {
                sm: "px-2 py-1 h-8 text-sm",
                md: "px-4 py-1 h-10 text-md",
                lg: "px-6 py-3 h-12 text-xl",
            },
        },
        defaultVariants: { variant: "outlined", size: "lg" },
    },
);

export const InputIconsVariants = cva(
    "absolute inset-y-0 z-10 flex items-center cursor-pointer",
    {
        variants: {
            position: {
                start: "ps-2.5 start-0",
                end: "pe-2.5 end-0",
            },
        },
    },
);

export const InputLabelVariants = cva(
    "text-md font-medium text-primary-500",
    {
        variants: {},
    },
);

export const InputHelperTextVariants = cva(
    "text-sm font-medium text-text-disabled absolute left-0 -bottom-5",
    {
        variants: {
            variant: {
                default: "text-xs font-medium text-text-disabled",
                error: "text-xs font-medium text-error-main",
            },
        },
    },
);
