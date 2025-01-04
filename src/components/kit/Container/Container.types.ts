import { VariantProps } from "class-variance-authority";
import { ContainerVariants } from "./Container.variants";
import { PropsWithChildren } from "react";

export interface IContanier
    extends PropsWithChildren,
        VariantProps<typeof ContainerVariants> {
    className?: HTMLDivElement["className"];
}
