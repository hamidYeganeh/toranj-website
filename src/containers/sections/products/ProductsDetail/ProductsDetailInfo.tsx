// types
import type { FC } from "react";
import type { IProductDetailsInfo } from "./ProductsDetail.types";

export const ProductsDetailInfo: FC<IProductDetailsInfo> = (props) => {
    const { product } = props;

    return (
        <div className="flex w-full flex-col p-8">
            <div className="flex flex-col items-start gap-4">
                <h1 className="line-clamp-2 text-4xl font-bold">
                    {product?.title || "-"}
                </h1>
                <h4 className="text-xl">{product?.sku}</h4>
            </div>
            <div className="flex flex-row items-center"></div>
        </div>
    );
};
