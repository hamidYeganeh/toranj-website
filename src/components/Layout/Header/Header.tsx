"use client";

import { Button, Container } from "@/components/kit";
import { getNavbarItems, RESERVE_LINK } from "@/constants/navbar-config";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useTranslations } from "next-intl";

export const Header = () => {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
    const t = useTranslations("General");
    const navbar = getNavbarItems();
    useGSAP(() => {
        const showAnimation = gsap
            .from("#header", {
                yPercent: -100,
                paused: true,
                duration: 0.2,
            })
            .progress(1);

        ScrollTrigger.create({
            start: "top top",
            end: "max",
            markers: false,
            onUpdate: (self) =>
                self.direction === -1
                    ? showAnimation.play()
                    : showAnimation.reverse(),
        });
    });
    return (
        <header
            id="header"
            className="fixed left-0 top-0 z-header h-10 w-full bg-bg-paper duration-500"
        >
            <Container
                maxWidth={"xl"}
                className="flex h-full flex-row items-center justify-between"
            >
                <p className="text-md font-normal text-text-dark">
                    {t.rich("header.brand", {
                        brand: (chunks) => (
                            <span className="text-text-disabled">{chunks}</span>
                        ),
                    })}
                </p>

                <div className="flex flex-row items-center gap-1">
                    {navbar.map((navbarItem) => (
                        <Button
                            key={navbarItem.title}
                            size={"sm"}
                            variant={"outlined"}
                            href={navbarItem.path}
                            className="max-md:hidden"
                        >
                            {t(navbarItem.title)}
                        </Button>
                    ))}

                    <Button
                        variant={"contained"}
                        size={"sm"}
                        className="ms-4 px-2"
                        href={RESERVE_LINK}
                    >
                        {t("navbar.reserve-table")}
                    </Button>
                </div>
            </Container>
        </header>
    );
};
