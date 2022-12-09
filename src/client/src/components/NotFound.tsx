import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router';
import { Link } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import classes from '../styles/NotFound.module.sass';

const NotFound = ({redirToApp} : {redirToApp: boolean}) => {
	const [timer, setTime] = useState(5);


	const startTimer = () => {
		let timeleft = timer;
		const MyTimer = setInterval(() => {
			timeleft -= 1;
			if(timeleft === 0)clearInterval(MyTimer);
			setTime(timeleft);
		}, 1000);
	};

	useEffect(() => {   
		startTimer();
	}, []);

	return (
		<div className={classes.notFoundPage}>
			<div>
				<CircularProgress size={140} color="primary" variant="determinate" value={timer * 20}/>
				<div className={classes.notFoundMessage}>Page not found. Redirect in: {timer} seconds</div>
				{
					timer === 0 ? <Navigate to={redirToApp ? '/' : '/'} replace/> : null
				}  
				<Link replace to={'/'}>Click here to redirect now</Link>                 
			</div>
		</div>
	);
};

export default NotFound;