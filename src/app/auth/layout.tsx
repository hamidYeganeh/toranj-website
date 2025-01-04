// components
import { AuthLayout } from "@/components/layout/AuthLayout";
// types
import type { ReactNode } from "react";

export default function AuthPagesLayout(
    props: Readonly<{ children: ReactNode }>,
) {
    const { children } = props;
    return <AuthLayout>{children}</AuthLayout>;
}
