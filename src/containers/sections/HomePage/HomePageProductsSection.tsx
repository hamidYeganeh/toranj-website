"use client";

import { ProductCard } from "@/components/common/ProductCard";
import { Products } from "@/constants/dummy";
import { cn } from "@/lib/utils";
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
            <h1
                className={cn(
                    "sticky top-0 -z-10 line-clamp-1 text-clip text-center font-sequencia text-[206px] font-bold text-text-secondary",
                    "max-md:text-5xl max-md:text-center max-md:top-8",
                )}
            >
                {t("hero-section.title")}
            </h1>
            <div className="h-[400px] w-full"></div>
            <div
                className={cn(
                    "z-20 grid w-full grid-cols-3 gap-2",
                    "max-md:grid-cols-1",
                )}
            >
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
