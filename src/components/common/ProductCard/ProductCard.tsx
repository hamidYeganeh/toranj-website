"use client";

import { IProduct } from "@/types/general.types";
import { useFormatter, useTranslations } from "next-intl";
import { FC, useState } from "react";

interface IProductCard {
    product: IProduct;
}
export const ProductCard: FC<IProductCard> = (props) => {
    const { product } = props;
    const t = useTranslations("HomePage");
    const format = useFormatter();
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="flex aspect-square w-full cursor-pointer flex-col gap-2 border border-text-primary bg-text-dark p-4"
            onMouseOver={() => {
                setIsHovered(true);
            }}
            onMouseOut={() => {
                setIsHovered(false);
            }}
        >
            <div
                className="h-72 w-full bg-cover bg-center bg-no-repeat transition-all duration-500"
                style={{
                    backgroundImage: `url(${
                        isHovered ? product?.images[0] : product?.images[1]
                    })`,
                }}
            ></div>
            <div className="flex w-full flex-row items-center justify-between">
                <h4 className="font-perpetua text-xs font-medium tracking-widest text-text-secondary max-lg:text-sm">
                    {product.title}
                </h4>
                <h5 className="font-perpetua text-xs font-medium tracking-widest text-text-secondary max-lg:text-sm">
                    {format.number(product.price, {
                        style: "currency",
                        currency: "EUR",
                        minimumFractionDigits: 0,
                    })}
                </h5>
            </div>
            <div className="mt-auto flex w-full flex-row items-center justify-between gap-2">
                <h6 className="flex-1 font-perpetua text-xs tracking-widest text-text-secondary opacity-30">
                    <em>{product.subtitle}</em>
                </h6>

                <h6 className="font-perpetua text-xs tracking-widest text-text-secondary opacity-30">
                    {t("products-section.book")}
                </h6>
            </div>
        </div>
    );
};
