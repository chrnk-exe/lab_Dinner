import React, {Suspense} from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router';
import Login from './Login';
import App from './App';
import NotFound from './NotFound';
import Loader from './Loader';
import { useAppSelector } from '../store/hooks';
import Dashboard from './Dashboard';
import WifiList from './WifiList';

const AppRoutes = () => {
	const isStarted = useAppSelector(state => state.lab);

	return (
		<Routes>
			<Route
				path="/"
				element={
					isStarted ? (
						<Navigate to={'/start'} />
					) : (
						<Navigate to={'/app'} />
					)
				}
			/>
			<Route path={'/start'} element={<Login />} />

			<Route
				path={'/app'}
				element={
					isStarted ? (
						<Suspense fallback={<Loader />}>
							<Dashboard>
								<Outlet />
							</Dashboard>
						</Suspense>

					) : (
						<Navigate to={'/start'} />
					)
				}>
				<Route index element={<App />} />
				<Route path={'/app/wifi'} element={<WifiList />} />
			</Route>

			{/* Not found page */}
			<Route
				path="*"
				element={<NotFound redirToApp={isStarted} />}
			/>
		</Routes>
	);
};

export default AppRoutes;
