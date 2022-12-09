import React, {Suspense} from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router';
import Login from './Login';
import App from './App';
import NotFound from './NotFound';
import Loader from './Loader';
import { useAppSelector } from '../store/hooks';
import Dashboard from './Dashboard';
import Contacts from './Contacts';

const AppRoutes = () => {
	const user = useAppSelector(state => state.user);

	return (
		<Routes>
			<Route
				path="/"
				element={
					user.email ? (
						<Navigate to={'/auth'} />
					) : (
						<Navigate to={'/app'} />
					)
				}
			/>
			<Route path={'/auth'} element={<Login />} />

			<Route
				path={'/app'}
				element={
					user.email ? (
						<Suspense fallback={<Loader />}>
							<Dashboard>
								<Outlet />
							</Dashboard>
						</Suspense>

					) : (
						<Navigate to={'/auth'} />
					)
				}>
				<Route index element={<App />} />
				<Route path={'/app/contacts'} element={<Contacts />} />
			</Route>

			{/* Not found page */}
			<Route
				path="*"
				element={<NotFound redirToApp={user.email ? true : false} />}
			/>
		</Routes>
	);
};

export default AppRoutes;
