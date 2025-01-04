// types
import type { FC } from "react";
import type { IAuthLayout } from "./AuthLayout.types";
// components
import { Container } from "@/components/kit";

export const AuthLayout: FC<IAuthLayout> = (props) => {
    const { children } = props;
    return (
        <>
            <main className="flex h-full w-full flex-row items-stretch bg-white">
                <Container maxWidth={"xl"} className="bg-success-light">
                    <section className="min-h-dvh w-full">{children}</section>
                </Container>
            </main>
        </>
    );
};
