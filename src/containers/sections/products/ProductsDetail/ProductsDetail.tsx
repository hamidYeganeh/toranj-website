// types
import type { FC } from "react";
import type { IProductDetails } from "./ProductsDetail.types";
// sections
import { ProductsDetailImages } from "./ProductsDetailImages";
import { ProductsDetailInfo } from "./ProductsDetailInfo";

export const ProductDetails: FC<IProductDetails> = (props) => {
    const { product } = props;
    return (
        <div className="flex flex-row items-start">
            <ProductsDetailImages product={product} />
            <ProductsDetailInfo product={product} />
        </div>
    );
};
