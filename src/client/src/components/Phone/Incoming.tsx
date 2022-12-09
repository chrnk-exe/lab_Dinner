import React, { type FC } from 'react';
import {Box, Typography, IconButton} from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import {useTranslation} from 'react-i18next';
import classes from '../../styles/Scripts.module.sass';


type Props = {
    step: number
    handleCallPending(): void
}

const Incoming: FC<Props> = ({step, handleCallPending}) => {
	const {t} = useTranslation('scripts');

	return (
		<React.Fragment>
			<Box>
				<Typography variant="h3" sx={{ color: '#FFFFF1' }}>
					{t('call')}
				</Typography>
				<Typography variant="h5" sx={{ color: '#FFFFF1' }}>
					{(t('scripts', {returnObjects: true}) as Script[])[step-1]['number']}
				</Typography>
			</Box>
			<Box>
				<IconButton
					className={classes.buttonPulseAnimation}
					onClick={handleCallPending}
					sx={{
						width: '100px',
						height: '100px',
						bgcolor: '#00FF00',
						'&:hover': {
							bgcolor: '#00FF00',
						},
					}}>
					<CallIcon sx={{ fontSize: '60px' }} htmlColor="#FFFFFF" />
				</IconButton>
			</Box>
		</React.Fragment>
	);
};

export default Incoming;
