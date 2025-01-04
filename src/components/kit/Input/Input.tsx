// libs
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
// types
import type { IInput } from "./Input.types";
// variants
import { InputVariants } from "./Input.variants";

const Input = forwardRef<HTMLInputElement, IInput>((props, ref) => {
    const { className, type, size, variant, ...otherProps } = props;
    return (
        <input
            type={type}
            className={cn(InputVariants({ variant, size }), className)}
            ref={ref}
            {...otherProps}
        />
    );
});
Input.displayName = "Input";

export default Input;
