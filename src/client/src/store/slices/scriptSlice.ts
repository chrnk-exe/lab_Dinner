import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

const initialState: {
	step: number;
	result: number;
	callState: scriptState;
} = {
	step: 1,
	result: 0,
	callState: 'incoming'
};

export const scriptSlice = createSlice({
	name: 'script',
	initialState,
	reducers: {
		incrementResult: (state) => {
			state.result = state.result + 1;
		},
		nextStep: (state) => {
			state.step = state.step + 1;
		},
		setCallState: (state, action: PayloadAction<scriptState>) => {
			state.callState = action.payload;
		}
	},
});

export const { incrementResult, nextStep, setCallState } = scriptSlice.actions;
export default scriptSlice.reducer;
