import { createTask } from "../../api";
import { currentDate } from "../../utils/date";
import { wrapper } from "../wrapper";
import { addTaskText, createCongratulationsForm } from "./congratulationsForm";

export const addTaskBlock = document.createElement("div");

export const onRemoveAddTaskForm = () => {
	addTaskBlock.textContent = "";
	addTaskBlock.remove();
};

export const createAddTaskForm = (container, login) => {
	addTaskBlock.classList.add("add-task-block");

	const addTaskForm = document.createElement("div");
	addTaskForm.classList.add("add-task-form");
	addTaskBlock.append(addTaskForm);

	const addTaskTitle = document.createElement("p");
	addTaskTitle.classList.add("add-task-form__title");
	addTaskTitle.textContent = "Добавить задачу";
	addTaskForm.append(addTaskTitle);

	const buttonClose = document.createElement("button");
	buttonClose.type = "button";
	buttonClose.classList.add("add-task-form__button-close");
	buttonClose.textContent = "✕";
	addTaskForm.append(buttonClose);

	const form = document.createElement("form");
	form.action = "";
	form.method = "get";
	form.target = "_self";
	addTaskForm.append(form);

	const deadlineTaskLabel = document.createElement("label");
	deadlineTaskLabel.for = "task-deadline";
	deadlineTaskLabel.textContent = "Крайний срок:";
	form.append(deadlineTaskLabel);

	const deadlineTaskInput = document.createElement("input");
	deadlineTaskInput.type = "date";
	deadlineTaskInput.id = "task-deadline";
	deadlineTaskInput.name = "task-deadline";
	deadlineTaskInput.min = `${currentDate(new Date())}`;
	form.append(deadlineTaskInput);

	const addtaskLabel = document.createElement("label");
	addtaskLabel.for = "task-title";
	addtaskLabel.textContent = "Описание задачи:";
	form.append(addtaskLabel);

	const addTaskInput = document.createElement("textarea");
	addTaskInput.classList.add("add-task-form__textarea");
	addTaskInput.id = "task-title";
	addTaskInput.name = "task-title";
	addTaskInput.placeholder = "Введите описание задачи";
	form.append(addTaskInput);

	const buttonAddTask = document.createElement("button");
	buttonAddTask.classList.add("add-task-form__button");
	buttonAddTask.type = "button";
	buttonAddTask.textContent = "Добавить";
	addTaskForm.append(buttonAddTask);

	buttonClose.addEventListener("click", onRemoveAddTaskForm);

	buttonAddTask.addEventListener("click", () => {
		const inputs = addTaskForm.querySelectorAll("input");
		const emptyInputs = Array.from(inputs).filter((elem) => elem.value === "");

		inputs.forEach((elem) => {
			if (elem.value === "") {
				elem.classList.add("invalid");
			} else {
				elem.classList.remove("invalid");
			}
		});

		if (emptyInputs.length === 0) {
			createTask(login, addTaskInput.value, deadlineTaskInput.value);
			onRemoveAddTaskForm();
			createCongratulationsForm(wrapper, addTaskText);
		}
	});

	container.append(addTaskBlock);
};
