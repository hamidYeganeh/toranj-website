import { cva } from "class-variance-authority";

export const ButtonVariants = cva("", {
  variants: { variant: { contained: "bg-red-500" } },
});
