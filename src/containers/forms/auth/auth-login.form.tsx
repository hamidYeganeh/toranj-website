"use client";

// libs
import { Form, Formik } from "formik";
import { useAppDispatch } from "@/hooks/useRedux";
import { useRouter } from "next/navigation";
// components
// import { FormikButton, FormikInput } from "@/components/common/Formik";
import { Container } from "@/components/kit";
// configs
import { RouterPaths } from "@/constants/router-config";
// validations
import {
    AuthLoginValidation,
    prepareDataForAuthLogin,
} from "@/containers/validations";
// services
import { useLoginMutation } from "@/redux/services/auth.service";
// reducers
import { authenticate } from "@/redux/slices/auth.slice";

const initialValues = {
    username: "emilys",
    password: "emilyspass",
};

export const AuthLoginForm = () => {
    const dispatch = useAppDispatch();
    const { push } = useRouter();
    const [login] = useLoginMutation();

    async function handleSubmit(values: typeof initialValues) {
        try {
            const body = prepareDataForAuthLogin(values);
            const response = await login(body).unwrap();
            dispatch(authenticate(response));
            push(RouterPaths.dashboard.root);
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
                    {/* <FormikInput name="username" label="Username" /> */}
                    <label htmlFor="Username">
                        <input name="username" id="Username" />
                    </label>
                    {/* <FormikInput
                        name="password"
                        label="Password"
                        type="password"
                    /> */}
                    <label htmlFor="Password">
                        <input
                            name="password"
                            id="Password"
                            type="password"
                        />
                    </label>
                    <button type="submit">
                        submit
                    </button>
                    {/* <FormikButton loading={isLoginLoading}>
                        {"Submit"}
                    </FormikButton> */}
                </Container>
            </Form>
        </Formik>
    );
};
