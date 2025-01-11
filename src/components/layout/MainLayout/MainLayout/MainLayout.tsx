// types
import type { FC } from "react";
import type { IMainLayout } from "./MainLayout.types";
// components
import { MainLayoutHeader, MainLayoutHeaderBanner } from "../MainLayoutHeader";
import { MainLayoutNavbarHorizontal } from "../MainLayoutNavbar";
import { MainFooter } from "../MainFooter";
import { Container } from "@/components/kit";

export const MainLayout: FC<IMainLayout> = (props) => {
    const { children } = props;
    return (
        <>
            <header className="relative flex w-full flex-col gap-2 bg-tertiary-50">
                <MainLayoutHeaderBanner />
                <MainLayoutHeader />
                <MainLayoutNavbarHorizontal />
            </header>
            <main className="h-full rounded py-4">
                <Container className="relative flex h-full w-full flex-row items-start">
                    <section className="min-h-dvh w-full">{children}</section>
                </Container>
            </main>
            <MainFooter />
        </>
    );
};
