// components
import {
    NavigationListItem,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuTrigger,
} from "@/components/kit/NavigationMenu";
// types
import type { INavbarItem } from "@/constants/navbar-config";
import type { FC } from "react";

export const MainLayoutNavbarHorizontalItem: FC<{ navbarItem: INavbarItem }> = (
    props,
) => {
    const { navbarItem } = props;
    return (
        <NavigationMenuItem>
            <NavigationMenuTrigger>{navbarItem.title}</NavigationMenuTrigger>
            <NavigationMenuContent>
                <ul className="grid w-[var(--screen-xl)] gap-3 p-4 lg:grid-cols-[.75fr_1fr]">
                    {navbarItem.children?.map((navbarSubItem, index) => (
                        <NavigationListItem
                            key={index}
                            href={navbarSubItem.path}
                            title={navbarSubItem.title}
                        />
                    ))}
                </ul>
            </NavigationMenuContent>
        </NavigationMenuItem>
    );
};
