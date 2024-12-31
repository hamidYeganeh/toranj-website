// libs
import { cn } from "@/lib/utils";
import { forwardRef } from "react";
// types
import { IButtonTypes } from "./Button.types";
// variants
import { ButtonColors, ButtonVariants } from "./Button.variants";
import Link from "next/link";

const Button = forwardRef<HTMLButtonElement, IButtonTypes>((props, ref) => {
  const { variant, className, children, color, href } = props;

  const isLinkButton = !!href;
  const ButtonColor = ButtonColors[color || "primary"][variant ?? "contained"];

  if (isLinkButton)
    return (
      <Link
        href={href}
        className={cn(ButtonVariants({ variant }), ButtonColor, className)}
      >
        {children}
      </Link>
    );

  return (
    <button
      ref={ref}
      className={cn(ButtonVariants({ variant }), ButtonColor, className)}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
