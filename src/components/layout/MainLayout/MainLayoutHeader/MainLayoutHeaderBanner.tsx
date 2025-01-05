import Image from "next/image";

export const MainLayoutHeaderBanner = () => {
    return (
        <div className="h-14 w-full bg-purple-400">
            <Image
                src={
                    "https://www.technolife.ir/image/banner_TopGifDesktop_RmDPjE_e765a42b-c763-4812-b4b7-aae8136c0155.gif"
                }
                alt="MAIN HEADER BANNER"
                className="h-full w-full object-cover"
                width={1440}
                height={4 * 14}
            />
        </div>
    );
};
