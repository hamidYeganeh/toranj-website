// components
import { Button } from "@/components/kit";
// icons
import { User, UserCheck } from "lucide-react";

export const MainLayoutHeaderAccount = () => {
    const isAuthenticated = true;
    return (
        <>
            <Button
                variant={"light"}
                startIcon={isAuthenticated ? <UserCheck /> : <User />}
            >
                {"ورود"}
            </Button>
        </>
    );
};
