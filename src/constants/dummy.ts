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
                image: "/assets/images/menu/menu-kubideh.jpg",
            },
            {
                title: "KABAB-BARG",
                description:
                    "Zartes Lammfilet vom Grill serviert mit Basmati-Reis oder Pommes",
                price: 17.9,
                image: "/assets/images/menu/menu-barg.jpg",
            },
            {
                title: "KABAB-SHISHLIK",
                description:
                    "Gegrillte Lammkoteletts serviert mit Basmati-Reis oder Pommes",
                price: 18.9,
                image: "/assets/images/menu/menu-shishlik.jpg",
            },
            {
                title: "JUJEH-TORSH",
                description:
                    "Fein mariniertes Hühnerfilet vom Grill, eingelegt in Granatapfelsauce & persischen Limetten (C,G)",
                price: 19.3,
                image: "/assets/images/menu/menu-jujetorsh.jpg",
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
                image: "/assets/images/menu/menu-mirzaghasemi.jpg",
            },
            {
                title: "KASHKE BADEMJAN",
                description:
                    "Fein passierte, gebratene Melanzani, verfeinert mit Minze, Knoblauch & persischem Sauerrahm, serviert mit Hausbrot (A,G)",
                price: 7.1,
                image: "/assets/images/menu/menu-kashkbademjan.jpg",
            },
            {
                title: "KUKU SABZI",
                description:
                    "Persisches Omelett aus frischen Kräutern, Ei, Mohnteigblätter, Berberitzen & geriebene Walnüssen, serviert mit Hausbrot (A,C,G,N)",
                price: 6.5,
                image: "/assets/images/menu/menu-kukusabzi.jpg",
            },
            {
                title: "HUMMUS",
                description:
                    "Kichererbsenpüree mit Tahin & Olivenöl (H,N) serviert mit Hausbrot",
                price: 5.2,
                image: "/assets/images/menu/menu-hummus.jpg",
            },
            {
                title: "ZEYTOON PARVARDE",
                description:
                    "Grüne Oliven in einer Granatapfel-Walnussmarinade (H)",
                price: 6.8,
                image: "/assets/images/menu/menu-zeytoonparvardeh.jpg",
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
                image: "/assets/images/menu/menu-starter.jpg",
            },
            {
                title: "VORSPEISENTELLER FÜR 3-4",
                description: "4 Vorspeisen nach Wahl",
                price: 25.8,
                image: "/assets/images/menu/menu-starter.jpg",
            },
            {
                title: "TORANJ PLATTE (FÜR 2 PERSONEN)",
                description:
                    "Grillplatte für 2 Personen, bestehend aus - 2 Spieß Kubideh - 1 Spieß Chenjeh (Rindfilet) - 1 Spieß Juje (Hühnerfilet) serviert mit zwei Portionen Safran-Reis",
                price: 49.8,
                image: "/assets/images/menu/menu-starter.jpg",
            },
        ],
    },
];

export const GALLERY: IGallery[] = [
    {
        _id: "1",
        title: "In der persischen Küche sind Gewürze mehr als nur Zutaten – sie erzählen Geschichten und bringen jedes Gericht zum Leben. Safran, das „rote Gold“, ist das wertvollste Gewürz und verleiht unseren Gerichten nicht nur eine goldene Farbe, sondern auch einen unverwechselbaren Geschmack. 🌟",
        date: "2024",
        image: "/assets/images/instagramPost1.jpg",
        subtitle:
            "#toranjwien #safran #persischeküche #gewürze #aromen #wienereats #instafood #persianfood #persischespezialitäten #viennaeats #orientalischeküch",
        link: "https://www.instagram.com/p/DGyF1L8sGP6/",
    },
    {
        _id: "2",
        title: "Unser Salat kombiniert knackiges Gemüse, aromatische Kräuter und feine orientalische Aromen – leicht, erfrischend und einfach köstlich! Perfekt als Vorspeise oder leichte Mahlzeit. 🍅✨",
        date: "2024",
        image: "/assets/images/instagramPost2.jpg",
        subtitle:
            " #healthyfood #wienereats #leichtundlecker #persianfood #restaurantwien #persischespezialitäten #viennaeats #eventlocation #foodie #instafood",
        link: "https://www.instagram.com/p/DGn48YuMuU6/",
    },
    {
        _id: "3",
        title: "🍹✨ Sharbat Safran Chia – Ein erfrischendes Geschmackserlebnis aus Persien!",
        date: "2024",
        image: "/assets/images/instagramPost3.jpg",
        subtitle:
            "#toranjwien #sharbatsafranchia #persischegetränke #wienereats #instadrink #gesundgenießen #exotisch",
        link: "https://www.instagram.com/p/DGdl_lisCaZ/",
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
