import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import avatar from '../assets/Hacktory.jpg';
import Typography from '@mui/material/Typography';
import PhoneIcon from '@mui/icons-material/Phone';
import ContactsIcon from '@mui/icons-material/Contacts';
import LogoutIcon from '@mui/icons-material/Logout';
import Collapse from '@mui/material/Collapse';
import { useTranslation } from 'react-i18next';
import Chip from '@mui/material/Chip';
import russianFlag from '../assets/russia.svg';
import englishFlag from '../assets/english.svg';

const drawerWidth = 200;

const Drawer = styled(MuiDrawer, {
	shouldForwardProp: prop => prop !== 'open',
})(({ theme, open }) => ({
	'& .MuiDrawer-paper': {
		position: 'relative',
		whiteSpace: 'nowrap',
		width: drawerWidth,
		maxWidth: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
		boxSizing: 'border-box',
		overflowX: 'hidden',
		...(!open && {
			overflowX: 'hidden',
			transition: theme.transitions.create('width', {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
			width: theme.spacing(7),
			[theme.breakpoints.up('sm')]: {
				width: theme.spacing(7),
			},
		}),
	},
}));

export default function PrimarySearchAppBar({
	children,
}: {
	children: React.ReactNode;
}) {
	const [language, setLanguage] = useState<'en' | 'ru'>('en');
	const [open, setOpen] = useState<boolean>(true);
	const { t, i18n } = useTranslation('translation', { keyPrefix: 'menu' });
	const drawerToggler = () => setOpen(prev => !prev);

	const Navigations = [
		{
			link: '/app',
			title: t('Main Page'),
			icon: <PhoneIcon />,
		},
		{
			link: '/app/contacts',
			title: t('Contacts'),
			icon: <ContactsIcon />,
		},
	];

	const navigate = useNavigate();

	const logOutHandler = () => {
		window.localStorage.clear();
		window.sessionStorage.clear();
		window.location.reload();
	};

	const changeLanguage = (language: 'en' | 'ru') => {
		setLanguage(language);
		i18n.changeLanguage(language);
	};

	return (
		<Box display={'flex'} sx={{ flexGrow: 1 }}>
			<Drawer
				variant="permanent"
				open={open}
				anchor={'left'}
				sx={{
					height: '100vh',
				}}
				onClose={drawerToggler}>
				<Toolbar
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'flex-start',
						// borderBottom: '1px solid lightgrey',
						px: [1],
					}}>
					<IconButton disableRipple onClick={drawerToggler}>
						{open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
					</IconButton>
					<Collapse in={open} timeout="auto" unmountOnExit>
						<Chip
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
					</Collapse>
				</Toolbar>
				<Collapse in={open} timeout="auto" unmountOnExit>
					<Box
						display="flex"
						flexDirection="column"
						justifyContent="center"
						alignItems="center"
						gap={1}
						sx={{
							width: '80%',
							minWidth: drawerWidth * 0.8,
							borderTop:
								(open && '1px solid lightgrey') ||
								'1px solid #FFFFFF',
							borderBottom:
								(open && '1px solid lightgrey') ||
								'1px solid #FFFFFF',
							mx: 'auto',
							my: 1,
							py: 2,
							whiteSpace: 'nowrap',
						}}>
						<Avatar src={avatar} alt="" />
						<Typography variant="h6" noWrap>
							Hacktory Admin
						</Typography>
					</Box>
				</Collapse>

				<List sx={{ width: '100%' }}>
					{Navigations.map((item, index) => (
						<ListItem sx={{ px: 0 }} key={index}>
							<ListItemButton onClick={() => navigate(item.link)}>
								<ListItemIcon>{item.icon}</ListItemIcon>
								<ListItemText>{item.title}</ListItemText>
							</ListItemButton>
						</ListItem>
					))}
					<ListItem sx={{ px: 0 }}>
						<ListItemButton onClick={logOutHandler}>
							<ListItemIcon>
								<LogoutIcon />
							</ListItemIcon>
							<ListItemText>{t('Log out')}</ListItemText>
						</ListItemButton>
					</ListItem>
				</List>
			</Drawer>
			<Box
				component="main"
				sx={{
					backgroundColor: theme =>
						theme.palette.mode === 'light'
							? theme.palette.grey[100]
							: theme.palette.grey[900],
					flexGrow: 1,
					// height: 'calc(100vh - 8px)',
					overflow: 'auto',
					width: `calc(100% - ${drawerWidth}px)`,
					// overflowX: 'hidden'
					// marginTop: 8,
				}}>
				{children}
			</Box>
		</Box>
	);
}
