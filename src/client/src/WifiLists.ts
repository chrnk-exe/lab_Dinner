import randomDate from './utils/formatDate';
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
		name: 'iPhone (Ann)',
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
	{
		name: 'evilWifi',
		quality: 1,
		open: true,
	},
	{
		name: 'NOT DANGEROUS WIFI!',
		quality: 3,
		open: true
	},
	{
		name: 'Cafe Wifi launge-zone',
		quality: 2,
		open: false
	}
].sort(byField('quality'));

