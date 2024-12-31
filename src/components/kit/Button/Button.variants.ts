import { cva } from "class-variance-authority";
import { IButtonColor, IButtonVariants } from "./Button.types";

export const ButtonVariants = cva("rounded-lg", {
  variants: {
    variant: {
      contained: " text-text-primary px-4 py-2 hover:bg-primary-700",
      outlined: "",
      faded: "",
      text: "",
    },
    size: {
      sm: "px-2 py-1 h-8",
      md: "px-4 py-1 h-10",
      lg: "px-6 py-3 h-12",
    },
  },
  defaultVariants: { size: "md", variant: "contained" },
});

export const ButtonColors = {
  primary: {
    contained: "bg-primary-500 hover:bg-primary-700",
    outlined: "",
    faded: "",
    text: "",
  },
  secondary: {
    contained: "bg-secondary-500 hover:bg-secondary-700",
    outlined: "",
    faded: "",
    text: "",
  },
  tertiary: {
    contained: "bg-tertiary-500 hover:bg-tertiary-700",
    outlined: "",
    faded: "",
    text: "",
  },
  success: {
    contained: "bg-red-500",
    outlined: "",
    faded: "",
    text: "",
  },
  error: {
    contained: "bg-red-500",
    outlined: "",
    faded: "",
    text: "",
  },
  warning: {
    contained: "bg-red-500",
    outlined: "",
    faded: "",
    text: "",
  },
  info: {
    contained: "bg-red-500",
    outlined: "",
    faded: "",
    text: "",
  },
};
