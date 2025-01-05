import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";

import { cn } from "@/lib/utils";
import { NavigationMenuLink } from "./index";

export const NavigationMenuList = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.List>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.List
        ref={ref}
        className={cn(
            "group flex flex-1 list-none items-center justify-center space-x-1",
            className,
        )}
        {...props}
    />
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

export const NavigationListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded p-3 leading-none text-text-secondary no-underline outline-none transition-colors hover:bg-neutral-800 hover:text-text-secondary",
                        className,
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none text-text-light">
                        {title}
                    </div>
                    {children && (
                        <p className="line-clamp-2 text-sm leading-snug text-text-secondary">
                            {children}
                        </p>
                    )}
                </a>
            </NavigationMenuLink>
        </li>
    );
});
NavigationListItem.displayName = "NavigationListItem";
