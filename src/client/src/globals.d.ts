declare module '*.scss';
declare module '*.sass';
declare module '*.json';
declare module '*.mp4';

declare interface Wifi {
	quality: number;
	name: string;
	open: boolean;
}

declare type stageState = 'office' | 'cafe';

declare interface Answer {
	text: string;
	correct: boolean;
	timediff?: number;
}

declare interface Script {
	message: string;
	nextStage: stageState;
	answers: Answer[];
}

declare interface ScriptObject {
	call: string;
	variants: string;
	scripts: Script[];
}

declare interface User { }
