// libs
import { VariantProps } from "class-variance-authority";
// types
import type { ComponentPropsWithoutRef } from "react";
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

export interface IButtonTypes extends IHTMLButton, IButtonVariants {
  color?: IButtonColor;
}
