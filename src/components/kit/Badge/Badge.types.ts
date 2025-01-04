import { VariantProps } from "class-variance-authority";
import { BadgeVariants } from "./Badge.variants";
import { PropsWithChildren } from "react";

export interface IBadgeVariants extends VariantProps<typeof BadgeVariants> {}
export interface IBadge extends PropsWithChildren, IBadgeVariants {
    max?: number;
    badgeContent: number;
}
