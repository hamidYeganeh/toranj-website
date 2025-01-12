"use client";

// libs
import { useAppDispatch } from "@/hooks/useRedux";
import { initialize } from "@/redux/slices/auth.slice";
// types
import { type FC, type PropsWithChildren, useEffect } from "react";


export const AuthProvider: FC<PropsWithChildren> = (props) => {
    const { children } = props;

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(initialize());
    }, [dispatch]);

    return <>{children}</>;
};
