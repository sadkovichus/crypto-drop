import { ReactNode } from 'react';
import { TelegramUserProvider } from './telegramUserProvider';

type Props = { children: ReactNode };

export const Providers = ({ children }: Props) => {
  return <TelegramUserProvider>{children}</TelegramUserProvider>;
};
