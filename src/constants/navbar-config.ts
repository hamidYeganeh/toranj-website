import { RouterPaths } from "./router-config";

export interface INavbarItem {
    title: string;
    path?: string;
    banner?: string;
    children?: INavbarItem[];
}

export const getNavbarItems: () => INavbarItem[] = () => [
    {
        title: "Dashboard",
        path: RouterPaths.dashboard.root,
        children: [
            { title: "Users", path: RouterPaths.dashboard.user.list },
            { title: "Blogs", path: RouterPaths.dashboard.blog.list },
        ],
    },
];
