import { IGallery, IProduct } from "@/types/general.types";
import { MEDIAS } from "./layout-config";

export const Products: (IProduct | null)[] = [
    {
        _id: "1",
        title: "Tiramissu",
        price: 10,
        subtitle: "Bright shades of coffee",
        images: [
            "https://static.tildacdn.com/tild6131-6533-4461-a264-383165616536/max1232617_photo_of_.jpg",
            "https://static.tildacdn.com/tild3739-3961-4663-a339-363838343235/max1232617_a_photo_o.jpg",
        ],
    },
    {
        _id: "2",
        title: "Tiramissu",
        price: 10,
        subtitle: "Bright shades of coffee",
        images: [
            "https://static.tildacdn.com/tild6131-6533-4461-a264-383165616536/max1232617_photo_of_.jpg",
            "https://static.tildacdn.com/tild3739-3961-4663-a339-363838343235/max1232617_a_photo_o.jpg",
        ],
    },
    {
        _id: "3",
        title: "Tiramissu",
        price: 10,
        subtitle: "Bright shades of coffee",
        images: [
            "https://static.tildacdn.com/tild6131-6533-4461-a264-383165616536/max1232617_photo_of_.jpg",
            "https://static.tildacdn.com/tild3739-3961-4663-a339-363838343235/max1232617_a_photo_o.jpg",
        ],
    },
    {
        _id: "4",
        title: "Tiramissu",
        price: 10,
        subtitle: "Bright shades of coffee",
        images: [
            "https://static.tildacdn.com/tild6131-6533-4461-a264-383165616536/max1232617_photo_of_.jpg",
            "https://static.tildacdn.com/tild3739-3961-4663-a339-363838343235/max1232617_a_photo_o.jpg",
        ],
    },
    null,
    {
        _id: "5",
        title: "Tiramissu",
        price: 10,
        subtitle: "Bright shades of coffee",
        images: [
            "https://static.tildacdn.com/tild6131-6533-4461-a264-383165616536/max1232617_photo_of_.jpg",
            "https://static.tildacdn.com/tild3739-3961-4663-a339-363838343235/max1232617_a_photo_o.jpg",
        ],
    },
];

export const AboutUs = [
    {
        title: "EIN KULINARISCHES ERLEBNIS WIE KEIN ANDERES",
        image: MEDIAS.aboutUsImage2,
    },
    {
        title: "BIS WIR DIE GASTRONOMIE ENTDECKTEN, WAREN WIR NIE WIRKLICH AN IRGENDETWAS INTERESSIERT",
        image: MEDIAS.aboutUsImage3,
    },
];

export const MENU_ITEMS = [
    {
        _id: "1",
        title: "Grillgerichte",
        banner: MEDIAS.menuKababBanner,
        items: [
            {
                title: "KUBIDEH",
                description:
                    "Faschierter Spieß aus Lamm & Rind serviert mit Basmati-Reis oder Pommes",
                price: 13.9,
            },
            {
                title: "KABAB-BARG",
                description:
                    "Zartes Lammfilet vom Grill serviert mit Basmati-Reis oder Pommes",
                price: 17.9,
            },
            {
                title: "KABAB-SHISHLIK",
                description:
                    "Gegrillte Lammkoteletts serviert mit Basmati-Reis oder Pommes",
                price: 18.9,
            },
            {
                title: "JUJEH-TORSH",
                description:
                    "Fein mariniertes Hühnerfilet vom Grill, eingelegt in Granatapfelsauce & persischen Limetten (C,G)",
                price: 19.3,
            },
        ],
    },
    {
        _id: "2",
        title: "VORSPEISEN",
        banner: MEDIAS.menuStarterBanner,
        items: [
            {
                title: "MIRZA GHASEMI",
                description:
                    "Fein passierte, geräucherte Melanzani, verfeinert mit Ei, Tomaten & Knoblauch serviert mit Hausbrot (C,O)",
                price: 6.9,
            },
            {
                title: "KASHKE BADEMJAN",
                description:
                    "Fein passierte, gebratene Melanzani, verfeinert mit Minze, Knoblauch & persischem Sauerrahm, serviert mit Hausbrot (A,G)",
                price: 7.1,
            },
            {
                title: "KUKU SABZI",
                description:
                    "Persisches Omelett aus frischen Kräutern, Ei, Mohnteigblätter, Berberitzen & geriebene Walnüssen, serviert mit Hausbrot (A,C,G,N)",
                price: 6.5,
            },
            {
                title: "HUMMUS",
                description:
                    "Kichererbsenpüree mit Tahin & Olivenöl (H,N) serviert mit Hausbrot",
                price: 5.2,
            },
            {
                title: "ZEYTOON PARVARDE",
                description:
                    "Grüne Oliven in einer Granatapfel-Walnussmarinade (H)",
                price: 6.8,
            },
        ],
    },
    {
        _id: "3",
        title: "SPECIALS",
        banner: MEDIAS.menuSpecialsBanner,
        items: [
            {
                title: "VORSPEISENTELLER FÜR 2",
                description: "3 Vorspeisen nach Wahl",
                price: 15.9,
            },
            {
                title: "VORSPEISENTELLER FÜR 3-4",
                description: "4 Vorspeisen nach Wahl",
                price: 25.8,
            },
            {
                title: "TORANJ PLATTE (FÜR 2 PERSONEN)",
                description:
                    "Grillplatte für 2 Personen, bestehend aus - 2 Spieß Kubideh - 1 Spieß Chenjeh (Rindfilet) - 1 Spieß Juje (Hühnerfilet) serviert mit zwei Portionen Safran-Reis",
                price: 49.8,
            },
        ],
    },
];

export const GALLERY: IGallery[] = [
    {
        _id: "1",
        title: "Venice festival",
        date: "2024",
        image: "https://static.tildacdn.com/tild3433-3039-4362-b531-303762613538/max1232617_A_person_.jpg",
        subtitle: "Musicians from all over world",
    },
    {
        _id: "2",
        title: "Venice festival",
        date: "2024",
        image: "https://static.tildacdn.com/tild3838-6563-4336-b463-663432363563/max1232617_A_closeup.jpg",
        subtitle: "Musicians from all over world",
    },
    {
        _id: "3",
        title: "Venice festival",
        date: "2024",
        image: "https://static.tildacdn.com/tild3266-3830-4637-b234-363366343563/max1232617_A_row_of_.jpg",
        subtitle: "Musicians from all over world",
    },
];

export const ContactUsData = [
    {
        label: "contacts-section.address",
        link: "https://www.google.com/maps/place/Toranj+Restaurant/@48.2039329,16.3850383,21z/data=!4m6!3m5!1s0x476d07f3e0d495ef:0x97c0244050a1b56e!8m2!3d48.2038242!4d16.3852665!16s%2Fg%2F11t9d471fj?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D",
        value: "Ungargasse 6 / Ecke Münzgasse, 1030 Wien",
    },
    {
        label: "contacts-section.phone",
        link: "tel:+4319978097",
        value: "+4319978097",
    },
    {
        label: "contacts-section.email",
        link: "mailto:info@toranj.at",
        value: "info@toranj.at",
    },
];
