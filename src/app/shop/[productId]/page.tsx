// sections
import { ProductDetails } from "@/containers/sections";
// services
import { getProduct } from "@/services/products.service";
// types
import type { IProduct } from "@/types/products.types";

export default async function ProductDetailPage(props: {
    params: Promise<{ productId: IProduct["id"] }>;
}) {
    const { productId } = await props.params;
    const product = await getProduct({ id: productId });

    if (!product) return <></>;

    return (
        <>
            <div className="flex w-full flex-row rounded bg-white p-8">
                <ProductDetails product={product} />
            </div>
        </>
    );
}
