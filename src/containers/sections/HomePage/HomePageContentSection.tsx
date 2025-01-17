"use client";

import { GalleryCard } from "@/components/common/GalleryCard";
import { Container } from "@/components/kit";
import { GALLERY } from "@/constants/dummy";
import { MEDIAS } from "@/constants/layout-config";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useTranslations } from "next-intl";

export const HomePageContentSection = () => {
    gsap.registerPlugin(ScrollTrigger, useGSAP);

    const t = useTranslations("HomePage");

    useGSAP(() => {
        const galleryBg = gsap.timeline();
        const gallerySection = gsap.timeline();
        const galleryWrapper = gsap.timeline();
        gallerySection.fromTo(
            "#gallery-bg",
            { width: "50%" },
            { width: "100%" },
        );
        galleryWrapper
            .fromTo(
                "#gallery-item-2",
                {
                    y: window.innerHeight,
                    display: "none",
                },
                {
                    y: 0,
                    display: "block",
                },
            )
            .fromTo(
                "#gallery-item-3",
                {
                    y: window.innerHeight,
                    display: "none",
                },
                {
                    y: 0,
                    display: "block",
                },
                ">",
            );

        ScrollTrigger.create({
            trigger: "#gallery-section",
            start: "top",
            // end: "+=" + window.innerHeight * 2,
            end: "max",
            markers: false,
            scrub: true,
            pin: true,
            animation: gallerySection,
        });
        ScrollTrigger.create({
            id: "gallery-wrapper",
            trigger: "#gallery-content-wrapper",
            end: "max",
            markers: false,
            pin: true,
            scrub: true,
            animation: gallerySection,
        });
        ScrollTrigger.create({
            id: "#gallery-wrapper",
            trigger: "#gallery-wrapper",
            start: "top",
            scrub: true,
            markers: false,
            animation: galleryWrapper,
        });

        // ScrollTrigger.create({
        //     trigger: "#gallery-item-3",
        //     start: "top center",
        //     end: "+=" + window.innerHeight / 2,
        //     markers: true,
        //     scrub: true,
        //     pin: true,
        //     animation: galleryBg,
        // });
    });

    return (
        <div className="relative w-full">
            <div className="flex h-[200dvh] w-full flex-row items-start bg-white">
                <div className="h-full w-1/2 px-8">
                    <div className="flex h-dvh w-full items-center justify-start">
                        <h3 className="max-w-lg text-start font-sequencia text-7xl font-bold text-text-dark">
                            {t("contents-section.title")}
                        </h3>
                    </div>
                    <div className="flex h-dvh w-full items-center justify-start">
                        <p className="whitespace-pre-line text-xs font-normal text-text-dark">
                            {t("contents-section.description")}
                        </p>
                    </div>
                </div>
                <div
                    className="sticky top-0 h-dvh w-1/2 bg-fixed bg-no-repeat"
                    style={{
                        backgroundImage: `url(${MEDIAS.contentImage1})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        transformOrigin: "center",
                    }}
                ></div>
            </div>
            <div
                id="gallery-section"
                className="flex w-full flex-row-reverse bg-white"
            >
                <div
                    id="gallery-content"
                    className="absolute bottom-0 left-0 top-0 z-40 h-dvh w-full bg-transparent px-8"
                >
                    <div
                        id="gallery-content-wrapper"
                        className="flex h-full w-full flex-col items-start justify-center"
                    >
                        <h2 className="max-w-md text-start font-sequencia text-7xl mix-blend-difference">
                            {t("contents-section.gallery-title")}
                        </h2>

                        <div
                            id="gallery-wrapper"
                            className="flex w-full flex-row items-start gap-2"
                        >
                            <GalleryCard
                                className="gallery-item"
                                id={`gallery-item-1`}
                                gallery={GALLERY[0]}
                            />
                            <GalleryCard
                                className="gallery-item"
                                id={`gallery-item-2`}
                                gallery={GALLERY[1]}
                            />
                            <GalleryCard
                                className="gallery-item"
                                id={`gallery-item-3`}
                                gallery={GALLERY[2]}
                            />
                        </div>
                    </div>
                </div>
                <div
                    id="gallery-bg"
                    className="sticky top-0 z-30 flex h-dvh w-1/2"
                >
                    <div
                        id="gallery-bg-1"
                        className="gallery-bg h-dvh w-full bg-cover bg-fixed bg-no-repeat"
                        style={{
                            backgroundImage: `url(${MEDIAS.contentImage2})`,
                            backgroundPositionX: "100%",
                            backgroundPositionY: "0",
                        }}
                    ></div>
                    {/* <div
                        id="gallery-bg-2"
                        className="gallery-bg block h-dvh w-full bg-cover bg-fixed bg-no-repeat"
                        style={{
                            backgroundImage: `url(${MEDIAS.contentImage3})`,
                            backgroundPositionX: "100%",
                            backgroundPositionY: "0",
                        }}
                    ></div> */}
                </div>
            </div>
        </div>
    );
};
