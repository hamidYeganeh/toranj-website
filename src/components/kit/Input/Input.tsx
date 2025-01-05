// libs
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
// types
import type { IInput } from "./Input.types";
// variants
import { InputIcons, InputVariants } from "./Input.variants";
import { Loader } from "lucide-react";
// components
import { Label } from "../Label";

const Input = forwardRef<HTMLInputElement, IInput>((props, ref) => {
    const {
        className,
        type,
        size,
        variant,
        label,
        startAdornment,
        endAdornment,
        startAdornmentClassName,
        endAdornmentClassName,
        ...otherProps
    } = props;
    return (
        <div className="flex w-full flex-col gap-2">
            {label && <Label htmlFor="input">{label}</Label>}
            <div className="relative flex flex-col">
                {startAdornment && (
                    <div
                        className={cn(
                            InputIcons({ position: "start" }),
                            startAdornmentClassName,
                        )}
                    >
                        {startAdornment}
                    </div>
                )}
                <input
                    id="input"
                    type={type}
                    className={cn(InputVariants({ variant, size }), className, {
                        "ps-10": !!startAdornment,
                        "pe-10": !!endAdornment,
                    })}
                    ref={ref}
                    {...otherProps}
                />
                {endAdornment && (
                    <div
                        className={cn(
                            InputIcons({ position: "end" }),
                            endAdornmentClassName,
                        )}
                    >
                        {endAdornment}
                    </div>
                )}
            </div>
        </div>
    );
});
Input.displayName = "Input";

export default Input;
