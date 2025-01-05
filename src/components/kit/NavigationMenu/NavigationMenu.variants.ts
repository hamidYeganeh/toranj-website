import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { ButtonVariants } from "../Button";

export const navigationMenuTriggerStyle = cva(
    cn(
        "group inline-flex w-max items-center justify-center transition-colors hover:bg-text-primary hover:text-text-secondary focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-text-primary data-[state=open]:bg-text-primary data-[state=open]:text-text-secondary",
        ButtonVariants({ variant: "text", size: "md" }),
    ),
);
