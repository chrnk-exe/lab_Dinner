import React, {type FC} from 'react';
import { Button, Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Typewriter from '../Typewriter';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {
	nextStep,
	setStage,
	decrementResult,
} from '../../store/slices/scriptSlice';

interface Props {
	time: string,
	subTime(subTime: number): void,
	isReversed: boolean
}

const Quest: FC<Props> = ({time, subTime, isReversed}) => {
	const { t } = useTranslation('scripts');
	const dispatch = useAppDispatch();
	const step = useAppSelector(state => state.script.step);

	const answerHandler = (answerIsTrue: boolean, diff?: number) => {
		if (!answerIsTrue) {
			dispatch(decrementResult());
		}
		if (diff) {
			subTime(diff);
		}
		dispatch(nextStep());
		dispatch(
			setStage(
				(t('scripts', { returnObjects: true }) as Script[])[step - 1]['nextStage'],
			),
		);
		return 0;
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
				<Typography
					variant="h3"
					sx={{ color: isReversed ? '#FF0000' : '#FFFFF1' }}>
					{time}
				</Typography>
			</Box>
			<Box
				display="flex"
				justifyContent="center"
				alignItems="flex-start"
				padding={2}
				gap={2}
				sx={{
					textAlign: 'left',
				}}>
				<Typography
					variant="h6"
					sx={{
						position: 'relative',
						bgcolor: '#FFFFF1',
						borderRadius: '20px',
						p: 2,
					}}>
					<Typewriter speed={50}>
						{
							(t('scripts', { returnObjects: true }) as Script[])[
								step - 1
							].message
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
					{(
						(t('scripts', { returnObjects: true }) as Script[])[
							step - 1
						].answers as Answer[]
					)?.length > 0
						? t('variants')
						: ''}
				</Typography>
				<Box
					display="flex"
					justifyContent="space-around"
					alignItems="center"
					gap={2}
					sx={{ width: '100%' }}>
					{(
						(t('scripts', { returnObjects: true }) as Script[])[
							step - 1
						].answers as Answer[]
					)?.length > 0
						? (
								(
									t('scripts', {
										returnObjects: true,
									}) as Script[]
								)[step - 1].answers as Answer[]
						// eslint-disable-next-line no-mixed-spaces-and-tabs
						  )
						// eslint-disable-next-line no-mixed-spaces-and-tabs
							?.map(
								(answer, index) => (
									<Button
										key={index}
										onClick={() =>
											answerHandler(
												answer.correct,
												answer?.timediff,
											)
										}
										variant="contained"
										color="secondary"
										sx={{
											bgcolor: '#FFFFF1',
											color: '#000',
											'&:hover': {
												bgcolor: 'lightgrey',
											},
											// width: '100%',
										}}>
										{answer.text}
									</Button>
								),
								// eslint-disable-next-line no-mixed-spaces-and-tabs
							)
						: null}
				</Box>
			</Box>
		</Box>
	);
};

export default Quest;
