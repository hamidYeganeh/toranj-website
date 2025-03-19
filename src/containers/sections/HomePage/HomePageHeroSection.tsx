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

    useGSAP(() => {
        const heroTitle = gsap.timeline();

        heroTitle.fromTo(
            "#hero-section-title",
            {
                yPercent: 0,
            },
            {
                yPercent: -100,
            },
        );

        ScrollTrigger.create({
            trigger: "#hero-section-container",
            start: "25% top",
            end: "+=" + window.innerHeight / 2,
            scrub: 2,
            animation: heroTitle,
        });
    });

    return (
        <div
            ref={containerRef}
            id="hero-section-container"
            className="flex h-dvh w-full flex-col items-center justify-center"
        >
            <div className={cn("relative top-20", "max-md:top-0")}>
                <h1
                    id="hero-section-title"
                    className={cn(
                        "relative z-10 line-clamp-1 text-clip text-center font-bemirs text-6xl font-bold text-white",
                        "max-md:text-center max-md:text-3xl",
                    )}
                >
                    {t("hero-section.title")}
                </h1>
            </div>
            <div
                id="hero-section-image-container"
                className="absolute inset-0 m-auto h-dvh w-full bg-bg-paper"
            >
                <div className="absolute inset-0 m-auto h-full w-full bg-black/40"></div>
                <video
                    className="z-0 h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                >
                    <source src={MEDIAS.heroVideo} type="video/MP4" />
                </video>
            </div>
        </div>
    );
};
