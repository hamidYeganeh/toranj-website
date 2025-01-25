export interface INavbarItem {
    title: string;
    path?: string;
    children?: INavbarItem[];
}

export const getNavbarItems: () => INavbarItem[] = () => [
    {
        title: "navbar.about-us",
        path: "#about-us",
    },
    {
        title: "navbar.contact-us",
        path: "#contact-us",
    },
    {
        title: "navbar.menu",
        path: "#menu",
    },
    {
        title: "navbar.story",
        path: "#story",
    },
];
