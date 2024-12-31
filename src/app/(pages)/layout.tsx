import { ReactNode } from "react";

export default function MainLayout(
  props: Readonly<{
    children: ReactNode;
    header: ReactNode;
    footer: ReactNode;
  }>
) {
  const { children, footer, header } = props;
  return (
    <main className="w-full flex flex-col">
      {header}
      <section className="min-h-dvh">{children}</section>
      {footer}
    </main>
  );
}
