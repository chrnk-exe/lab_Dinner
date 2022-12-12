import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

const initialState: {
	step: number;
	result: number;
	stage: stageState;
} = {
	step: 1,
	result: 1,
	stage: 'office'
};

export const scriptSlice = createSlice({
	name: 'script',
	initialState,
	reducers: {
		incrementResult: (state) => {
			state.result = state.result + 1;
		},
		decrementResult: (state) => {
			state.result = state.result - 1;
		},
		nextStep: (state) => {
			state.step = state.step + 1;
		},
		setStage: (state, action: PayloadAction<stageState>) => {
			state.stage = action.payload;
		}
	},
});

export const { incrementResult, nextStep, setStage, decrementResult } = scriptSlice.actions;
export default scriptSlice.reducer;
