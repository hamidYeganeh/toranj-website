"use client";

import { MEDIAS } from "@/constants/layout-config";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useTranslations } from "next-intl";

export const HomePageAdvantagesSection = () => {
    const t = useTranslations("HomePage");

    useGSAP(() => {
        const advantages = gsap.timeline();

        advantages.fromTo(
            "#advantages-section",
            {
                xPercent: 100,
            },
            { xPercent: 0 },
        );

        ScrollTrigger.create({
            trigger: "#advantages-section",
            start: `+=${window.innerHeight}px center`,
            end: "+=" + window.innerHeight / 2,
            markers: false,
            scrub: 1,
            animation: advantages,
        });
        // ScrollTrigger.create({
        //     trigger: "#advantages-section-responsive",
        //     start: `top bottom`,
        //     end: "+=" + window.innerHeight / 2,
        //     markers: false,
        //     scrub: 1,
        //     animation: advantages,
        // });
    });

    return (
        <div className="relative h-[300dvh] w-full max-lg:h-[200dvh]">
            <div className="sticky top-0 h-dvh max-lg:h-full">
                <div
                    className="h-full w-full bg-cover bg-fixed bg-left-top"
                    style={{
                        backgroundImage: `url(${MEDIAS.contentImage4})`,
                        backgroundPositionX: "-50%",
                        backgroundPositionY: "0",
                    }}
                ></div>
            </div>
            <div className="absolute top-0 flex h-full w-full justify-end max-lg:py-2">
                <div
                    id="advantages-section"
                    className={cn(
                        "flex max-lg:hidden",
                        "sticky top-0 h-full w-1/2 flex-col justify-between gap-4 bg-white p-4",
                        "max-lg:mx-auto max-lg:w-[calc(100%-16px)] max-lg:pt-48",
                    )}
                >
                    <div className="relative h-full w-full">
                        <div className="sticky top-4 flex w-full flex-col gap-4 pt-12 max-lg:top-8">
                            <h3 className={cn("max-w-lg font-bemirs text-3xl")}>
                                {t("about-us-section.card.title")}
                            </h3>
                            <h3 className={cn("font-bemirs text-xl")}>
                                {t("about-us-section.card.description")}
                            </h3>
                        </div>
                    </div>
                    <div className="mb-24 flex w-full flex-col gap-20">
                        {Array.from(Array(4)).map((_, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-start gap-2"
                            >
                                <h6 className="font-brilliant text-sm font-bold uppercase tracking-widest text-text-dark">
                                    {t(
                                        `advantages-section.items.title-${index + 1}`,
                                    )}
                                </h6>
                                <p className="font-perpetua text-xs font-normal tracking-widest text-text-dark">
                                    {t(
                                        `advantages-section.items.description-${index + 1}`,
                                    )}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div
                    id="advantages-section-responsive"
                    className={cn(
                        "hidden max-lg:flex",
                        "sticky top-0 h-full w-1/2 flex-col justify-between gap-4 bg-white/75 p-4",
                        "max-lg:mx-auto max-lg:w-[calc(100%-16px)] max-lg:pt-48",
                    )}
                >
                    <div className="relative h-full w-full">
                        <div className="sticky top-4 flex w-full flex-col gap-4 pt-12 max-lg:top-8">
                            <h3
                                className={cn(
                                    "max-w-lg font-bemirs text-3xl",
                                    "max-lg:text-xl",
                                )}
                            >
                                {t("about-us-section.card.title")}
                            </h3>
                            <h3 className={cn("text-md font-bemirs")}>
                                {t("about-us-section.card.description")}
                            </h3>
                        </div>
                    </div>
                    <div className="mb-24 flex w-full flex-col gap-20">
                        {Array.from(Array(4)).map((_, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-start gap-2"
                            >
                                <h6 className="font-brilliant text-sm font-bold uppercase tracking-widest text-text-dark">
                                    {t(
                                        `advantages-section.items.title-${index + 1}`,
                                    )}
                                </h6>
                                <p className="font-perpetua text-xs font-normal tracking-widest text-text-dark">
                                    {t(
                                        `advantages-section.items.description-${index + 1}`,
                                    )}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
