"use client";

// types
import type { FC } from "react";
import type { IProductsCategories } from "./ProductsList.types";
// libs
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
// configs
import { RouterPaths } from "@/constants/router-config";
import { FreeMode } from "swiper/modules";

export const ProductsCategories: FC<IProductsCategories> = (props) => {
    const { categories } = props;
    return (
        <Swiper
            className="w-full py-8"
            slidesPerView={"auto"}
            freeMode
            modules={[FreeMode]}
        >
            {categories?.map((category) => (
                <SwiperSlide
                    key={category}
                    className="mx-1 w-fit rounded bg-primary-100 hover:bg-primary-200"
                >
                    <Link
                        href={{
                            pathname: RouterPaths.shop.root,
                            query: {
                                category,
                            },
                        }}
                        className="px-4 py-2"
                    >
                        {category}
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
