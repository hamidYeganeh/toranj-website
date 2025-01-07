import { VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef, ReactNode } from "react";
import { InputVariants } from "./Input.variants";

export interface IInputVariants extends VariantProps<typeof InputVariants> {}
export interface IHtmlInput
    extends Omit<ComponentPropsWithoutRef<"input">, "size"> {}

export interface IInput extends IHtmlInput, IInputVariants {
    label?: string;
    startAdornment?: ReactNode;
    startAdornmentClassName?: string;
    endAdornment?: ReactNode;
    endAdornmentClassName?: string;
    helperText?: string;
    error?: boolean | string;
}
