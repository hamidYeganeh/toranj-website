import { IProduct } from "@/types/products.types";
import { PropsWithChildren } from "react";

export interface IProductDetails {
    product: IProduct;
}
export interface IProductDetailsInfo {
    product: IProduct;
}
export interface IProdutDetailImages {
    product: IProduct;
}
export interface IProductImagesThumb extends PropsWithChildren {
    productImage?: string;
    isActive?: boolean;
}
