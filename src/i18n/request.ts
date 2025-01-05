// configs
import {
    DEFAULT_LANGUAGE,
    ILanguageDirection,
    ILocales,
    Languages,
} from "@/constants/i18n-config";
// libs
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
    const locale = DEFAULT_LANGUAGE;

    return {
        locale,
        messages: (await import(`./locales/${locale}.json`)).default,
    };
});
export function getLanguageDirection(
    locale: ILocales | string,
): ILanguageDirection {
    return Languages.find((lang) => lang.locale === locale)?.dir || "ltr";
}
