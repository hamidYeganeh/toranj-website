// components
import { Badge, IconButton } from "@/components/kit";
// icons
import { FaBasketShopping } from "react-icons/fa6";

export const MainLayoutHeaderBasket = () => {
    return (
        <IconButton variant={"light"} color="success">
            <Badge
                position={"bottom-right"}
                badgeContent={8}
                variant={"success"}
            >
                <FaBasketShopping />
            </Badge>
        </IconButton>
    );
};
