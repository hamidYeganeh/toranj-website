import { Input } from "@/components/kit";
import { useField } from "formik";
import { FC } from "react";
import { IFormikInput } from "./FormikInput.types";

export const FormikInput: FC<IFormikInput> = (props) => {
    const { name } = props;

    const [field, meta, helper] = useField(name);

    const { setValue } = helper;
    const hasError = Boolean(meta && meta.error && meta.touched);

    return (
        <>
            <Input
                value={field.value}
                onChange={(event) => setValue(event.target.value)}
            />
        </>
    );
};
