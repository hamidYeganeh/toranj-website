// sections
import { ProductsCategories, ProductsList } from "@/containers/sections";
// services
import {
    getProducts,
    getProductsByCategories,
    getProductsCategories,
} from "@/services/products.service";
// types
import type { IProduct } from "@/types/products.types";

export default async function ShopPage(props: {
    params: Promise<{ category: IProduct["category"] }>;
    searchParams: Promise<{ category: IProduct["category"] }>;
}) {
    const { category } = await props.searchParams;

    const products = await getProducts();
    const productsCategories = await getProductsCategories();
    const productsByCategory = await getProductsByCategories({
        category,
    });

    function getData() {
        if (!!category) {
            return productsByCategory;
        } else {
            return products;
        }
    }

    const data = getData();

    return (
        <section className="h-full flex-1 bg-bg-paper px-4">
            <ProductsCategories categories={productsCategories} />
            <ProductsList products={data.products} />
        </section>
    );
}
