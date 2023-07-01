import {
    buttonCompleted,
    buttonInProgress,
    buttonOverdue,
    completedTasksBlock,
    inProgressTasksBlock,
    overdueTasksBlock,
} from "./userAccountTasks";

export const tasksFilterHandler = (e) => {
	const { target } = e;

	if (target.className === "nav__filter-inProgress") {
		inProgressTasksBlock.classList.remove("hidden");
		completedTasksBlock.classList.add("hidden");
		overdueTasksBlock.classList.add("hidden");

		buttonInProgress.classList.add("active_orange");
		buttonCompleted.classList.remove("active_green");
		buttonOverdue.classList.remove("active_red");
	} else if (target.className === "nav__filter-completed") {
		inProgressTasksBlock.classList.add("hidden");
		completedTasksBlock.classList.remove("hidden");
		overdueTasksBlock.classList.add("hidden");

		buttonInProgress.classList.remove("active_orange");
		buttonCompleted.classList.add("active_green");
		buttonOverdue.classList.remove("active_red");
	} else if (target.className === "nav__filter-overdue") {
		inProgressTasksBlock.classList.add("hidden");
		completedTasksBlock.classList.add("hidden");
		overdueTasksBlock.classList.remove("hidden");

		buttonInProgress.classList.remove("active_orange");
		buttonCompleted.classList.remove("active_green");
		buttonOverdue.classList.add("active_red");
	}
};
