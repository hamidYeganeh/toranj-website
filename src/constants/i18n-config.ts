export enum ILocales {
    fa = "fa",
    en = "en",
}
export type ILanguageDirection = "rtl" | "ltr";
export interface ILanguage {
    locale: ILocales;
    dir: ILanguageDirection;
    name: string;
}
export const Languages: ILanguage[] = [
    {
        locale: ILocales.fa,
        name: "فارسی",
        dir: "rtl",
    },
    {
        locale: ILocales.en,
        name: "English",
        dir: "ltr",
    },
];
export const DEFAULT_LANGUAGE: ILocales = ILocales.en;
