import { ProductCard } from "@/components/common/ProductCard";
import { Products } from "@/constants/dummy";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

export const HomePageProductsSection = () => {
    const t = useTranslations("HomePage");

    return (
        <div
            id="products-section-container"
            className="relative z-0 w-full bg-text-dark p-8"
        >
            <h1
                className={cn(
                    "sticky top-0 -z-10 line-clamp-1 text-clip text-center font-bemirs text-6xl font-bold text-text-secondary",
                    "max-lg:top-8 max-lg:text-center max-lg:text-3xl",
                )}
            >
                {t("hero-section.title")}
            </h1>
            <div className="h-60 w-full"></div>
            <div
                className={cn(
                    "z-20 grid w-full grid-cols-3 gap-2",
                    "max-lg:grid-cols-1",
                )}
            >
                {Products.map((product, productIndex) => {
                    if (!product)
                        return (
                            <div key={productIndex} className="col-span-1" />
                        );
                    else
                        return (
                            <ProductCard
                                key={`${product._id} - ${productIndex}`}
                                product={product}
                            />
                        );
                })}
            </div>
        </div>
    );
};
