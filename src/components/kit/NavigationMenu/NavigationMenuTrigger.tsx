import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";

import { cn } from "@/lib/utils";
import { navigationMenuTriggerStyle } from "./NavigationMenu.variants";
import { ChevronDown } from "lucide-react";

export const NavigationMenuTrigger = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
    <NavigationMenuPrimitive.Trigger
        ref={ref}
        className={cn(navigationMenuTriggerStyle(), "group", className)}
        {...props}
    >
        {children}
        <ChevronDown
            className="relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180"
            aria-hidden="true"
        />
    </NavigationMenuPrimitive.Trigger>
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;
