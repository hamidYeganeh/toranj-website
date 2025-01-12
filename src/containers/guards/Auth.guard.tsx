"use client";

// libs
import { redirect, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useAppDispatch, useAuthSlice } from "@/hooks/useRedux";
// reducers
import { initialize } from "@/redux/slices/auth.slice";
// types
import type { FC, PropsWithChildren } from "react";
// configs
import { RouterPaths } from "@/constants/router-config";

const CheckAuth: FC<PropsWithChildren> = ({ children }) => {
    const pathname = usePathname();
    const { isAuthenticated } = useAuthSlice();
    const [initialized, setInitialized] = useState(false);
    const [requestedPath, setRequestedPath] = useState<string | null>(null);

    useEffect(() => {
        if (initialized && !isAuthenticated) {
            if (pathname !== requestedPath) {
                setRequestedPath(pathname);
            }
            redirect(RouterPaths.auth.login);
        }
    }, [initialized, isAuthenticated, pathname, requestedPath]);

    useEffect(() => {
        if (initialized && requestedPath && pathname !== requestedPath) {
            setRequestedPath(null);
            redirect(requestedPath);
        }
    }, [initialized, requestedPath, pathname]);

    useEffect(() => {
        if (initialized) {
            return;
        }
        setInitialized(true);
    }, [initialized]);

    if (!initialized) {
        return <h1>Loading...</h1>;
    }

    return <>{children}</>;
};

export const AuthGuard: FC<PropsWithChildren> = ({ children }) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(initialize());
    }, [dispatch]);

    return <CheckAuth>{children}</CheckAuth>;
};
