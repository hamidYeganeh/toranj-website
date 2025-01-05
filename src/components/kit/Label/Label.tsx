"use client";

// components
import * as LabelPrimitive from "@radix-ui/react-label";
// libs
import { cn } from "@/lib/utils";
import { ElementRef, forwardRef } from "react";
// variants
import { LabelVariants } from "./Label.variants";
// types
import type { ILabel } from "./Label.types";

const Label = forwardRef<ElementRef<typeof LabelPrimitive.Root>, ILabel>(
    ({ className, ...props }, ref) => {
        return (
            <LabelPrimitive.Root
                ref={ref}
                className={cn(LabelVariants(), className)}
                {...props}
            />
        );
    },
);
Label.displayName = LabelPrimitive.Root.displayName;

export default Label;
