import { MEDIAS } from "@/constants/layout-config";

export const HomePageAdvantagesSection = () => {
    return (
        <div id="content-section-4" className="h-dvh w-full">
            <div
                className="h-full w-full bg-blue-500 bg-fixed bg-cover bg-no-repeat"
                style={{
                    backgroundImage: `url(${MEDIAS.contentImage4})`,
                    backgroundPositionX: "100%",
                    backgroundPositionY: "0",
                }}
            ></div>
        </div>
    );
};
