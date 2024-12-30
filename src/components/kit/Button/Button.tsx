// libs
import { cn } from "@/lib/utils";
import { forwardRef } from "react";
// types
import { IButtonTypes } from "./Button.types";
// variants
import { ButtonColors, ButtonVariants } from "./Button.variants";

const Button = forwardRef<HTMLButtonElement, IButtonTypes>((props, ref) => {
  const { variant, className, children, color } = props;

  const ButtonColor = ButtonColors[color][variant ?? "contained"];

  return (
    <button className={cn(ButtonVariants({ variant }), ButtonColor, className)}>
      {children}
    </button>
  );
});

export default Button;
