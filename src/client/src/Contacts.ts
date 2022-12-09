import randomDate from './utils/formatDate';
import byField from './utils/byField';

const sortedArrayByLastCall = (contacts: Contact[]): Contact[] => {
	const withTime = [...contacts]
		.filter(contact => contact.lastCall.split(':').length === 2)
		.sort(byField('lastCall'));
	const withYesterday = contacts.filter(
		contact => contact.lastCall === 'Yesterday',
	);
	const withDate = [...contacts]
		.filter(contact => contact.lastCall.split('/').length === 2)
		.sort(byField('lastCall', true));
	return [...withTime, ...withYesterday, ...withDate];
};

const contacts: Contact[] = [
	{
		name: 'Boss',
		number: '+7 (663) 914-91-28',
		lastCall: '13:37',
	},
	{
		name: 'Accountant',
		number: '+7 (779) 913-15-87',
		lastCall: randomDate(),
	},
	{
		name: 'Product Manager',
		number: '+7 (122) 824-12-98',
		lastCall: randomDate(),
	},
	{
		name: 'System Administrator',
		number: '+7 (663) 854-28-51',
		lastCall: randomDate(),
	},
	{
		name: 'Marketing',
		number: '+7 (122) 235-68-25',
		lastCall: randomDate(),
	},
	{
		name: 'Supply manager',
		number: '+7 (097) 073-23-11',
		lastCall: randomDate(),
	},
	{
		name: 'HR',
		number: '+7 (122) 085-34-54',
		lastCall: randomDate(),
	},
];

export const sortedByName = [...contacts].sort(byField('name'));
// export const sortedByLastCall = [...contacts].sort(byField('lastCall'));
export const sortedByLastCall = sortedArrayByLastCall([...contacts]);
export default contacts;
