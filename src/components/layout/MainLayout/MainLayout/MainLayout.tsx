// types
import type { FC } from "react";
import type { IMainLayout } from "./MainLayout.types";
// components
import { MainLayoutHeader, MainLayoutHeaderBanner } from "../MainLayoutHeader";
import { MainLayoutNavbarHorizontal } from "../MainLayoutNavbar";
import { MainFooter } from "../MainFooter";

export const MainLayout: FC<IMainLayout> = (props) => {
  const { children } = props;
  return (
    <>
      <header className="w-full bg-tertiary-50 relative flex flex-col gap-2">
        <MainLayoutHeaderBanner />
        <MainLayoutHeader />
        <MainLayoutNavbarHorizontal />
      </header>
      <main className="w-full flex flex-col">
        <section className="min-h-dvh">{children}</section>
      </main>
      <MainFooter />
    </>
  );
};
