import byField from './utils/byField';

export const OfficeWifi: Wifi[] = [
	{
		name: 'HacktoryOpen',
		quality: 1,
		open: true
	},
	{
		name: 'HacktoryOffice',
		quality: 3,
		open: false
	},
	{
		name: 'iPhone',
		quality: 2,
		open: false,
	},
	{
		name: 'HacktoryOffice2',
		quality: 0,
		open: false
	}
].sort(byField('quality'));

export const CafeWifi: Wifi[] = [
	{
		name: 'FreeWifi',
		quality: 0,
		open: true
	},
	{
		name: 'Cafe Wifi',
		quality: 2,
		open: false
	},
].sort(byField('quality'));

