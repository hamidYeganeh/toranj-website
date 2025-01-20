// // configs
// import { Api, Endpoints } from "@/constants/api-config";
// // types
// import type { IProduct } from "@/types/general.types";

// export const getProducts: () => Promise<IProducts> = async () => {
//     try {
//         const response = await Api(Endpoints.products.list);
//         return response.data;
//     } catch {
//         return { products: [], limit: 0, skip: 0, total: 0 };
//     }
// };
// export const getProduct: (
//     args: IProductQuery,
// ) => Promise<IProduct | null> = async (args) => {
//     try {
//         const response = await Api(`${Endpoints.products.list}/${args.id}`);
//         return response.data;
//     } catch {
//         return null;
//     }
// };
// export const getProductsCategories: () => Promise<string[]> = async () => {
//     try {
//         const response = await Api(Endpoints.products.categories);
//         return response.data;
//     } catch {
//         return [];
//     }
// };
// export const getProductsByCategories: (
//     args: IProductQuery,
// ) => Promise<IProducts> = async (args) => {
//     try {
//         const response = await Api(
//             `${Endpoints.products.byCategories}/${args.category}`,
//         );
//         return response.data;
//     } catch {
//         return { products: [], limit: 0, skip: 0, total: 0 };
//     }
// };
