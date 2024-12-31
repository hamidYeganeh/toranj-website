// libs
import { cn } from "@/lib/utils";
import { forwardRef } from "react";
// types
import { IIconButtonTypes } from "./Button.types";
// variants
import { ButtonColors, IconButtonVariants } from "./Button.variants";

const IconButton = forwardRef<HTMLButtonElement, IIconButtonTypes>(
  (props, ref) => {
    const { variant, className, children, color } = props;

    const ButtonColor =
      ButtonColors[color || "primary"][variant ?? "contained"];
    return (
      <button
        ref={ref}
        className={cn(IconButtonVariants({ variant }), ButtonColor, className)}
      >
        {children}
      </button>
    );
  }
);

IconButton.displayName = "IconButton";

export default IconButton;
