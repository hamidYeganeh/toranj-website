export interface INavbarItem {
    title: string;
    path?: string;
    children?: INavbarItem[];
}

export const getNavbarItems: () => INavbarItem[] = () => [
    {
        title: "navbar.about-us",
        path: "#",
    },
    {
        title: "navbar.contact-us",
        path: "#",
    },
    {
        title: "navbar.menu",
        path: "#",
    },
    {
        title: "navbar.story",
        path: "#",
    },
];
