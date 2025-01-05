"use client";
// components
import * as SeparatorPrimitive from "@radix-ui/react-separator";
// libs
import { cn } from "@/lib/utils";
import { forwardRef } from "react";
// variants
import { DividerVariants } from "./Divider.variants";

const Divider = forwardRef<
    React.ElementRef<typeof SeparatorPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>((props, ref) => {
    const {
        className,
        orientation = "horizontal",
        decorative = true,
        ...otherProps
    } = props;
    return (
        <SeparatorPrimitive.Root
            ref={ref}
            decorative={decorative}
            orientation={orientation}
            className={cn(DividerVariants({ orientation }), className)}
            {...otherProps}
        />
    );
});

Divider.displayName = "Divider";

export default Divider;
