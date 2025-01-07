export type TelegramUserType = {
	id: number
	first_name: string
	last_name?: string
	username?: string
	language_code?: string
	is_premium?: boolean
	photo_url?: string
}

export type TelegramUserContextType = {
	user: TelegramUserType | null;
	isLoading: boolean;
	error: Error | null
};