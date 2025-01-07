"use client";

// components
import { IconButton, Input } from "@/components/kit";
// hooks
import { useField } from "formik";
import { useToggle } from "@/hooks/useToggle";
// types
import type { FC } from "react";
import type { IFormikInput } from "./FormikInput.types";
// icons
import { Eye, EyeOff } from "lucide-react";

export const FormikInput: FC<IFormikInput> = (props) => {
    const { name, label, type, ...otherProps } = props;

    const [field, meta, helper] = useField(name);
    const [showPassword, togglePassword] = useToggle(false);

    const { setValue } = helper;

    const isPasswordType = type === "password";
    const hasError = Boolean(meta && meta.error && meta.touched);
    const errorConfig = hasError
        ? {
              error: !!meta.error,
              helperText: meta.error,
          }
        : {};
    const passwordTypeConfig = isPasswordType
        ? {
              type: showPassword ? "text" : "password",
              endAdornment: (
                  <IconButton
                      variant={"text"}
                      size={"md"}
                      onClick={(event) => {
                          event.preventDefault();
                          togglePassword();
                      }}
                  >
                      {showPassword ? <Eye /> : <EyeOff />}
                  </IconButton>
              ),
          }
        : {
              type,
          };

    return (
        <Input
            label={label}
            value={field.value}
            onChange={(event) => setValue(event.target.value)}
            variant={"outlined"}
            size={"lg"}
            {...passwordTypeConfig}
            {...errorConfig}
            {...otherProps}
        />
    );
};
