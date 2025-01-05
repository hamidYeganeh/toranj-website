"use client";

import { Badge, Button, IconButton } from "@/components/kit";
import { BellRing } from "lucide-react";
import { useTheme } from "next-themes";

export default function ShopPage() {
    const { setTheme, theme } = useTheme();

    function handleToggleThemeMode() {
        if (theme === "dark") {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    }

    return (
        <section className="h-[200vh] flex-1 bg-bg-paper px-4">
            <div className="h-full w-full rounded p-4">
                <IconButton
                    color="secondary"
                    variant={"outlined"}
                    onClick={() => {
                        handleToggleThemeMode();
                    }}
                >
                    <Badge badgeContent={9}>
                        <BellRing />
                    </Badge>
                </IconButton>
            </div>
        </section>
    );
}
