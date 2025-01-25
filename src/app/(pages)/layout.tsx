import { Header } from "@/components/Layout/Header";
import { ReactNode } from "react";

export default function MainPagesLayout(
    props: Readonly<{
        children: ReactNode;
    }>,
) {
    const { children } = props;

    return (
        <>
            <Header />
            {children}
        </>
    );
}
