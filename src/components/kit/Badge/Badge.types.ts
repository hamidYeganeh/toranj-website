import { VariantProps } from "class-variance-authority";
import { BadgeVariants } from "./Badge.variants";
import { PropsWithChildren } from "react";

export interface IBadge
    extends PropsWithChildren,
        VariantProps<typeof BadgeVariants> {
    max?: number;
    badgeContent: number;
}
