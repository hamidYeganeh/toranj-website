"use client";

// libs
import { Form, Formik } from "formik";
// components
// import { FormikButton, FormikInput } from "@/components/common/Formik";
import { Container } from "@/components/kit";
// validations
import { AuthLoginValidation } from "@/containers/validations";

const initialValues = {
    name: "",
    address: "",
    username: "",
    password: "",
};

export const AuthSignUpForm = () => {
    async function handleSubmit(values: typeof initialValues) {
        console.log(values);
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
                    {/* <FormikInput name="name" label="Name" />
                    <FormikInput name="address" label="Address" />
                    <FormikInput name="username" label="Username" />
                    <FormikInput
                        name="password"
                        label="Password"
                        type="password"
                    />
                    <FormikButton>{"Submit"}</FormikButton> */}
                </Container>
            </Form>
        </Formik>
    );
};
