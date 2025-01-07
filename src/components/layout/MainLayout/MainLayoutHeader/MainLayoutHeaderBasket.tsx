// components
import { Badge, IconButton } from "@/components/kit";
// icons
import { FaBasketShopping } from "react-icons/fa6";

export const MainLayoutHeaderBasket = () => {
    return (
        <IconButton variant={"light"} color="primary">
            <Badge
                position={"bottom-right"}
                badgeContent={8}
                variant={"primary"}
            >
                <FaBasketShopping />
            </Badge>
        </IconButton>
    );
};
