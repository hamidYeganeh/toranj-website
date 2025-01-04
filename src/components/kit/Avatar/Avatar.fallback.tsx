// components
import * as AvatarPrimitive from "@radix-ui/react-avatar";
// libs
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const AvatarFallback = forwardRef<
    React.ElementRef<typeof AvatarPrimitive.Fallback>,
    React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
    <AvatarPrimitive.Fallback
        ref={ref}
        className={cn(
            "bg-muted flex h-full w-full items-center justify-center rounded-full",
            className,
        )}
        {...props}
    />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export default AvatarFallback;
