import { updateTaskChecked, updateTaskTitle } from "../../api";
import {
	askDeleteTaskHandler,
	askDeleteTaskText,
	createAskForm,
} from "../modalWindows/askForm";
import {
	createCongratulationsForm,
	editTaskText,
} from "../modalWindows/congratulationsForm";
import { wrapper } from "../wrapper";

export const taskHandler = (e, login) => {
	const { target } = e;
	const task = target.closest(".task");

	if (task) {
		const idTask = target.closest(".task").id;

		if (target.className === "task__button-close") {
			createAskForm(
				wrapper,
				askDeleteTaskText,
				askDeleteTaskHandler,
				login,
				idTask
			);
		} else if (target.className === "checkbox__input") {
			const completed = target.checked;
			target.closest("label").classList.toggle("checkbox_active");

			updateTaskChecked(login, idTask, completed);
		} else if (
			target.className === "task__button-edit" ||
			target.className === "task__button-edit-logo"
		) {
			task.querySelector(".task-content-button").classList.remove("hidden");
			task.querySelector(".task-content").classList.add("task-edit-active");
			task.querySelector(".task-content-title").contentEditable = true;
		} else if (target.className === "task__button-save") {
			const title = task.querySelector(".task-content-title").textContent;
			updateTaskTitle(login, idTask, title);
			createCongratulationsForm(wrapper, editTaskText);
			task.querySelector(".task-content-button").classList.add("hidden");
			task.querySelector(".task-content").classList.remove("task-edit-active");
			task.querySelector(".task-content-title").contentEditable = false;
		} else if (target.className === "task__button-cancel") {
			task.querySelector(".task-content-button").classList.add("hidden");
			task.querySelector(".task-content").classList.remove("task-edit-active");
			task.querySelector(".task-content-title").contentEditable = false;
		}
	}
};
