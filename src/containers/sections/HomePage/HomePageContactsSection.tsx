import { Button } from "@/components/kit";
import { ContactUsData } from "@/constants/dummy";
import { getNavbarItems } from "@/constants/navbar-config";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Link from "next/link";

export const HomePageContactsSection = () => {
    const t = useTranslations("HomePage");
    const navbar = getNavbarItems();

    return (
        <div className="w-full bg-text-dark">
            <div className="flex w-full flex-row items-stretch justify-stretch divide-x divide-text-primary px-8">
                <div className="w-full">
                    <div className="flex h-72 w-full flex-col items-start gap-2 py-8">
                        <p className="text-md font-normal text-text-light">
                            {t.rich("contacts-section.brand", {
                                brand: (chunks) => (
                                    <span className="text-text-disabled">
                                        {chunks}
                                    </span>
                                ),
                            })}
                        </p>

                        <div className="mt-2 flex flex-col items-start gap-1">
                            {navbar.map((navbarItem) => (
                                <Button
                                    key={navbarItem.title}
                                    size={"sm"}
                                    variant={"outlined"}
                                    color="tertiary"
                                    className="hover:text-text-primary"
                                >
                                    {t(`contacts-section.${navbarItem.title}`)}
                                </Button>
                            ))}
                        </div>
                    </div>
                    <div className="flex w-full flex-col border-b border-text-primary">
                        {ContactUsData.map((contactItem, ContactItemIndex) => (
                            <div
                                key={ContactItemIndex}
                                className="flex w-full flex-col items-start gap-1 border-t border-text-primary py-4"
                            >
                                <p className="text-xs text-text-primary">
                                    {t(contactItem.label)}
                                </p>
                                <Link
                                    href={contactItem.link}
                                    className="text-xl capitalize text-text-light"
                                >
                                    {contactItem.value}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex h-[530px] w-full flex-col justify-between overflow-hidden border-b border-text-primary">
                    {Array.from(Array(5)).map((_, index) => (
                        <div
                            key={index}
                            className={cn(
                                "whitespace-nowrap font-sequencia text-9xl text-text-primary",
                                index % 2 === 0
                                    ? "animate-marquee"
                                    : "animate-marquee-reverse",
                            )}
                        >
                            {t("contacts-section.brand-simple") +
                                t("contacts-section.brand-simple")}
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex w-full flex-row items-center justify-between px-8 py-4">
                <p className="text-xs text-text-primary">
                    {t("contacts-section.copyright", {
                        year: new Date().getFullYear(),
                    })}
                </p>
                <p className="text-xs text-text-primary">
                    {t("contacts-section.privacy-policy")}
                </p>
                <div />
            </div>
        </div>
    );
};
