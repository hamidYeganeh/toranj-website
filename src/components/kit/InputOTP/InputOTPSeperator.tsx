import { Minus } from "lucide-react";
import { forwardRef } from "react";

export const InputOTPSeparator = forwardRef<
    React.ElementRef<"div">,
    React.ComponentPropsWithoutRef<"div">
>(({ ...props }, ref) => (
    <div ref={ref} role="separator" {...props}>
        <Minus />
    </div>
));
InputOTPSeparator.displayName = "InputOTPSeparator";
