export const main = document.createElement("main");
export const createMain = (container) => {
	main.classList.add("main");
	container.append(main);
};
