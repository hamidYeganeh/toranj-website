"use client";

// libs
import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs } from "swiper/modules";
import { cn } from "@/lib/utils";
// types
import type { FC } from "react";
import type {
    IProductImagesThumb,
    IProdutDetailImages,
} from "./ProductsDetail.types";
import type { Swiper as ISwiper } from "swiper/types";

export const ProductsDetailImages: FC<IProdutDetailImages> = (props) => {
    const { product } = props;

    const [thumbsSwiper, setThumbsSwiper] = useState<ISwiper | null>(null);

    return (
        <div className="flex h-[540px] w-[360px] flex-col gap-8 rounded bg-primary-100 p-8">
            <Swiper
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Thumbs]}
                className="w-full"
            >
                {product.images.map((productImage) => (
                    <SwiperSlide
                        key={`Product detail main thumb - ${productImage}`}
                    >
                        <ProductImageMainThumb productImage={productImage} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="flex w-full flex-row items-center rounded bg-white p-4">
                <div className="me-1">
                    <ProductImageThumb>
                        {/* TODO:Light box */}
                        <div className="h-full w-full"></div>
                    </ProductImageThumb>
                </div>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={4 * 2}
                    freeMode={true}
                    slidesPerView={3}
                    modules={[FreeMode, Thumbs]}
                    className="relative flex-1"
                >
                    {product.images.map((productImage, productImageIndex) => (
                        <SwiperSlide
                            className="w-fit"
                            key={`Product detail small thumb - ${productImage}`}
                        >
                            <ProductImageThumb
                                isActive={
                                    thumbsSwiper?.activeIndex ===
                                    productImageIndex
                                }
                                productImage={productImage}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

const ProductImageMainThumb: FC<IProductImagesThumb> = (props) => {
    const { productImage, children } = props;

    return (
        <div className="flex aspect-square w-full items-center justify-center overflow-hidden rounded bg-white">
            {!!productImage && (
                <Image
                    src={productImage!}
                    alt={"Product Detail main thumb"}
                    width={224}
                    height={224}
                    className="size-56"
                />
            )}
            {!!children && children}
        </div>
    );
};
const ProductImageThumb: FC<IProductImagesThumb> = (props) => {
    const { productImage, children, isActive } = props;

    return (
        <div
            className={cn(
                "flex size-16 cursor-pointer items-center justify-center rounded-lg transition-all duration-200 hover:bg-primary-100",
                isActive ? "bg-primary-100" : "bg-white",
            )}
        >
            {!!productImage && (
                <Image
                    src={productImage}
                    alt={"Product detail small thumb"}
                    width={40}
                    height={40}
                    className="size-9/12 rounded-lg object-cover"
                />
            )}
            {!!children && children}
        </div>
    );
};
