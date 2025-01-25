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
        title: "Breakfast with the aromas of fresh coffee",
        image: MEDIAS.aboutUsImage2,
    },
    {
        title: "Dinner in a romantic settingSO MUUUCH",
        image: MEDIAS.aboutUsImage3,
    },
];

export const MENU_ITEMS = [
    {
        _id: "1",
        title: "Salads",
        startPrice: 10,
        banner: MEDIAS.aboutUsImage2,
        items: [
            { title: "Caprese Salads", price: 23 },
            { title: "Caprese Salads", price: 23 },
            { title: "Caprese Salads", price: 23 },
            { title: "Caprese Salads", price: 23 },
            { title: "Caprese Salads", price: 23 },
            { title: "Caprese Salads", price: 23 },
            { title: "Caprese Salads", price: 23 },
            { title: "Caprese Salads", price: 23 },
            { title: "Caprese Salads", price: 23 },
            { title: "Caprese Salads", price: 23 },
            { title: "Caprese Salads", price: 23 },
            { title: "Caprese Salads", price: 23 },
            { title: "Caprese Salads", price: 23 },
            { title: "Caprese Salads", price: 23 },
            { title: "Caprese Salads", price: 23 },
            { title: "Caprese Salads", price: 23 },
            { title: "Caprese Salads", price: 23 },
            { title: "Caprese Salads", price: 23 },
            { title: "Caprese Salads", price: 23 },
            { title: "Caprese Salads", price: 23 },
            { title: "Caprese Salads", price: 23 },
            { title: "Caprese Salads", price: 23 },
            { title: "Caprese Salads", price: 23 },
        ],
    },
    {
        _id: "2",
        title: "Hot Dishes",
        startPrice: 10,
        banner: MEDIAS.aboutUsImage2,
        items: [
            { title: "Caprese Hot dishes", price: 23 },
            { title: "Caprese Hot dishes", price: 23 },
            { title: "Caprese Hot dishes", price: 23 },
            { title: "Caprese Hot dishes", price: 23 },
            { title: "Caprese Hot dishes", price: 23 },
            { title: "Caprese Hot dishes", price: 23 },
            { title: "Caprese Hot dishes", price: 23 },
        ],
    },
    {
        _id: "3",
        title: "Dessert",
        startPrice: 10,
        banner: MEDIAS.aboutUsImage2,
        items: [
            { title: "Caprese Dessert", price: 23 },
            { title: "Caprese Dessert", price: 23 },
            { title: "Caprese Dessert", price: 23 },
            { title: "Caprese Dessert", price: 23 },
            { title: "Caprese Dessert", price: 23 },
            { title: "Caprese Dessert", price: 23 },
            { title: "Caprese Dessert", price: 23 },
        ],
    },
    {
        _id: "4",
        title: "Beverages",
        startPrice: 10,
        banner: MEDIAS.aboutUsImage2,
        items: [
            { title: "Caprese Beverages", price: 23 },
            { title: "Caprese Beverages", price: 23 },
            { title: "Caprese Beverages", price: 23 },
            { title: "Caprese Beverages", price: 23 },
            { title: "Caprese Beverages", price: 23 },
            { title: "Caprese Beverages", price: 23 },
            { title: "Caprese Beverages", price: 23 },
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
        link: "tel:",
        value: "USA - Chicago",
    },
    { label: "contacts-section.phone", link: "tel:", value: "1234567" },
    { label: "contacts-section.email", link: "tel:", value: "email@test.com" },
];
