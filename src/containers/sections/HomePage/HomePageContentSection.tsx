"use client";

import { GalleryCard } from "@/components/common/GalleryCard";
import { Container } from "@/components/kit";
import { GALLERY } from "@/constants/dummy";
import { MEDIAS } from "@/constants/layout-config";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useTranslations } from "next-intl";

export const HomePageContentSection = () => {
    gsap.registerPlugin(ScrollTrigger, useGSAP);

    useGSAP(() => {
        const contentSection2Bg1 = gsap.timeline();
        const galleryItemsWrapper = gsap.timeline();
        const galleryItemsWrapperReversed = gsap.timeline();

        contentSection2Bg1
            .to("#content-bg-1", { width: "100%" })
            .fromTo(
                "#content-section-2-title",
                { color: "#000000" },
                { color: "#ffffff" },
                ">=",
            );

        galleryItemsWrapper
            .fromTo(
                "#gallery-item-2",
                {
                    y: window.innerHeight,
                },
                {
                    y: 0,
                },
            )
            .fromTo(
                "#gallery-item-3",
                {
                    y: window.innerHeight,
                },
                {
                    y: 0,
                },
            );
        galleryItemsWrapperReversed
            .fromTo(
                "#content-section-2-title",
                {
                    y: 0,
                },
                {
                    y: -window.innerHeight,
                },
            )
            .fromTo(
                "#gallery-item-card-1",
                {
                    y: 0,
                },
                {
                    y: -window.innerHeight,
                },
                "=",
            )
            .fromTo(
                "#gallery-item-card-2",
                {
                    y: 0,
                },
                {
                    y: -window.innerHeight,
                },
                ">",
            )
            .fromTo(
                "#gallery-item-card-3",
                {
                    y: 0,
                },
                {
                    y: -window.innerHeight,
                },
                ">",
            );

        ScrollTrigger.create({
            trigger: "#content-section-2",
            start: "top",
            end: `+=${window.innerHeight}px`,
            markers: false,
            scrub: 1,
            animation: contentSection2Bg1,
        });
        ScrollTrigger.create({
            id: "section-2",
            trigger: "#content-section-2",
            start: "top",
            end: "center top",
            markers: false,
            scrub: 1,
            animation: galleryItemsWrapper,
        });
        ScrollTrigger.create({
            id: "section-3",
            trigger: "#content-section-3",
            start: "top",
            end: "center top",
            markers: false,
            scrub: 1,
            animation: galleryItemsWrapperReversed,
        });
    });

    return (
        <div id="story" className="relative w-full">
            <ContentSection1 />
            <ContentSection2 />
        </div>
    );
};

const ContentSection1 = () => {
    const t = useTranslations("HomePage");

    return (
        <div className="flex h-[200dvh] w-full flex-row items-start bg-white">
            <div
                className={cn("h-full w-1/2 px-8", "max-lg:z-10 max-lg:w-full")}
            >
                <div className="flex h-dvh w-full items-center justify-start">
                    <h3
                        className={cn(
                            "max-w-lg text-start font-bemirs text-5xl font-bold leading-[64px] text-text-dark",
                            "max-lg:text-3xl max-lg:text-text-light",
                        )}
                    >
                        {t("contents-section.title")}
                    </h3>
                </div>
                <div className="flex h-dvh w-full items-center justify-start">
                    <p
                        className={cn(
                            "whitespace-pre-line font-perpetua text-lg font-normal tracking-widest text-text-dark",
                            "max-lg:text-text-light",
                        )}
                    >
                        {t("contents-section.description")}
                    </p>
                </div>
            </div>
            <div
                className={cn(
                    "sticky top-0 h-full w-1/2",
                    "max-lg:absolute max-lg:z-0 max-lg:h-full max-lg:w-full",
                )}
            >
                <div
                    className="block h-full w-full bg-cover bg-fixed bg-right-top bg-no-repeat max-lg:hidden"
                    style={{
                        backgroundImage: `url(${MEDIAS.contentImage11})`,
                    }}
                ></div>
                <div
                    className="hidden h-full w-full bg-cover bg-fixed bg-right-top bg-no-repeat max-lg:block"
                    style={{
                        backgroundImage: `url(${MEDIAS.contentImage1})`,
                    }}
                ></div>
            </div>
        </div>
    );
};

const ContentSection2 = () => {
    const t = useTranslations("HomePage");
    return (
        <div className={cn("relative h-fit w-full")}>
            <div className="absolute left-0 top-0 z-[99] h-full w-full">
                <div className="sticky top-0 h-dvh w-full">
                    <Container className="flex h-full w-full flex-col justify-center gap-8">
                        <h2
                            id="content-section-2-title"
                            className={cn(
                                "max-w-md text-start font-perpetua text-3xl",
                                "max-lg:absolute max-lg:top-[10dvh] max-lg:z-50 max-lg:mx-4 max-lg:max-w-full max-lg:text-3xl max-lg:text-text-light",
                            )}
                        >
                            {t("contents-section.gallery-title")}
                        </h2>

                        <div
                            className={cn(
                                "relative flex w-full flex-row items-center justify-between",
                            )}
                        >
                            {GALLERY.map((galleryItem) => (
                                <div
                                    key={`gallery-item-${galleryItem._id}`}
                                    id={`gallery-item-${galleryItem._id}`}
                                    className="max-lg:absolute max-lg:mx-auto max-lg:flex max-lg:w-full max-lg:justify-center"
                                >
                                    <GalleryCard
                                        id={`gallery-item-card-${galleryItem._id}`}
                                        gallery={galleryItem}
                                    />
                                </div>
                            ))}
                        </div>
                    </Container>
                </div>
            </div>
            <div id="content-section-2" className="relative w-full">
                <div className="relative flex h-[250dvh] w-full flex-row-reverse">
                    <div
                        id="content-bg-1"
                        className={cn(
                            "h-full w-1/2 bg-cover bg-fixed bg-no-repeat max-lg:hidden",
                            "max-lg:w-full",
                        )}
                        style={{
                            backgroundImage: `url(${MEDIAS.contentImage2})`,
                            backgroundPositionX: "100%",
                            backgroundPositionY: "0",
                        }}
                    ></div>
                    <div
                        className={cn(
                            "hidden h-full w-full bg-cover bg-fixed bg-no-repeat max-lg:block",
                            "max-lg:w-full",
                        )}
                        style={{
                            backgroundImage: `url(${MEDIAS.contentImage2})`,
                            backgroundPositionX: "100%",
                            backgroundPositionY: "0",
                        }}
                    ></div>
                </div>
            </div>
            <div id="content-section-3" className="h-[150dvh] w-full">
                <div
                    className="h-full w-full bg-cover bg-fixed bg-no-repeat"
                    style={{
                        backgroundImage: `url(${MEDIAS.contentImage3})`,
                        backgroundPositionX: "100%",
                        backgroundPositionY: "0",
                    }}
                ></div>
            </div>
        </div>
    );
};
