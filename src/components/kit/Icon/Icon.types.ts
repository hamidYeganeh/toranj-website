import { VariantProps } from "class-variance-authority";
import { IconVariants } from "./Icon.variants";
import { ComponentPropsWithoutRef } from "react";

export type IIconColors =
    | "primary"
    | "secondary"
    | "tertiary"
    | "success"
    | "error"
    | "warning"
    | "info";
export interface IIconVariants extends VariantProps<typeof IconVariants> {}
export interface IIcon
    extends IIconVariants,
        Omit<ComponentPropsWithoutRef<"div">, "color"> {
    color?: IIconColors;
}
