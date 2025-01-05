// components
import { Container, Divider } from "@/components/kit";
import { MainLayoutHeaderLogo } from "./MainLayoutHeaderLogo";
import { MainLayoutHeaderSearch } from "./MainLayoutHeaderSearch";
import { MainLayoutHeaderAccount } from "./MainLayoutHeaderAccount";
import { MainLayoutHeaderBasket } from "./MainLayoutHeaderBasket";

export const MainLayoutHeader = () => {
    return (
        <Container>
            <div className="flex w-full items-center gap-2">
                <MainLayoutHeaderLogo />
                <MainLayoutHeaderSearch />

                <div className="flex-1" />

                <MainLayoutHeaderAccount />
                <Divider orientation={"vertical"} />
                <MainLayoutHeaderBasket />
            </div>
        </Container>
    );
};
