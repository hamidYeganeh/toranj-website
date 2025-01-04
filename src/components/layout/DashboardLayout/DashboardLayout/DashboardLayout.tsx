// types
import type { FC } from "react";
import type { IDashboardLayout } from "./DashboardLayout.types";
// components
import { DashboardHeader } from "../DashboardHeader";
import { DashboardAside } from "../DashboardAside";
import { Container } from "@/components/kit";

export const DashboardLayout: FC<IDashboardLayout> = (props) => {
    const { children } = props;
    return (
        <>
            <DashboardHeader />
            <Container className="px-2">
                <main className="bg-bg-paper flex h-full w-full flex-row items-stretch">
                    <DashboardAside />
                    <section className="min-h-[calc(100dvh-var(--dashboard-header-height))] w-full">
                        {children}
                    </section>
                </main>
            </Container>
        </>
    );
};
