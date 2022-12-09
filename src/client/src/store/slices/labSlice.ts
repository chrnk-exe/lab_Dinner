import { createSlice } from '@reduxjs/toolkit';

export const initialState = (JSON.parse(
	window.sessionStorage.getItem('started') as string,
) as boolean) || false;

export const labSlice = createSlice({
	name: 'lab',
	initialState,
	reducers: {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		setStarted: (state) => {
			window.sessionStorage.setItem('started', JSON.stringify(true));
			return true;
		},
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		setNotStarted: (state) => {
			window.sessionStorage.setItem('started', JSON.stringify(false));
			return false;
		},
	},
});

export const { setStarted, setNotStarted } = labSlice.actions;
export default labSlice.reducer;
