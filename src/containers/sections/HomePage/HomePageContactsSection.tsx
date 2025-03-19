import { ContactUsData, OpeningHours } from "@/constants/dummy";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Link from "next/link";

export const HomePageContactsSection = () => {
    const t = useTranslations("HomePage");

    return (
        <div id="contact-us" className="w-full bg-text-dark">
            <div
                className={cn(
                    "flex w-full flex-row items-stretch justify-stretch divide-x divide-text-primary px-8",
                    "max-lg:px-4",
                )}
            >
                <div className="w-full">
                    <div className="flex h-fit w-full flex-col items-start gap-2 py-8">
                        <p className="text-md font-normal text-text-light">
                            {t("contacts-section.opening-hour.title")}
                        </p>

                        <div className="mt-2 flex w-full max-w-xs flex-col items-start gap-2">
                            {OpeningHours.map((openingHour) => (
                                <div
                                    key={openingHour.weekday}
                                    className="grid w-full grid-cols-2"
                                >
                                    <h3 className="text-xs font-medium text-white">
                                        {openingHour.weekday}
                                    </h3>
                                    <h4
                                        className={cn(
                                            "text-center text-xs font-normal text-white",
                                            {
                                                "text-error-main":
                                                    openingHour.isClosed,
                                            },
                                        )}
                                    >
                                        {openingHour.time}
                                    </h4>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex w-full flex-col border-b border-text-primary">
                        {ContactUsData.map((contactItem, ContactItemIndex) => (
                            <div
                                key={ContactItemIndex}
                                className="flex w-full flex-col items-start gap-1 border-t border-text-primary py-4"
                            >
                                <p className="font-brilliant text-xs font-bold text-text-primary">
                                    {t(contactItem.label)}
                                </p>
                                <Link
                                    href={contactItem.link}
                                    target="_blank"
                                    className="font-montserrat text-xl capitalize text-text-light max-lg:text-sm max-lg:tracking-widest"
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
                                "whitespace-nowrap font-bemirs text-9xl text-text-primary",
                                index % 2 === 0
                                    ? "animate-marquee"
                                    : "animate-marquee-reverse",
                            )}
                        >
                            {t("contacts-section.brand-simple") +
                                t("contacts-section.brand-simple") +
                                t("contacts-section.brand-simple") +
                                t("contacts-section.brand-simple") +
                                t("contacts-section.brand-simple") +
                                t("contacts-section.brand-simple")}
                        </div>
                    ))}
                </div>
            </div>

            <div
                className={cn(
                    "flex w-full flex-row items-center justify-between px-8 py-4",
                    "max-lg:flex-col max-lg:gap-2 max-lg:px-4",
                )}
            >
                <p className="text-xs text-text-light">
                    {t.rich("contacts-section.copyright", {
                        year: new Date().getFullYear(),
                        developer: "Spexup",
                        guide: (chunks) => (
                            <Link target="_blank" href={"https://spexup.com"}>
                                {chunks}
                            </Link>
                        ),
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
