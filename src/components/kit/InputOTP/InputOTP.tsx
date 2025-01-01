import { forwardRef } from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { Minus } from "lucide-react";

import { cn } from "@/lib/utils";
import { InputOTPVariants } from "./InputOTP.variants";

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
