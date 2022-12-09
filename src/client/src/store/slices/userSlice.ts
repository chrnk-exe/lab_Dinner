import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export const initialState: User = (JSON.parse(
	window.sessionStorage.getItem('user') as string,
) as User) || {
	email: undefined,
	password: undefined,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<User>) => {
			return action.payload;
		},
		setUserEmail: (state, action: PayloadAction<string>) => {
			state.email = action.payload;
		},
		setUserPassword: (state, action: PayloadAction<string>) => {
			state.password = action.payload;
		}
	},
});

export const { setUser, setUserEmail, setUserPassword } = userSlice.actions;
export default userSlice.reducer;
