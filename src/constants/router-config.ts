import { IProduct } from "@/types/products.types";

export const RouterPaths = {
    root: "/",
    auth: {
        root: "/auth",
        login: "/auth/login",
        signUp: "/auth/sign-up",
        forgetPassword: "/auth/forget-password",
    },
    dashboard: {
        root: "/dashboard",
        user: {
            list: "/dashboard/user/list",
            create: "/dashboard/user/create",
            edit: "/dashboard/user/edit",
            details: "/dashboard/user/details",
        },
        blog: {
            list: "/dashboard/blog/list",
            create: "/dashboard/blog/create",
            edit: "/dashboard/blog/edit",
            details: "/dashboard/blog/details",
        },
        product: {
            list: "/dashboard/product/list",
            create: "/dashboard/product/create",
            edit: "/dashboard/product/edit",
            details: "/dashboard/product/details",
        },
    },
    shop: {
        root: "/shop",
        detail: (id: IProduct["id"]) => `/shop/${id}`,
    },
};

export function productDetailRoute(id: IProduct["id"]) {
    return RouterPaths.shop.detail(id);
}
