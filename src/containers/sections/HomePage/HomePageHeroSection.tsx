"use client";

import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MEDIAS } from "@/constants/layout-config";

export const HomePageHeroSection = () => {
    const t = useTranslations("HomePage");
    const containerRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(
        () => {
            const heroSectionImageContainer = gsap.timeline({});
            const heroSectionImage = gsap.timeline();

            heroSectionImage
                .fromTo(
                    "#hero-section-image",
                    {
                        height: "0%",
                    },
                    {
                        height: "100dvh",
                        duration: 0.5,
                    },
                )
                .fromTo(
                    "#hero-section-image",
                    {
                        width: "50%",
                        margin: "0 auto",
                        backgroundPosition: "100% 100%",
                    },
                    {
                        width: "100%",
                        backgroundPosition: "0% 50%",
                        duration: 0.5,
                    },
                )
                .fromTo(
                    "#hero-section-title",
                    {
                        yPercent: 100,
                    },
                    { yPercent: 0, duration: 0.5 },
                    "<=",
                );
            // .fromTo(
            //     "#hero-section-image",
            //     {
            //         width: "50%",
            //         height: "0%",
            //         backgroundPosition: "top",
            //         transformOrigin: "center",
            //         backgroundSize: "100%",
            //     },
            //     {
            //         width: "100%",
            //         height: "100dvh",
            //         duration: 1,
            //         backgroundPosition: "center",
            //         backgroundSize: "150%",
            //         transformOrigin: "center",
            //     },
            // );
            // .to("#hero-section-image", {
            //     width: "100%",
            //     duration: 1,
            // });

            heroSectionImageContainer.fromTo(
                "#hero-section-image-container",
                {
                    scale: 1,
                },
                {
                    scale: 1.2,
                },
            );

            ScrollTrigger.create({
                trigger: "#hero-section-image-container",
                start: "top center",
                end: "max",
                markers: false,
                scrub: 1,
                animation: heroSectionImageContainer,
            });
        },
        { scope: containerRef },
    );

    return (
        <div ref={containerRef} className="flex w-full flex-col">
            <div className="h-52 w-full"></div>

            <div className={cn("relative top-20 px-8", "max-md:top-0")}>
                <h1
                    id="hero-section-title"
                    className={cn(
                        "line-clamp-1 text-clip text-center font-sequencia text-[206px] font-bold text-text-dark",
                        "max-md:text-5xl max-md:text-center",
                    )}
                >
                    {t("hero-section.title")}
                </h1>
            </div>
            <div
                id="hero-section-image-container"
                className="w-full bg-bg-paper px-8 py-4"
            >
                <div
                    id="hero-section-image"
                    className={cn(
                        "mx-auto flex h-dvh w-full overflow-hidden bg-cover bg-fixed",
                    )}
                    style={{
                        backgroundImage: `url(${MEDIAS.heroImage})`,
                        backgroundPosition: "0% 50%",
                    }}
                ></div>
            </div>
        </div>
    );
};
