"use client";

// components
import { Button } from "@/components/kit";
// types
import type { FC } from "react";
import type { IFormikButton } from "./FormikButton.types";
// libs
import { useFormikContext } from "formik";

export const FormikButton: FC<IFormikButton> = (props) => {
    const { children } = props;

    const { submitForm, isSubmitting } = useFormikContext();

    return (
        <Button fullWidth shadow onClick={submitForm} loading={isSubmitting}>
            {children}
        </Button>
    );
};
