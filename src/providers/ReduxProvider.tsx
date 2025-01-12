"use client";

// libs
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
// configs
import { persistor, Store } from "@/lib/store";
// types
import type { FC, PropsWithChildren } from "react";

export const ReduxProvider: FC<PropsWithChildren> = (props) => {
    const { children } = props;
    return (
        <Provider store={Store}>
            <PersistGate loading={null} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    );
};
