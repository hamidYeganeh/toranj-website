"use client";

// libs
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
// types
import type { IInput } from "./Input.types";
// variants
import {
    InputIconsVariants,
    InputHelperTextVariants,
    InputVariants,
    InputLabelVariants,
} from "./Input.variants";
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
        helperText = " ",
        error,
        ...otherProps
    } = props;

    return (
        <div className="peer relative flex w-full flex-col gap-2">
            {!!label && (
                <Label
                    htmlFor="input"
                    className={cn(InputLabelVariants({}), {
                        "text-error-main": error,
                    })}
                >
                    {label}
                </Label>
            )}
            <div className="relative flex flex-col">
                {startAdornment && (
                    <div
                        className={cn(
                            InputIconsVariants({ position: "start" }),
                            startAdornmentClassName,
                        )}
                    >
                        {startAdornment}
                    </div>
                )}
                <input
                    id="input"
                    ref={ref}
                    type={type}
                    className={cn(InputVariants({ variant, size }), className, {
                        "ps-10": !!startAdornment,
                        "pe-10": !!endAdornment,
                        "border-[1px] border-error-main focus:ring-error-main focus-visible:ring-[1px]":
                            error,
                    })}
                    {...otherProps}
                />
                {endAdornment && (
                    <div
                        className={cn(
                            InputIconsVariants({ position: "end" }),
                            endAdornmentClassName,
                        )}
                    >
                        {endAdornment}
                    </div>
                )}
            </div>
            <p
                className={cn(
                    InputHelperTextVariants({
                        variant: error ? "error" : "default",
                    }),
                )}
            >
                {helperText}
            </p>
        </div>
    );
});
Input.displayName = "Input";

export default Input;
