import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

export const BadgeVariants = cva(
    cn(
        "relative w-fit h-fit box-border",
        "after:flex after:justify-center after:px-1 after:text-center after:overflow-hidden after:text-text-secondary after:items-center after:text-xs after:font-normal after:text-ellipsis after:content-[attr(data-badge-content)] after:absolute after:rounded-full",
    ),
    {
        variants: {
            variant: {
                primary: "after:bg-primary-500",
                seconadry: "after:bg-seconadry-500",
                tertiary: "after:bg-tertiary-500",
                success: "after:bg-success-main",
                error: "after:bg-error-main",
                warning: "after:bg-warning-main",
                info: "after:bg-info-main",
            },
            position: {
                "top-right": "after:-top-2/4 after:-right-2/4",
                "top-left": "after:-top-2/4 after:-left-2/4",
                "bottom-right": "after:-bottom-2/4 after:-right-2/4",
                "bottom-left": "after:-bottom-2/4 after:-left-2/4",
            },
            size: {
                sm: "after:h-5 after:min-w-5 after:text-xs",
                md: "after:h-6 after:min-w-6 after:text-sm",
                lg: "after:h-7 after:min-w-7 after:text-md",
            },
        },
        defaultVariants: {
            position: "bottom-right",
            size: "md",
            variant: "primary",
        },
    },
);
