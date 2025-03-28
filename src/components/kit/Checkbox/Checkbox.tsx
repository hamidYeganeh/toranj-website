"use client";

// icons
import { Check } from "lucide-react";
// libs
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const Checkbox = forwardRef<
    React.ElementRef<typeof CheckboxPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>((props, ref) => {
    const { className, ...otherProps } = props;
    return (
        <CheckboxPrimitive.Root
            ref={ref}
            className={cn(
                "border-primary focus-visible:ring-ring data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground peer h-4 w-4 shrink-0 rounded-sm border shadow focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50",
                className,
            )}
            {...otherProps}
        >
            <CheckboxPrimitive.Indicator
                className={cn("flex items-center justify-center text-current")}
            >
                <Check className="h-4 w-4" />
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
    );
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export default Checkbox;
