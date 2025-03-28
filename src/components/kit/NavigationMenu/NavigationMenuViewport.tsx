import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";

import { cn } from "@/lib/utils";

export const NavigationMenuViewport = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
    <div
        className={cn(
            "absolute top-full flex justify-center ltr:start-0 rtl:end-0",
        )}
    >
        <NavigationMenuPrimitive.Viewport
            className={cn(
                "origin-top-center bg-popover text-popover-foreground relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded border shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
                className,
            )}
            ref={ref}
            {...props}
        />
    </div>
));
NavigationMenuViewport.displayName =
    NavigationMenuPrimitive.Viewport.displayName;
