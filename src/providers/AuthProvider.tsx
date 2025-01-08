"use client";

import { useAppDispatch, useAuthSlice } from "@/hooks/useRedux";
import { initialize } from "@/redux/slices/auth.slice";
import { usePathname } from "next/navigation";
import { FC, PropsWithChildren, useEffect, useLayoutEffect } from "react";

interface IAuthProvider extends PropsWithChildren {}

export const AuthProvider: FC<IAuthProvider> = (props) => {
    const { children } = props;

    const dispatch = useAppDispatch();
    const pathname = usePathname();
    const { isAuthenticated, isInitialized, user } = useAuthSlice();

    useEffect(() => {
        console.log("#1");

        dispatch(initialize());
    }, [dispatch]);

    return <>{children}</>;
};
