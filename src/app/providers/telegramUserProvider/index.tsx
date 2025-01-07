import { TelegramUserType } from '@shared/types';
import { TelegramUserContextType } from '@shared/types/user'
import { createContext, ReactNode, useEffect, useState } from 'react';

type TelegramWebApp = {
  Telegram: {
    WebApp: {
      initDataUnsafe: {
        user: TelegramUserType;
      };
    };
  }
}

export const TelegramUserContext = createContext<TelegramUserContextType | undefined>(undefined);

type Props = {
  children: ReactNode;
};

export const TelegramUserProvider = ({ children }: Props) => {
  const [user, setUser] = useState<TelegramUserType | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
		try {
			if ('Telegram' in window) {
				const telegram = (window as unknown as TelegramWebApp).Telegram;
				const user = telegram.WebApp.initDataUnsafe.user;
				setUser(user);
			}
		} catch (error) {
			setError(error as Error);
		} finally {
			setIsLoading(false);
		}

  }, []);

  return <TelegramUserContext.Provider value={{ user, isLoading, error }}>{children}</TelegramUserContext.Provider>;
};
