import React, {type FC, useState} from 'react';
import { Box, Chip, Avatar } from '@mui/material';
import { useTranslation } from 'react-i18next';
import russianFlag from '../assets/russia.svg';
import englishFlag from '../assets/english.svg';

interface Props {
    sx?: Record<string, string | number>
}

const ChangeLanguageButton: FC<Props> = (props) => {
	const [language, setLanguage] = useState<'en' | 'ru'>('en');
	const { i18n } = useTranslation('translation', { keyPrefix: 'menu' });

	const changeLanguage = (language: 'en' | 'ru') => {
		setLanguage(language);
		i18n.changeLanguage(language);
	};

	return (
		<Box
			sx={{
				...props.sx
			}}>
            
			<Chip
				sx={{
					bgcolor: '#FFFFF1'
				}}
				avatar={
					<Avatar
						alt=""
						src={
							language === 'en'
								? englishFlag
								: russianFlag
						}
					/>
				}
				label={language === 'en' ? 'EN' : 'RU'}
				variant="outlined"
				onClick={() =>
					changeLanguage(language === 'en' ? 'ru' : 'en')
				}
			/>
		</Box>
	);
};

export default ChangeLanguageButton;
