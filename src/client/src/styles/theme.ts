import { createTheme, responsiveFontSizes } from '@mui/material';

export enum COLORS {
	jade = '#00A36C',
	malachite = '#0BDA51',
	bright_green = '#AAFF00',
	neon_green = '#0FFF50',
	jungle = '#2AAA8A',
	spring_green = '#00FF7F',
	mint_green = '#98FB98',
	light_green = '#90EE90',
	white = '#FFFFF1',
	gray = 'rgba(0, 0, 0, 0.87)',

	dark_background = '#180A0A',
	purple = '#711A75',
	pink = '#F10086',
	light_pink = '#F582A7',
	black = '#000',
	grey = '#555',
}

export default responsiveFontSizes(
	createTheme({
		palette: {
			primary: {
				main: '#3f51b5',
			},
			secondary: {
				main: '#f50057',
			},
			error: {
				main: '#ff1000',
			},
		},
	}),
);
