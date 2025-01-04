"use client";

import { forwardRef } from "react";
import { OTPInput } from "input-otp";
import { InputOTPVariants } from "./InputOTP.variants";
import { cn } from "@/lib/utils";

const InputOTP = forwardRef<
    React.ElementRef<typeof OTPInput>,
    React.ComponentPropsWithoutRef<typeof OTPInput>
>((props, ref) => {
    const { className, containerClassName, ...otherProps } = props;
    return (
        <OTPInput
            ref={ref}
            containerClassName={cn(InputOTPVariants({}), containerClassName)}
            className={cn("disabled:cursor-not-allowed", className)}
            {...otherProps}
        />
    );
});
InputOTP.displayName = "InputOTP";

export default InputOTP;
