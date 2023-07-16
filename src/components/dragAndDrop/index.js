export const dragAndDropHandler = () => {
	const container = document.querySelector(".inProgress-tasks");
	const items = container.querySelectorAll(".task");

	items.forEach((item) => {
		item.addEventListener("dragstart", () => {
			item.classList.add("dragging-task");
		});

		item.addEventListener("dragend", () => {
			item.classList.remove("dragging-task");
		});
	});

	const dragAndDropTask = (e) => {
		const draggingTask = container.querySelector(".dragging-task");

		const tasks = [...container.querySelectorAll(".task:not(.dragging-task)")];

		const nextTask = tasks.find(
			(elem) => e.pageY <= elem.offsetTop + elem.offsetHeight / 2
		);

		container.insertBefore(draggingTask, nextTask);
	};
	container.addEventListener("dragover", dragAndDropTask);
};
