import { VariantProps } from "class-variance-authority";
import * as LabelPrimitive from "@radix-ui/react-label";
import { LabelVariants } from "./Label.variants";
import { ComponentPropsWithoutRef } from "react";

export interface ILabelVariants extends VariantProps<typeof LabelVariants> {}

export interface ILabel
    extends ILabelVariants,
        ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {}
