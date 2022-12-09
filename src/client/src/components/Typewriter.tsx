import React, { type FC, useEffect, Fragment, useState } from 'react';

type Props = {
	children: string;
	speed?: number;
};

const Typewriter: FC<Props> = ({ children, speed = 500 }) => {
	const [text, setText] = useState<string>(children[0]);

	useEffect(() => {
		setText(children[0]);
	}, [children]);

	useEffect(() => {
		let i = 1;
		const ID = setInterval(() => {
			i++;
			setText(prev => {
				return prev + children.charAt(i - 1);
			});
			if (children.charAt(i) === '') clearInterval(ID);
		}, speed);
		return () => clearInterval(ID);
	}, [children]);

	return <Fragment>{text}</Fragment>;
};

export default Typewriter;
