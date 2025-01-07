export { }
import { TelegramUserType } from './src/shared/types'

declare global {
	interface Window {
		Telegram: {
			WebApp: {
				initDataUnsafe: {
					user: TelegramUserType
				}
				ready: () => void
				sendData: (data: string) => void
				MainButton: {
					setText: (text: string) => void
					show: () => void
					hide: () => void
					onClick: (callback: () => void) => void
				}
			}
		}
	}
}