import { useTelegramUser } from '@shared/hooks/useTelegramUser'
import s from './MainLayout.module.scss';
import { useEffect } from 'react'

export const MainLayout = () => {
	const { user, isLoading, error } = useTelegramUser();

	if (isLoading) return <div>Loading...</div>
	if (error) return <div>Error: {error.message}</div>

	useEffect(() => {
		console.log(user);
	}, [user])

  return <div className={s.layout}>Main Layout</div>;
};
