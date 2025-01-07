export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export enum API_METHODS {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    PATCH = "PATCH",
    DELETE = "DELETE",
}
export const Endpoints = {
    auth: {
        login: "/auth/login",
    },
};
