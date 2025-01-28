import { cn } from "@/lib/utils";
import { IGallery } from "@/types/general.types";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FC } from "react";

interface IGalleryCard {
    gallery: IGallery;
    id?: string;
    className?: string;
}
export const GalleryCard: FC<IGalleryCard> = (props) => {
    const { gallery, id, className } = props;
    const t = useTranslations("HomePage");

    return (
        <div
            id={id}
            className={cn(
                "flex aspect-square w-[464px] cursor-pointer flex-col gap-2 bg-white p-4",
                "max-md:w-[360px]",
                className,
            )}
        >
            <Image
                src={gallery.image}
                alt={`Gallery item ${gallery.title}`}
                width={500}
                height={288}
                className="h-72 w-full"
            />
            <div className="flex w-full flex-row items-center justify-between">
                <h4 className="text-xs font-medium text-text-primary">
                    {gallery.title}
                </h4>
                <h5 className="text-xs font-medium text-text-primary">
                    {gallery.date}
                </h5>
            </div>
            <div className="mt-auto flex w-full flex-row items-center justify-between">
                <h6 className="text-xs text-text-primary opacity-75">
                    <em>{gallery.subtitle}</em>
                </h6>

                <h6 className="text-xs text-text-primary opacity-75">
                    {t("products-section.book")}
                </h6>
            </div>
        </div>
    );
};
