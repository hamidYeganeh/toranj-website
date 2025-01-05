import { cva } from "class-variance-authority";

export const DividerVariants = cva("bg-divider shrink-0", {
    variants: {
        orientation: {
            vertical: "h-full w-[1px]",
            horizontal: "h-[1px] w-full",
        },
    },
    defaultVariants: { orientation: "horizontal" },
});
