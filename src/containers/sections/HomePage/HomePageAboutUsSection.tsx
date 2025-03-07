"use client";

import { AboutUs } from "@/constants/dummy";
import { MEDIAS } from "@/constants/layout-config";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FC } from "react";

export const HomePageAboutUsSection = () => {
    gsap.registerPlugin(ScrollTrigger);
    const t = useTranslations("HomePage");

    useGSAP(() => {
        const aboutUsSections = gsap.timeline();

        aboutUsSections
            .to("#about-us-card", { xPercent: -100 })
            .fromTo("#about-us-card-1", { xPercent: 100 }, { xPercent: 0 }, "=")
            .fromTo(
                "#about-us-card-1-image",
                { width: "50%" },
                { width: "100%" },
            )
            .fromTo(
                "#about-us-card-1-title",
                { yPercent: 0 },
                { yPercent: -300 },
            )
            .fromTo(
                "#about-us-card-2-container",
                { left: "100dvw" },
                { left: "0dvw" },
            )
            .fromTo(
                "#about-us-card-2-image",
                { width: "50%" },
                { width: "100%" },
            )
            .fromTo(
                "#about-us-card-2-title",
                { yPercent: 0 },
                { yPercent: -300 },
            );

        ScrollTrigger.create({
            trigger: "#container",
            start: "top",
            pin: true,
            end: "+=" + window.innerHeight * 5,
            scrub: true,
            pinSpacing: true,
            animation: aboutUsSections,
        });
    });

    return (
        <div
            id="about-us"
            className="relative w-full"
            style={{
                backgroundAttachment: "fixed",
                backgroundImage: `url(${MEDIAS.aboutUsImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div
                id="about-us-card"
                className={cn("absolute left-0 top-0 h-full w-full")}
            >
                <div
                    className={cn(
                        "sticky left-0 top-0 flex h-dvh items-end justify-start p-8",
                    )}
                >
                    <div className="flex h-72 w-full max-w-md flex-col justify-between bg-white p-4 max-md:h-fit max-md:gap-8">
                        <p className="font-perpetua w-full max-w-60 text-xs font-medium leading-5 tracking-widest text-text-dark">
                            {t("about-us-section.card.title")}
                        </p>
                        <p className="font-perpetua w-full max-w-sm text-xs font-medium leading-5 tracking-widest text-text-dark">
                            {t("about-us-section.card.description")}
                        </p>
                    </div>
                </div>
            </div>

            <div
                id="about-us-text-container"
                className="flex w-full justify-end pe-24 pt-[35dvh] max-md:ps-6"
            >
                <div className={cn("w-1/3", "max-md:w-full")}>
                    <h2 className="font-brilliant max-w-full break-words text-5xl font-bold leading-[72px] text-white max-md:text-4xl">
                        {t("about-us-section.text")}
                    </h2>
                </div>
            </div>

            <div
                id="container"
                className="relative h-dvh w-dvw overflow-hidden"
            >
                <SectionCard id="about-us-card-1" item={AboutUs[0]} withBg />
                <div
                    id="about-us-card-2-container"
                    className="absolute left-[100dvw] top-0 h-dvh w-dvw"
                >
                    <SectionCard id="about-us-card-2" item={AboutUs[1]} />
                </div>
            </div>
        </div>
    );
};

const SectionCard: FC<{
    id: string;
    item: (typeof AboutUs)[number];
    withBg?: boolean;
}> = (props) => {
    const { id, item, withBg } = props;
    return (
        <div
            id={id}
            className={cn(
                "relative z-20 grid h-dvh w-dvw grid-cols-2",
                "max-md:grid-cols-1",
            )}
        >
            <div className="relative flex h-full items-center justify-center overflow-hidden">
                <h2
                    id={`${id}-title`}
                    className="font-brilliant absolute inset-0 top-[calc(50%-250px)] z-30 m-auto hidden max-w-xl text-center text-2xl leading-8 tracking-widest text-white mix-blend-hard-light max-md:inline-block"
                >
                    {item.title}
                </h2>
                <Image
                    id={`${id}-image`}
                    src={item.image}
                    alt={`About us card ${item.title}`}
                    width={300}
                    height={300}
                    className={cn(
                        "z-10 aspect-square w-[50%] object-cover",
                        "max-md:mx-auto max-md:w-[75%]",
                    )}
                />
            </div>
            <div
                className={cn(
                    "relative flex h-full justify-end",
                    {
                        "bg-secondary-200": withBg,
                    },
                    "max-md:hidden",
                )}
            >
                <div className="flex h-full w-full items-center justify-center bg-[#0c6056]">
                    <h2
                        id={`${id}-title`}
                        className="font-brilliant inline-block max-w-xl text-center text-4xl leading-[64px] text-white max-md:hidden"
                    >
                        {item.title}
                    </h2>
                </div>
                <div
                    className="h-full w-1/5 bg-cover bg-fixed bg-left"
                    style={{
                        backgroundImage: `url(${item.image})`,
                    }}
                ></div>
            </div>
        </div>
    );
};
