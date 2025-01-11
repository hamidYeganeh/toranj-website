// libs
import Link from "next/link";
// types
import type { FC } from "react";
import type { IProductCard } from "./ProductCard.types";
// configs
import { productDetailRoute } from "@/constants/router-config";

export const ProductCard: FC<IProductCard> = (props) => {
    const { product } = props;

    return (
        <Link
            href={productDetailRoute(product.id)}
            className="flex h-48 w-64 items-center justify-center rounded border border-primary-100"
        >
            <h3 className="line-clamp-1">{product.title}</h3>
        </Link>
    );
};
