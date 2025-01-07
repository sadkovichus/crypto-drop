import { ReactNode } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { DynamicMetaProvider } from './dynamicMetaProvider';
import { TelegramUserProvider } from './telegramUserProvider'

type Props = { children: ReactNode };

export const Providers = ({ children }: Props) => {
  return (
    <TelegramUserProvider>
      <DynamicMetaProvider>
        <HelmetProvider>{children}</HelmetProvider>
      </DynamicMetaProvider>
    </TelegramUserProvider>
  );
};
