import { TelegramUserContext } from '@app/providers/telegramUserProvider'
import { TelegramUserContextType } from '@shared/types/user'
import { useContext } from 'react'

export const useTelegramUser = (): TelegramUserContextType => {
	const context = useContext(TelegramUserContext)
	if (!context) {
		throw new Error('useTelegramUser must be used within a TelegramUserProvider')
	}
	return context
}
