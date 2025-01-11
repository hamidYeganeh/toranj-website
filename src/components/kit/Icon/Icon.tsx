// libs
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
// types
import type { IIcon } from "./Icon.types";
// variants
import { IconColors, IconVariants } from "./Icon.variants";

const Icon = forwardRef<HTMLDivElement, IIcon>((props, ref) => {
    const { variant, size, children, className, color, ...otherProps } = props;
    const IconColor = IconColors[color || "primary"][variant ?? "contained"];
    return (
        <div
            ref={ref}
            className={cn(IconVariants({ size, variant }), IconColor)}
            {...otherProps}
        >
            {children}
        </div>
    );
});

Icon.displayName = "Icon";

export default Icon;
