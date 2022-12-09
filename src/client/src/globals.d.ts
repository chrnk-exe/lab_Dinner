declare module '*.scss';
declare module '*.sass';
declare module '*.json';
declare module '*.mp4';

declare interface User {
	email?: string;
	password?: string;
}

declare interface Contact {
	number: string;
	name: string;
	lastCall: string;
}

declare type scriptState = 'incoming' | 'talking' | 'ended';

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
