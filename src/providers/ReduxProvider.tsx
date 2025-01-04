"use client";

import { Store } from "@/lib/store";
import { FC, PropsWithChildren } from "react";
import { Provider } from "react-redux";

interface IReduxProvider extends PropsWithChildren {}

export const ReduxProvider: FC<IReduxProvider> = (props) => {
    const { children } = props;
    return <Provider store={Store}>{children}</Provider>;
};
