// libs
import { VariantProps } from "class-variance-authority";
// types
import type { ComponentPropsWithoutRef } from "react";
import { ButtonVariants } from "./Button.variants";

export type IButtonVariant = "contained";

export interface IButtonTypes
  extends ComponentPropsWithoutRef<"button">,
    VariantProps<typeof ButtonVariants> {}
