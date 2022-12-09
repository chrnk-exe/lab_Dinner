import React from 'react';

import classes from '../styles/Login.module.sass';
import { Paper, Button, Box } from '@mui/material';
import { useAppDispatch } from '../store/hooks';
import { setStarted } from '../store/slices/labSlice';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

import ChangeLanguageButton from './ChangeLanguageButton';

const Login = () => {
	const navigate = useNavigate();
	const { t } = useTranslation();
	const dispatch = useAppDispatch();


	const onStartDinner = () => {
		dispatch(setStarted());
		navigate('/app');
	};

	return (
		<Box
			sx={{
				bgcolor: 'primary.light',
			}}
			className={classes.login}>
			<ChangeLanguageButton
				sx={{
					position: 'absolute' as const,
					top: 10,
					left: 20,
				}}
			/>
			<Paper className={classes.Paper} elevation={5}>
				<Button
					fullWidth
					variant="outlined"
					sx={{ p: 3, fontSize: '1.2em' }}
					onClick={onStartDinner}>
					{t('Lets_Dinner')}
				</Button>
			</Paper>
		</Box>
	);
};

export default Login;
