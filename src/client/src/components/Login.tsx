import React, {useState } from 'react';
import classes from '../styles/Login.module.sass';
import { TextField } from '@mui/material';
import { Paper, Button, Link } from '@mui/material';
import { useNavigate } from 'react-router';
import { useAppDispatch } from '../store/hooks';
import TextFieldPassword from './TextFieldPassword';
import CallIcon from '@mui/icons-material/Call';
import { setUser } from '../store/slices/userSlice';

const Login = () => {
	const [user, setLoginUser] = useState<{email?:string, password?:string}>({
		email: undefined,
		password: undefined
	});

	const setUserEmail = (email: string) => setLoginUser(prev => ({...prev, email}));
	const setUserPassword = (password: string) => setLoginUser(prev => ({...prev, password}));

	const [error, setError] = useState(false);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const loginHandler = () => {
		if (
			user.email?.trim() === 'hacktory' &&
			user.password?.trim() === 'password'
		) {
			dispatch(setUser(user));
			window.sessionStorage.setItem('user', JSON.stringify(user));
			navigate('/app');
		} else {
			setError(true);
		}
	};	

	return (
		<div className={classes.login}>
			<Paper
				className={classes.Paper}
				elevation={5}>
				<form>
					<h2>
						<CallIcon
							sx={{ height: '40px', width: '40px' }}
						/>
						Telephony Web Service
					</h2>
					<TextField
						fullWidth
						value={user.email || ''}
						label={'Login'}
						required
						onChange={e => {
							setUserEmail(e.target.value);
							setError(false);
						}}
					/>
					<TextFieldPassword
						onChangeEventFunction={e => {
							setUserPassword(e.target.value);
							setError(false);
						}}
						required
						value={user.password || ''}
						error={error}
						helperText={error ? 'Incorrect login/password' : ''}
					/>
					<div className={classes.forgotPassword}>
						<Link href="#">Forgot password?</Link>
					</div>
					<Button
						fullWidth
						variant="contained"
						onClick={loginHandler}>
						Log in
					</Button>
				</form>
			</Paper>
		</div>
	);
};

export default Login;
