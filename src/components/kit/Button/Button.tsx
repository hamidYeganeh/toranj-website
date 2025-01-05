// libs
import { cn } from "@/lib/utils";
import { forwardRef } from "react";
// types
import { IButtonTypes } from "./Button.types";
// variants
import { ButtonColors, ButtonVariants } from "./Button.variants";
// components
import Link from "next/link";
import { LoaderCircle } from "lucide-react";

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
        loading,
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
                    "pointer-events-none": loading,
                },
            )}
            {...otherProps}
        >
            {loading && (
                <span className="absolute inset-0 m-auto flex w-full items-center justify-center">
                    <LoaderCircle className="size-5 animate-spin" />
                </span>
            )}
            <span
                id="button-content"
                className={cn(
                    "flex w-full flex-row items-center justify-center gap-2",
                    {
                        invisible: loading,
                    },
                )}
            >
                {startIcon && startIcon}
                {children}
                {endIcon && endIcon}
            </span>
        </button>
    );
});

Button.displayName = "Button";

export default Button;
