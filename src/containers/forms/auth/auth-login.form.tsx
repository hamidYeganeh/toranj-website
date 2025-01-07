"use client";

// libs
import { Form, Formik } from "formik";
// components
import { FormikButton, FormikInput } from "@/components/common/Formik";
import { Checkbox, Container } from "@/components/kit";
// validations
import {
    AuthLoginValidation,
    prepareDataForAuthLogin,
} from "@/containers/validations";
// services
import { useLoginMutation } from "@/redux/services/auth.service";

const initialValues = {
    username: "",
    password: "",
};

export const AuthLoginForm = () => {
    const [login, { isLoading: isLoginLoading }] = useLoginMutation();

    async function handleSubmit(values: typeof initialValues) {
        try {
            const body = prepareDataForAuthLogin(values);
            const response = await login(body).unwrap();
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={AuthLoginValidation}
        >
            <Form>
                <Container
                    maxWidth={"sm"}
                    className="flex h-dvh flex-col items-center justify-center gap-6"
                >
                    <FormikInput name="username" label="Username" />
                    <FormikInput name="password" label="Password" />
                    <FormikButton loading={isLoginLoading}>
                        {"Submit"}
                    </FormikButton>
                </Container>
            </Form>
        </Formik>
    );
};
