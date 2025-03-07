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

export const RESERVE_LINK = 'https://www.google.com/maps/reserve/v/dine/c/Ab8liAj2N7Q?source=pa&opi=89978449&hl=en-IR&gei=jjDKZ66KC8-ci-gP76WH-Ak&sourceurl=https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3Dtoranj%2Brestaurant%2Baustria%26sca_esv%3D6032389a2ad49ca8%26ei%3DhTDKZ4bhLfCoi-gPstGOkA8%26oq%3Dtoranj%2Brestaurant%2Bau%26gs_lp%3DEgxnd3Mtd2l6LXNlcnAiFHRvcmFuaiByZXN0YXVyYW50IGF1KgIIAjIFECEYoAEyBRAhGKABMgUQIRigAUiXLlAUWIAccAJ4AZABAJgBwAKgAe0HqgEHMC4xLjIuMbgBA8gBAPgBAZgCBqAChgjCAgoQABiwAxjWBBhHwgINEAAYgAQYsAMYQxiKBcICGRAuGIAEGLADGEMYxwEYyAMYigUYrwHYAQHCAgUQABiABMICBhAAGBYYHpgDAIgGAZAGC7oGBAgBGAiSBwcyLjEuMi4xoAf0EQ%26sclient%3Dgws-wiz-serp&ihs=5'
