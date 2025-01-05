// libs
import { cn } from "@/lib/utils";
import { forwardRef } from "react";
// types
import { IButtonTypes } from "./Button.types";
// variants
import { ButtonColors, ButtonVariants } from "./Button.variants";
// components
import Link from "next/link";

const Button = forwardRef<HTMLButtonElement, IButtonTypes>((props, ref) => {
    const {
        variant = "contained",
        className,
        children,
        color,
        href,
        fullWidth,
        size,
        shadow = false,
        startIcon,
        endIcon,
        ...otherProps
    } = props;

    const isLinkButton = !!href;
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

    if (isLinkButton)
        return (
            <Link
                href={href}
                className={cn(
                    ButtonVariants({ variant }),
                    ButtonColor,
                    ButtonShadow,
                    className,
                    {
                        "w-full": fullWidth,
                    },
                )}
            >
                {startIcon && startIcon}
                {children}
                {endIcon && endIcon}
            </Link>
        );

    return (
        <button
            ref={ref}
            className={cn(
                ButtonVariants({ variant, size }),
                ButtonColor,
                className,
                {
                    "w-full": fullWidth,
                },
            )}
            {...otherProps}
        >
            {startIcon && startIcon}
            {children}
            {endIcon && endIcon}
        </button>
    );
});

Button.displayName = "Button";

export default Button;
