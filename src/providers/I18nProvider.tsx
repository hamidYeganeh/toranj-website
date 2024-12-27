// types
import type { AbstractIntlMessages } from "next-intl";
import type { FC, PropsWithChildren } from "react";
// libs
import { NextIntlClientProvider } from "next-intl";

export interface I18nProviderProps extends PropsWithChildren {
  messages: AbstractIntlMessages;
}

export const I18nProvider: FC<I18nProviderProps> = (props) => {
  const { messages, children } = props;
  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
};
