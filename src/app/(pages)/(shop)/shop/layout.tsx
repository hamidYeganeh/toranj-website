import { ReactNode } from "react";

export default function ShopLayout(
  props: Readonly<{
    children: ReactNode;
    navbar: ReactNode;
  }>
) {
  const { children, navbar } = props;
  return (
    <main className="w-full max-w-xl m-auto flex flex-col">
      <section className="flex flex-row items-stretch ">
        {navbar}
        {children}
      </section>
    </main>
  );
}
