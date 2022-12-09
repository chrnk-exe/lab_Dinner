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
}

declare interface Replica {
	message: string;
	answers?: Answer[];
	last?: boolean;
}

declare interface Script {
	number: string;
	replicas: Replica[];
}

declare interface ScriptRoot {
	call: string;
	variants: string;
	scripts: Script[];
}

