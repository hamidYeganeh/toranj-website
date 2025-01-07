import { ILoginQuery } from "@/types/auth.types";
import * as Yup from "yup";

export const AuthLoginValidation = Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required().min(6),
});

export const prepareDataForAuthLogin = (values: ILoginQuery): ILoginQuery => ({
    username: values.username,
    password: values.password,
});
