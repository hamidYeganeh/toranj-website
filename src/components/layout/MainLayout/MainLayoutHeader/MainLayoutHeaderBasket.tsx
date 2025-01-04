// components
import { IconButton } from "@/components/kit";
// icons
import { FaBasketShopping } from "react-icons/fa6";

export const MainLayoutHeaderBasket = () => {
    return (
        <div>
            <IconButton variant={"outlined"} color="secondary">
                <FaBasketShopping />
            </IconButton>
        </div>
    );
};
