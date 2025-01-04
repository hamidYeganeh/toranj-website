// libs
import { cn } from "@/lib/utils";
import { forwardRef } from "react";
// types
import { IIconButtonTypes } from "./Button.types";
// variants
import { ButtonColors, IconButtonVariants } from "./Button.variants";

const IconButton = forwardRef<HTMLButtonElement, IIconButtonTypes>(
    (props, ref) => {
        const {
            variant,
            className,
            children,
            color,
            size,
            shadow,
            ...otherProps
        } = props;

        const isBrandColor = ["primary", "secondary", "tertiary"].includes(
            variant!,
        );
        const ButtonShadow =
            !!shadow && !!variant
                ? isBrandColor
                    ? `hover:shadow-[0px_8px_8px_0px_var(--${color || "primary"}-100)]`
                    : `hover:shadow-[0px_8px_8px_0px_var(--${color || "success"}-lighter)]`
                : "";
        const ButtonColor =
            ButtonColors[color || "primary"][variant ?? "contained"];
        return (
            <button
                ref={ref}
                className={cn(
                    IconButtonVariants({ variant, size }),
                    ButtonColor,
                    ButtonShadow,
                    className,
                )}
                {...otherProps}
            >
                {children}
            </button>
        );
    },
);

IconButton.displayName = "IconButton";

export default IconButton;
