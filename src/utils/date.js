export const parseDate = (date) => {
	const newDate = date.split("-");
	return `${newDate[2]}.${newDate[1]}.${newDate[0]}`;
};

export const currentDate = (date) => {
	const day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;
	const month =
		date.getMonth() > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
	const year = date.getFullYear();

	return `${year}-${month}-${day}`;
};
