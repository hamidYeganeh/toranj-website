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

    // useGSAP(
    //     () => {
    //         const heroSectionImageContainer = gsap.timeline({});
    //         const heroSectionImage = gsap.timeline();

    //         heroSectionImage
    //             .fromTo(
    //                 "#hero-section-image",
    //                 {
    //                     height: "0%",
    //                 },
    //                 {
    //                     height: "100dvh",
    //                     duration: 0.5,
    //                 },
    //             )
    //             .fromTo(
    //                 "#hero-section-image",
    //                 {
    //                     width: "50%",
    //                     margin: "0 auto",
    //                     backgroundPosition: "100% 100%",
    //                 },
    //                 {
    //                     width: "100%",
    //                     backgroundPosition: "0% 50%",
    //                     duration: 0.5,
    //                 },
    //             )
    //             .fromTo(
    //                 "#hero-section-title",
    //                 {
    //                     yPercent: 100,
    //                 },
    //                 { yPercent: 0, duration: 0.5 },
    //                 "<=",
    //             );
    //         // .fromTo(
    //         //     "#hero-section-image",
    //         //     {
    //         //         width: "50%",
    //         //         height: "0%",
    //         //         backgroundPosition: "top",
    //         //         transformOrigin: "center",
    //         //         backgroundSize: "100%",
    //         //     },
    //         //     {
    //         //         width: "100%",
    //         //         height: "100dvh",
    //         //         duration: 1,
    //         //         backgroundPosition: "center",
    //         //         backgroundSize: "150%",
    //         //         transformOrigin: "center",
    //         //     },
    //         // );
    //         // .to("#hero-section-image", {
    //         //     width: "100%",
    //         //     duration: 1,
    //         // });

    //         heroSectionImageContainer.fromTo(
    //             "#hero-section-image-container",
    //             {
    //                 scale: 1,
    //             },
    //             {
    //                 scale: 1.2,
    //             },
    //         );

    //         ScrollTrigger.create({
    //             trigger: "#hero-section-image-container",
    //             start: "top center",
    //             end: "max",
    //             markers: false,
    //             scrub: 1,
    //             animation: heroSectionImageContainer,
    //         });
    //     },
    //     { scope: containerRef },
    // );

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
            end: '+=' + window.innerHeight / 2,
            markers: true,
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
                        "relative z-10 line-clamp-1 text-clip text-center font-sequencia text-[206px] font-bold text-text-light",
                        "max-md:text-center max-md:text-5xl",
                    )}
                >
                    {t("hero-section.title")}
                </h1>
            </div>
            <div
                id="hero-section-image-container"
                className="absolute inset-0 m-auto h-dvh w-full bg-bg-paper"
            >
                <video
                    className="z-0 h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                >
                    <source
                        src="https://caspian16.asset.aparat.com/aparat-video/48e6b37ba4b19fb80aa64dc3f1dabfc762989303-240p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImRlZDYwOTg1NDhiNDZjZTY0NTlmOGQ1MTUyZmFiNzg2IiwiZXhwIjoxNzM5MDI1MTQ3LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.rqa3tKLYiLNJscgE9lrk57-GRdkqVDJg2Rf3zE4Bkx8"
                        type="video/MP4"
                    />
                </video>
                {/* <div
                    id="hero-section-image"
                    className={cn(
                        "mx-auto flex h-full w-full overflow-hidden bg-cover bg-fixed z-0",
                    )}
                    style={{
                        backgroundImage: `url(${MEDIAS.heroImage})`,
                        backgroundPosition: "0% 50%",
                    }}
                ></div> */}
            </div>
        </div>
    );
};
