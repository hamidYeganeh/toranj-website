"use client";

// components
import { Avatar, Button } from "@/components/kit";
import { AvatarImage } from "@/components/kit/Avatar";
import { RouterPaths } from "@/constants/router-config";
import { useAuthSlice } from "@/hooks/useRedux";
// icons
import { User } from "lucide-react";

export const MainLayoutHeaderAccount = () => {
    const { isAuthenticated, user } = useAuthSlice();

    return (
        <>
            {isAuthenticated ? (
                <Button variant={"light"} href={RouterPaths.dashboard.root}>
                    <Avatar className="size-6 rounded-full">
                        <AvatarImage src={user?.image} />
                    </Avatar>
                    {user?.username}
                </Button>
            ) : (
                <Button
                    href={RouterPaths.auth.login}
                    variant={"light"}
                    startIcon={<User />}
                >
                    {"ورود"}
                </Button>
            )}
        </>
    );
};
