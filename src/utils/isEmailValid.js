export const isEmailValid = (email) => {
	const emailRegex =
		/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

	return emailRegex.test(email);
};
