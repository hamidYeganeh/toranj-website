"use client";

import { Button, Container, IconButton } from "@/components/kit";
import { MENU_ITEMS } from "@/constants/dummy";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useFormatter, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

type IMenuItem = (typeof MENU_ITEMS)[number];

export const HomePagePriceSection = () => {
    const t = useTranslations("HomePage");
    const format = useFormatter();
    const [isMenuSheetOpen, setOpenMenuSheet] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState<IMenuItem | null>(null);

    function handleOpenMenuSheet() {
        setOpenMenuSheet(true);
    }
    function handleCloseMenuSheet() {
        setOpenMenuSheet(false);
    }
    function handleSelectedMenu(selectedMenu: IMenuItem) {
        setSelectedMenu(selectedMenu);
    }

    // useEffect(() => {
    //     if (!!document) {
    //         if (isMenuSheetOpen) {
    //             document.body.style.overflowY = "hidden";
    //         } else {
    //             document.body.style.overflowY = "auto";
    //         }
    //     }
    // }, [isMenuSheetOpen]);
    useGSAP(() => {
        const MenuSheet = gsap.timeline();

        if (isMenuSheetOpen) {
            MenuSheet.fromTo("#menu-sheet", { xPercent: 100 }, { xPercent: 0 });
        } else {
            MenuSheet.fromTo("#menu-sheet", { xPercent: 0 }, { xPercent: 100 });
        }
    });

    return (
        <div className="relative w-full bg-blue-500">
            {/* <div
                id="menu"
                className={cn(
                    "top-0 z-[9999] h-dvh w-full transition-all duration-500",
                )}
            >
                <div className="relative flex h-full w-full justify-end">
                    <div
                        className="absolute inset-0 z-0 m-auto h-full w-full"
                        style={{ filter: "blur(2px)" }}
                    ></div>
                    <IconButton
                        variant={"contained"}
                        size={"lg"}
                        className="absolute right-8 top-8 z-50 bg-white text-black hover:text-white"
                        onClick={handleCloseMenuSheet}
                    >
                        <IoClose />
                    </IconButton>
                    <div className="z-10 flex h-full w-1/2 flex-col bg-white p-4">
                        <div
                            className={"h-56 w-full bg-cover bg-fixed"}
                            style={{
                                backgroundImage: `url(${selectedMenu?.banner})`,
                            }}
                        ></div>
                        <div className="my-2 max-h-[calc(100%-(56*4px)-(14*4px))] w-full scroll-m-4 divide-y-[1px] overflow-y-scroll pe-4">
                            {selectedMenu?.items.map(
                                (menuSubItem, menuSubItemIndex) => (
                                    <div
                                        key={menuSubItemIndex}
                                        className="flex w-full flex-row items-center justify-between py-3"
                                    >
                                        <p className="text-md font-fira">
                                            {menuSubItem.title}
                                        </p>
                                        <p className="text-md font-fira">
                                            {format.number(menuSubItem.price, {
                                                style: "currency",
                                                currency: "EUR",
                                                minimumFractionDigits: 0,
                                            })}
                                        </p>
                                    </div>
                                ),
                            )}
                        </div>
                        <div className="mt-auto flex w-full flex-row items-center gap-2">
                            <Button
                                fullWidth
                                variant="contained"
                                color="secondary"
                                size={"md"}
                            >
                                {t("about-us-section.reserve-table")}
                            </Button>
                            <Button
                                fullWidth
                                variant="outlined"
                                color="primary"
                                size={"md"}
                            >
                                {t("about-us-section.callback")}
                            </Button>
                        </div>
                    </div>
                </div>
            </div> */}
            <div
                className={cn(
                    "z-reserve top-0 m-auto h-full w-full transition-all duration-500",
                    isMenuSheetOpen ? "fixed left-0" : "fixed left-[100dvw]",
                )}
            >
                <div className="relative flex h-full w-full justify-end">
                    <div className="absolute inset-0 z-10 m-auto backdrop-blur-xl"></div>
                    <IconButton
                        variant={"contained"}
                        size={"lg"}
                        className="absolute right-8 top-8 z-50 bg-white text-black hover:text-white"
                        onClick={handleCloseMenuSheet}
                    >
                        <IoClose />
                    </IconButton>

                    <div className="z-20 flex h-full w-1/2 flex-col bg-white p-4">
                        <div
                            className={"h-56 w-full bg-cover bg-fixed"}
                            style={{
                                backgroundImage: `url(${selectedMenu?.banner})`,
                            }}
                        ></div>
                        <div className="my-2 max-h-[calc(100%-(56*4px)-(14*4px))] w-full scroll-m-4 divide-y-[1px] overflow-y-scroll pe-4">
                            {selectedMenu?.items.map(
                                (menuSubItem, menuSubItemIndex) => (
                                    <div
                                        key={menuSubItemIndex}
                                        className="flex w-full flex-row items-center justify-between py-3"
                                    >
                                        <p className="text-md font-fira">
                                            {menuSubItem.title}
                                        </p>
                                        <p className="text-md font-fira">
                                            {format.number(menuSubItem.price, {
                                                style: "currency",
                                                currency: "EUR",
                                                minimumFractionDigits: 0,
                                            })}
                                        </p>
                                    </div>
                                ),
                            )}
                        </div>
                        <div className="mt-auto flex w-full flex-row items-center gap-2">
                            <Button
                                fullWidth
                                variant="contained"
                                color="secondary"
                                size={"md"}
                            >
                                {t("about-us-section.reserve-table")}
                            </Button>
                            <Button
                                fullWidth
                                variant="outlined"
                                color="primary"
                                size={"md"}
                            >
                                {t("about-us-section.callback")}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div
                id="price-section"
                className={cn(
                    "relative z-40 w-full overflow-hidden bg-text-dark py-32",
                    "max-md:px-4",
                )}
            >
                <Container>
                    <h4 className="text-md text-text-light">
                        {t("price-section.title")}
                    </h4>

                    <div className="flex w-full flex-col gap-4">
                        {MENU_ITEMS.map((menuItem) => (
                            <div
                                key={menuItem._id}
                                className={cn(
                                    "group flex cursor-pointer flex-row items-baseline gap-4 border-b border-text-primary py-4",
                                )}
                                onClick={() => {
                                    handleOpenMenuSheet();
                                    handleSelectedMenu(menuItem);
                                }}
                            >
                                <div
                                    className={cn(
                                        "flex flex-1 flex-row items-baseline gap-4",
                                        "max-md:flex-col",
                                    )}
                                >
                                    <p className="font-fira text-sm text-text-disabled">
                                        {t(
                                            "price-section.menu-item-start-price",
                                            {
                                                price: menuItem.startPrice,
                                            },
                                        )}
                                    </p>

                                    <h2
                                        className={cn(
                                            "font-sequencia text-9xl text-white transition-all duration-500 group-hover:translate-x-7 group-hover:text-secondary-500",
                                            "max-md:text-5xl",
                                        )}
                                    >
                                        {menuItem.title}
                                    </h2>
                                </div>

                                <div className="my-auto h-full text-2xl text-white transition-all duration-500 group-hover:-translate-x-7">
                                    {"-->"}
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
        </div>
    );
};
