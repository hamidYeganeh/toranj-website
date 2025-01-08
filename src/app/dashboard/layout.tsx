// types
import type { ReactNode } from "react";
// components
import { DashboardLayout } from "@/components/layout/DashboardLayout";
// guards
import { AuthGuard } from "@/containers/guards";

export default function DashboardPagesLayout(
    props: Readonly<{ children: ReactNode }>,
) {
    const { children } = props;
    return (
        <DashboardLayout>
            <AuthGuard>{children}</AuthGuard>
        </DashboardLayout>
    );
}
