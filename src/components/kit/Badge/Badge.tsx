"use client";

// libs
import { forwardRef, useMemo } from "react";
import { cn } from "@/lib/utils";
// types
import type { IBadge } from "./Badge.types";
// variants
import { BadgeVariants } from "./Badge.variants";

const Badge = forwardRef<HTMLDivElement, IBadge>((props, ref) => {
    const { position, size, children, badgeContent, max, variant } = props;

    const _badgeContent = useMemo(() => {
        if (!!max) {
            if (badgeContent < max) {
                return badgeContent;
            } else {
                return `${max}+`;
            }
        } else {
            return badgeContent;
        }
    }, [badgeContent, max]);

    return (
        <div
            ref={ref}
            data-badge-content={_badgeContent}
            className={cn(BadgeVariants({ position, size, variant }))}
        >
            {children}
        </div>
    );
});

Badge.displayName = "Badge";

export default Badge;
