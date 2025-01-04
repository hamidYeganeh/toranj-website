// libs
import { cva } from "class-variance-authority";

export const SkeletonVariants = cva(
    "animate-pulse rounded bg-gradient-to-r from-slate-400 to-slate-500",
    {
        variants: {
            shape: {
                circle: "rounded-full",
                rounded: "rounded",
            },
        },
        defaultVariants: { shape: "rounded" },
    },
);
