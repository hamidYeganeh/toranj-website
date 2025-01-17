import { Container } from "@/components/kit";
import { MENU_ITEMS } from "@/constants/dummy";
import { useTranslations } from "next-intl";

export const HomePagePriceSection = () => {
    const t = useTranslations("HomePage");
    return (
        <div
            id="price-section"
            className="relative z-50 w-full overflow-hidden bg-text-dark py-32"
        >
            <Container>
                <h4 className="text-md text-text-light">
                    {t("price-section.title")}
                </h4>

                <div className="flex w-full flex-col gap-4">
                    {MENU_ITEMS.map((menuItem) => (
                        <div
                            key={menuItem._id}
                            className="group flex cursor-pointer flex-row items-baseline gap-4 border-b border-text-primary py-4"
                        >
                            <p className="font-fira text-sm text-text-disabled">
                                {t("price-section.menu-item-start-price", {
                                    price: menuItem.startPrice,
                                })}
                            </p>

                            <h2 className="text-huge font-sequencia text-white transition-all duration-500 group-hover:translate-x-7 group-hover:text-secondary-500">
                                {menuItem.title}
                            </h2>

                            <div className="flex-1" />

                            <div className="my-auto h-full text-2xl text-white transition-all duration-500 group-hover:-translate-x-7">
                                {"-->"}
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};
