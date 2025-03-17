"use client";

import { Button, Container } from "@/components/kit";
import { getNavbarItems, RESERVE_LINK } from "@/constants/navbar-config";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

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
            className="bg-brand-500 fixed left-0 top-0 z-header h-12 w-full duration-500"
        >
            <Container
                maxWidth={"xl"}
                className="flex h-full flex-row items-center justify-between"
            >
                <Link href={"/"} className="flex flex-row items-center gap-2">
                    <div className="flex aspect-square items-center justify-center rounded-md bg-white">
                        <Image
                            src={"/assets/images/logo.png"}
                            alt="Toranj logo"
                            width={36}
                            height={36}
                            className="aspect-square w-9 object-cover"
                        />
                    </div>
                    <p className="text-lg font-normal text-white">
                        {t.rich("header.brand", {
                            chunks: (chunks) => (
                                <span className="text-xs text-white/75">
                                    {chunks}
                                </span>
                            ),
                        })}
                    </p>
                </Link>

                <div className="flex flex-row items-center gap-1">
                    {navbar.map((navbarItem) => (
                        <Button
                            key={navbarItem.title}
                            size={"sm"}
                            variant={"light"}
                            href={navbarItem.path}
                            className="max-md:hidden"
                        >
                            {t(navbarItem.title)}
                        </Button>
                    ))}

                    <Button
                        variant={"contained"}
                        size={"sm"}
                        color="secondary"
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
