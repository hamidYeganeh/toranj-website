import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

export const InputVariants = cva(
    cn(
        "block w-full rounded transition-colors file:border-0 file:bg-transparent bg-transparent file:text-foreground focus:ring-primary-500 duration-200 text-primary-500 font-semibold focus-visible:ring-[2px] placeholder:text-muted-foreground outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
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
        defaultVariants: { variant: "outlined", size: "sm" },
    },
);

export const InputIcons = cva("absolute inset-y-0 flex items-center", {
    variants: {
        position: {
            start: "ps-2.5 start-0",
            end: "pe-2.5 end-0",
        },
    },
});
