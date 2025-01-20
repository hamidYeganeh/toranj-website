"use client";

import { MEDIAS } from "@/constants/layout-config";
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
            start: `+=${window.innerHeight}px bottom`,
            end: "+=" + window.innerHeight / 2,
            markers: false,
            scrub: 1,
            animation: advantages,
        });
    });

    return (
        <div className="relative h-[300dvh] w-full">
            <div
                className="h-full w-full bg-cover bg-fixed bg-no-repeat"
                style={{
                    backgroundImage: `url(${MEDIAS.contentImage4})`,
                    backgroundPositionX: "100%",
                    backgroundPositionY: "0",
                }}
            ></div>
            <div className="absolute top-0 flex h-full w-full justify-end">
                <div
                    id="advantages-section"
                    className="sticky top-0 flex h-full w-1/2 flex-col justify-between gap-4 bg-white p-4"
                >
                    <div className="relative h-full w-full">
                        <h3 className="sticky top-4 max-w-lg font-sequencia text-7xl">
                            {t("advantages-section.title")}
                        </h3>
                    </div>
                    <div className="mb-24 flex w-full flex-col gap-24">
                        {Array.from(Array(4)).map((_, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-start gap-2"
                            >
                                <h6 className="font-fira text-sm font-medium uppercase text-text-dark">
                                    {t(
                                        `advantages-section.items.title-${index + 1}`,
                                    )}
                                </h6>
                                <p className="font-fira text-xs font-normal text-text-dark">
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
