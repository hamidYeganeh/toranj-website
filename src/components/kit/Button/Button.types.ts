// libs
import { VariantProps } from "class-variance-authority";
// types
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { ButtonVariants } from "./Button.variants";
import { Url } from "next/dist/shared/lib/router/router";

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

export interface IButtonTypes extends IHTMLButton, IButtonVariants {
    color?: IButtonColor;
    href?: Url;
    fullWidth?: boolean;
    shadow?: boolean;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    loading?: boolean;
}
export interface IIconButtonTypes extends IHTMLButton, IButtonVariants {
    color?: IButtonColor;
    href?: Url;
    shadow?: boolean;
}
