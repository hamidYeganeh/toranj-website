import { Container } from "@/components/kit";
import {
    NavigationListItem,
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/kit/NavigationMenu";
import { getNavbarItems } from "@/constants/navbar-config";
import { MainLayoutNavbarHorizontalItem } from "./MainLayoutNavbarHorizontalItem";

export const MainLayoutNavbarHorizontal = () => {
    const navbar = getNavbarItems();
    return (
        <Container>
            <nav className="mb-2 flex h-12 w-full items-center rounded p-4">
                <NavigationMenu>
                    <NavigationMenuList>
                        {navbar.map((navbarItem, index) => (
                            <MainLayoutNavbarHorizontalItem
                                key={index}
                                navbarItem={navbarItem}
                            />
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </nav>
        </Container>
    );
};
