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
	IconButton,
} from '@mui/material';
import ContactsIcon from '@mui/icons-material/Contacts';
import { useTranslation } from 'react-i18next';
import SortIcon from '@mui/icons-material/Sort';
import { sortedByLastCall, sortedByName } from '../Contacts';

const Contacts = () => {
	const [contacts, setContacts] = useState<Contact[]>(sortedByLastCall);
	const { t } = useTranslation('translation', { keyPrefix: 'contacts' });

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
				{t('Contacts')}
			</Box>
			<TableContainer component={Paper}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>{''}</TableCell>
							<TableCell>
								{t('name')}
								<IconButton
									sx={{ ml: 1 }}
									onClick={() => setContacts(sortedByName)}>
									<SortIcon />
								</IconButton>
							</TableCell>
							<TableCell>{t('number')}</TableCell>
							<TableCell>
								{t('date')}{' '}
								<IconButton
									sx={{ ml: 1 }}
									onClick={() =>
										setContacts(sortedByLastCall)
									}>
									<SortIcon />
								</IconButton>
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{contacts.map((contact, index) => (
							<TableRow key={index}>
								<TableCell>{index + 1}.</TableCell>
								<TableCell>{contact.name}</TableCell>
								<TableCell>{contact.number}</TableCell>
								<TableCell>{contact.lastCall}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	);
};

export default Contacts;
