export function apiHelper(url: string, queries: any) {
    let filterParams = {};
    Object.keys(queries).forEach((key) => {
        filterParams = {
            ...filterParams,
            ...(queries[key] ? { [key]: queries[key] } : {}),
        };
    });
    const joinFilters = Object.entries(filterParams).join("&");
    const finalFilters = joinFilters.replaceAll(",", "=");

    return finalFilters !== "" ? `${url}?${finalFilters}` : url;
}
