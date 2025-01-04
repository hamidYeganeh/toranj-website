// types
import type { ReactNode } from "react";
// components
import { DashboardLayout } from "@/components/layout/DashboardLayout";

export default function DashboardPagesLayout(
    props: Readonly<{ children: ReactNode }>,
) {
    const { children } = props;
    return <DashboardLayout>{children}</DashboardLayout>;
}
