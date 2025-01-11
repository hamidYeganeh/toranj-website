"use client";

// libs
import { Provider } from "react-redux";
// configs
import { persistor, Store } from "@/lib/store";
// types
import type { FC, PropsWithChildren } from "react";
import { PersistGate } from "redux-persist/integration/react";

interface IReduxProvider extends PropsWithChildren {}

export const ReduxProvider: FC<IReduxProvider> = (props) => {
    const { children } = props;
    return (
        <Provider store={Store}>
            <PersistGate loading={null} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    );
};
