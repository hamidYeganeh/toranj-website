"use client";

import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const HomePageHeroSection = () => {
    const t = useTranslations("HomePage");
    const containerRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(
        () => {
            const heroSectionImageContainer = gsap.timeline({});
            // const heroSectionImage = gsap.timeline({});

            // heroSectionImage.fromTo(
            //     "#hero-section-image-container",
            //     {
            //         width: "50%",
            //         height: 0,
            //     },
            //     {
            //         width: "100%",
            //         height: "100dvh",
            //     },
            // );

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
                scrub: true,
                animation: heroSectionImageContainer,
            });
        },
        { scope: containerRef },
    );

    return (
        <div ref={containerRef} className="flex w-full flex-col">
            <div className="h-52 w-full"></div>

            <div className="relative top-20 px-8">
                <h1 className="line-clamp-1 text-left font-sequencia text-extreme font-bold text-text-dark">
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
                        "flex h-screen w-full overflow-hidden",
                        "bg-[url(https://static.tildacdn.com/tild3664-3161-4535-b465-313832633639/max1232617_A_delecta.jpg)] bg-cover",
                    )}
                    style={{
                        backgroundPosition: "0% 50%",
                    }}
                ></div>
            </div>
        </div>
    );
};
