import { ReactNode } from "react";
import { MainLayout } from "@/components/layout/MainLayout";

export default function MainPagesLayout(
    props: Readonly<{
        children: ReactNode;
    }>,
) {
    const { children } = props;

    return <MainLayout>{children}</MainLayout>;
}
