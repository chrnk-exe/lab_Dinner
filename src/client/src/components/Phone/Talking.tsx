import React, { type FC, useState } from 'react';
import { Button, Avatar, Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Typewriter from '../Typewriter';
import shuffleArray from '../../utils/shuffleArray';

type Props = {
	step: number;
	handleCallOff(): void;
	incrementResult(): void;
};

const Talking: FC<Props> = ({ step, handleCallOff, incrementResult }) => {
	const { t } = useTranslation('scripts');
	const [replicas] = useState(
		(t('scripts', { returnObjects: true }) as Script[])[step - 1].replicas,
	);
	const [replicaStep, setReplica] = useState(0);

	const nextReplica = () => setReplica(prev => prev + 1);

	//YandereDev mode
	const answerHandler = (answerIsTrue: boolean) => {
		if (step === 4) {
			answerIsTrue && incrementResult();
			handleCallOff();
			return;
		}
		if (step === 5 && !answerIsTrue) {
			handleCallOff();
		}
		if (step === 5 && replicaStep === 1) {
			answerIsTrue && incrementResult();
			handleCallOff();
			return;
		}
		nextReplica();
		if (step === 1 && !answerIsTrue) {
			setReplica(replicas.length - 1);
			setTimeout(handleCallOff, 1500);
		}
		if (step === 1 && answerIsTrue && replicaStep === 2) {
			incrementResult();
			handleCallOff();
		}
		if (step === 2 && answerIsTrue) {
			incrementResult();
			handleCallOff();
		}
		if (step === 2 && !answerIsTrue) {
			setTimeout(handleCallOff, 3000);
		}
		if (step === 3 && !answerIsTrue) {
			handleCallOff();
		}
		if (step === 3 && replicaStep === 1 && answerIsTrue) {
			incrementResult();
			handleCallOff();
		} else if (step === 3 && replicaStep === 1) {
			handleCallOff();
		}
	};

	return (
		<Box
			display="flex"
			flexDirection="column"
			justifyContent="space-between"
			sx={{ height: '100%', width: '100%' }}>
			<Box
				display="flex"
				flexDirection="column"
				justifyContent="center"
				alignItems="center"
				gap={2}
				padding={3}>
				<Avatar alt="avatar" />
				<Typography variant="h5" sx={{ color: '#FFFFF1' }}>
					{
						(t('scripts', { returnObjects: true }) as Script[])[
							step - 1
						]['number']
					}
				</Typography>
			</Box>
			<Box
				display="flex"
				justifyContent="flex-start"
				alignItems="flex-start"
				padding={2}
				gap={2}
				sx={{
					textAlign: 'left',
				}}>
				<Avatar alt="avatar" />
				<Typography
					variant="h6"
					sx={{
						position: 'relative',
						bgcolor: '#FFFFF1',
						borderRadius: '0 20px 20px 20px',
						p: 2,
						mt: 2,
						zIndex: '1',
						'&:before': {
							content: '\'\'',
							position: 'absolute',
							left: '-12px',
							top: '0px',
							border: '15px solid transparent',
							borderRight: '10px solid #FFFFFF',
							borderTop: '16px solid #FFFFFF',
							zIndex: '0',
						},
					}}>
					<Typewriter speed={50}>
						{
							(t('scripts', { returnObjects: true }) as Script[])[
								step - 1
							].replicas[replicaStep].message
						}
					</Typewriter>
				</Typography>
			</Box>
			<Box
				display="flex"
				flexDirection="column"
				justifyContent="center"
				alignItems="flex-start"
				gap={2}
				padding={2}>
				<Typography variant="h6" sx={{ color: '#FFFFF1' }}>
					{((t('scripts', { returnObjects: true }) as Script[])[
						step - 1
					].replicas[replicaStep].answers as Answer[])?.length > 0
						? t('variants')
						: ''}
				</Typography>
				{(t('scripts', { returnObjects: true }) as Script[])[step - 1]
					.replicas[replicaStep].answers
					? shuffleArray(
							(t('scripts', { returnObjects: true }) as Script[])[
								step - 1
							].replicas[replicaStep]?.answers as Answer[],
						// eslint-disable-next-line no-mixed-spaces-and-tabs
					  )?.map(
						(answer, index) => (
							<Button
								key={index}
								onClick={() =>
									answerHandler(answer.correct)
								}
								variant="contained"
								color="secondary"
								sx={{
									bgcolor: '#FFFFF1',
									color: '#000',
									'&:hover': {
										bgcolor: 'lightgrey',
									},
									width: '100%',
								}}>
								{answer.text}
							</Button>
						),
						// eslint-disable-next-line no-mixed-spaces-and-tabs
					  )
					: null}
			</Box>
		</Box>
	);
};

export default Talking;
