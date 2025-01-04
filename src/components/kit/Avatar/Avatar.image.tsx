// components
import * as AvatarPrimitive from "@radix-ui/react-avatar";
// libs
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const AvatarImage = forwardRef<
    React.ElementRef<typeof AvatarPrimitive.Image>,
    React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
    <AvatarPrimitive.Image
        ref={ref}
        className={cn("aspect-square h-full w-full", className)}
        {...props}
    />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

export default AvatarImage;
