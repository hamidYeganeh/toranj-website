"use client";

import { Button } from "@/components/kit";
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
            <div className="h-full w-full rounded bg-secondary-500 p-4">
                <Button
                    onClick={() => {
                        console.log("HERE");
                        handleToggleThemeMode();
                    }}
                >
                    CHANGE THEME MODE
                </Button>
            </div>
        </section>
    );
}
