import React, { type FC, useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
// import ClickAwayListener from '@mui/material/ClickAwayListener';
import { useTranslation } from 'react-i18next';

type Props = {
	handleCallOn(): void;
	nextStep(): void;
};

const Finish: FC<Props> = ({ handleCallOn, nextStep }) => {
	const { t } = useTranslation();
	const [timer, setTime] = useState(5);

	// const onClickAway = () => {
	// 	nextStep();
	// 	handleCallOn();
	// };

	useEffect(() => {
		let timeleft = timer;
		const MyTimer = setInterval(() => {
			timeleft -= 1;
			if (timeleft === 0) {
				clearInterval(MyTimer);
				nextStep();
				handleCallOn();
			}
			setTime(timeleft);
		}, 1000);
		return () => clearInterval(MyTimer);
	}, []);

	return (
		// <ClickAwayListener onClickAway={onClickAway}>
		<Box
			display="flex"
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
			gap={2}>
			<Typography variant="h4" sx={{ color: '#FFFFF1' }}>
				{t('talk_ended')}
			</Typography>
			<Typography variant="h4" sx={{ color: '#FFFFF1' }}>
				{t('next_call') + timer.toString()}
			</Typography>
		</Box>
		// </ClickAwayListener>
	);
};

export default Finish;
