// libs
import { VariantProps } from "class-variance-authority";
// types
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import type { Url } from "next/dist/shared/lib/router/router";
// variants
import { ButtonVariants } from "./Button.variants";

export interface IButtonVariants extends VariantProps<typeof ButtonVariants> {}
export interface IHTMLButton
    extends Omit<ComponentPropsWithoutRef<"button">, "color"> {}
export type IButtonColor =
    | "primary"
    | "secondary"
    | "tertiary"
    | "success"
    | "error"
    | "warning"
    | "info";

export interface IButton extends IHTMLButton, IButtonVariants {
    color?: IButtonColor;
    href?: Url;
    fullWidth?: boolean;
    shadow?: boolean;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    loading?: boolean;
}
export interface IIconButton extends IHTMLButton, IButtonVariants {
    color?: IButtonColor;
    href?: Url;
    shadow?: boolean;
}
