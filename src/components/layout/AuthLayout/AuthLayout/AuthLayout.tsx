// types
import type { FC } from "react";
import type { IAuthLayout } from "./AuthLayout.types";

export const AuthLayout: FC<IAuthLayout> = (props) => {
    const { children } = props;
    return (
        <>
            <main className="flex h-full w-full flex-row items-stretch bg-white">
                <section className="min-h-dvh w-full">{children}</section>
            </main>
        </>
    );
};
