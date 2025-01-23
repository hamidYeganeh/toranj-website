"use client";

import { ProductCard } from "@/components/common/ProductCard";
import { Products } from "@/constants/dummy";
import { useGSAP } from "@gsap/react";
import { useTranslations } from "next-intl";
import { useRef } from "react";

export const HomePageProductsSection = () => {
    const t = useTranslations("HomePage");
    const containerRef = useRef(null);

    useGSAP(
        () => {
            // ScrollTrigger.create({
            //     trigger: "#products-section-title",
            //     start: "top center",
            //     end: "max",
            //     markers: false,
            //     scrub: 1,
            //     pin: true,
            //     // pin: "#products-section-title",
            // });
        },
        { scope: containerRef },
    );

    return (
        <div
            id="products-section-container"
            ref={containerRef}
            className="relative z-0 w-full bg-text-dark px-8 pb-8"
        >
            <h1 className="sticky top-0 -z-10 line-clamp-1 text-left font-sequencia text-extreme font-bold text-text-secondary">
                {t("hero-section.title")}
            </h1>
            <div className="h-[400px] w-full"></div>
            <div className="z-20 grid w-full grid-cols-3 gap-2">
                {Products.map((product, productIndex) => {
                    if (!product)
                        return (
                            <div key={productIndex} className="col-span-1" />
                        );
                    else
                        return (
                            <ProductCard
                                key={`${product._id} - ${productIndex}`}
                                product={product}
                            />
                        );
                })}
            </div>
        </div>
    );
};
