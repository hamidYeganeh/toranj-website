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
        const contentSection2Bg1 = gsap.timeline();
        const gallerySection = gsap.timeline();
        const galleryItemsWrapper = gsap.timeline();
        const galleryItemsWrapperReversed = gsap.timeline();

        contentSection2Bg1.fromTo(
            "#content-bg-1",
            { width: "50%" },
            { width: "100%" },
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
            scrub: true,
            animation: contentSection2Bg1,
        });
        ScrollTrigger.create({
            id: "section-2",
            trigger: "#content-section-2",
            start: "top",
            end: "center top",
            markers: false,
            scrub: true,
            animation: galleryItemsWrapper,
        });
        ScrollTrigger.create({
            id: "section-3",
            trigger: "#content-section-3",
            start: "top",
            end: "center top",
            markers: false,
            scrub: true,
            animation: galleryItemsWrapperReversed,
        });
    });

    return (
        <div className="relative w-full">
            <ContentSection1 />
            <ContentSection2 />
        </div>
    );
};

const ContentSection1 = () => {
    const t = useTranslations("HomePage");

    return (
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
    );
};

export const ContentSection2 = () => {
    const t = useTranslations("HomePage");

    return (
        <div className="relative h-fit w-full">
            <div className="absolute left-0 top-0 z-[99] h-full w-full">
                <div className="sticky top-0 h-dvh w-full">
                    <Container className="flex h-full w-full flex-col justify-center gap-8">
                        <h2
                            id="content-section-2-title"
                            className="max-w-md text-start font-sequencia text-7xl"
                        >
                            {t("contents-section.gallery-title")}
                        </h2>

                        <div className="flex w-full flex-row items-center justify-between">
                            {GALLERY.map((galleryItem, index) => (
                                <div
                                    key={`gallery-item-${galleryItem._id}`}
                                    id={`gallery-item-${galleryItem._id}`}
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
                        className="h-full w-1/2 bg-blue-500 bg-fixed"
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
                    className="h-full w-full bg-blue-500 bg-fixed"
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
