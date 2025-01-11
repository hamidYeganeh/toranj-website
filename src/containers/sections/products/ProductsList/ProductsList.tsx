// components
import { ProductCard } from "@/components/common/Cards/ProductCards";
// types
import type { IProducts } from "@/types/products.types";
import type { FC } from "react";

interface IProductsList {
    products: IProducts["products"];
}
export const ProductsList: FC<IProductsList> = (props) => {
    const { products } = props;
    return (
        <div className="flex w-full flex-row flex-wrap items-start justify-start gap-2">
            {products.map((prodcut) => (
                <ProductCard key={prodcut.id} product={prodcut} />
            ))}
        </div>
    );
};
