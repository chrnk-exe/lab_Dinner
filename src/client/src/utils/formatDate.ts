export default (): string => {
	const minutes = Math.ceil(Math.random() * 60).toString();
	return [
		Math.ceil(Math.random() * 13 + 9),
		minutes.length > 1 ? minutes : '0' + minutes,
	].join(':');
};
