"use client";
// components
import { Button, Container } from "@/components/kit";
import { useTranslations } from "next-intl";
// libs
import { getTranslations } from "next-intl/server";
import { useState, useTransition } from "react";

export default function HomePage() {
    const t = useTranslations("HomePage");
    const [isPending, setIsPending] = useState(false);

    function handleClick() {
        setIsPending(true);
        setTimeout(() => {
            setIsPending(false);
        }, 2 * 1000);
    }

    return (
        <Container maxWidth={"xl"}>
            <Button
                loading={isPending}
                variant={"light"}
                color={"secondary"}
                onClick={handleClick}
            >
                {t("title")}
            </Button>
        </Container>
    );
}
