import { forwardRef, useMemo } from "react";
import { IButtonTypes } from "./Button.types";
import { cn } from "@/lib/utils";
import { ButtonVariants } from "./Button.variants";

const Button = forwardRef<HTMLButtonElement, IButtonTypes>((props, ref) => {
  const { variant, className } = props;

  const ButtonClassName = useMemo(
    () => cn(className, ButtonVariants({ variant })),
    [className, variant]
  );

  return <button className={ButtonClassName}>Button</button>;
});

export default Button;
