import React, { useState } from 'react';
import {
	Box,
	TableContainer,
	Table,
	TableRow,
	TableCell,
	Paper,
	TableHead,
	TableBody,
} from '@mui/material';
import ContactsIcon from '@mui/icons-material/Contacts';
import { useTranslation } from 'react-i18next';
import { OfficeWifi, CafeWifi } from '../WifiLists';

import { useAppSelector } from '../store/hooks';

import Wifi1 from '@mui/icons-material/SignalWifi1Bar';
import Wifi2 from '@mui/icons-material/SignalWifi2Bar';
import Wifi3 from '@mui/icons-material/SignalWifi3Bar';
import Wifi4 from '@mui/icons-material/SignalWifi4Bar';

import Wifi1Lock from '@mui/icons-material/SignalWifi1BarLock';
import Wifi2Lock from '@mui/icons-material/SignalWifi2BarLock';
import Wifi3Lock from '@mui/icons-material/SignalWifi3BarLock';
import Wifi4Lock from '@mui/icons-material/SignalWifi4BarLock';

const lockedIcons = [
	<Wifi1Lock key={1} />,
	<Wifi2Lock key={2} />,
	<Wifi3Lock key={3} />,
	<Wifi4Lock key={4} />,
];

const icons = [
	<Wifi1 key={5} />,
	<Wifi2 key={6} />,
	<Wifi3 key={7} />,
	<Wifi4 key={8} />,
];

const WifiList = () => {
	const stage = useAppSelector(state => state.script.stage);

	const [wifi] = useState<Wifi[]>(stage === 'office' ? OfficeWifi : CafeWifi);
	const { t } = useTranslation('translation', { keyPrefix: 'wifi' });

	return (
		<Box
			display="flex"
			justifyContent="flex-start"
			alignItems="flex-start"
			flexDirection="column">
			<Box
				display="flex"
				justifyContent="flex-start"
				alignItems="center"
				gap={2}
				sx={{
					width: '100%',
					bgcolor: 'primary.main',
					color: '#FFFFF1',
					fontSize: '3em',
					height: '60px',
					p: 2,
					boxSizing: 'border-box',
				}}>
				<ContactsIcon />
				{t('wifi')}
			</Box>
			<TableContainer component={Paper}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>{''}</TableCell>
							<TableCell>{t('name')}</TableCell>
							<TableCell>{t('open_closed')}</TableCell>
							<TableCell>{t('connection_quality')} </TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{wifi.map((wifi, index) => (
							<TableRow key={index}>
								<TableCell>{index + 1}.</TableCell>
								<TableCell>{wifi.name}</TableCell>
								<TableCell>
									{wifi.open ? t('open') : t('closed')}
								</TableCell>
								<TableCell>
									{wifi.open
										? icons[wifi.quality]
										: lockedIcons[wifi.quality]}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	);
};

export default WifiList;
