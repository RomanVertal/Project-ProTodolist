import { parseDate } from "../../utils/date";

export const createTaskItem = (item) => {
	const task = document.createElement("div");
	task.classList.add("task");
	task.draggable = true;
	task.id = item.id;

	const taskCheckbox = document.createElement("div");
	taskCheckbox.classList.add("task__checkbox");
	task.append(taskCheckbox);

	const checkboxLabel = document.createElement("label");
	checkboxLabel.classList.add("checkbox__label");
	checkboxLabel.htmlFor = `checkbox_${item.id}`;
	checkboxLabel.innerHTML = "&#10003;";
	taskCheckbox.append(checkboxLabel);

	if (item.completed) {
		checkboxLabel.classList.add("checkbox_active");
	}

	const checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	checkbox.classList.add("checkbox__input");
	checkbox.id = `checkbox_${item.id}`;
	checkbox.checked = item.completed;
	checkboxLabel.append(checkbox);

	const taskInfo = document.createElement("div");
	taskInfo.classList.add("task__info");
	task.append(taskInfo);

	const taskDeadline = document.createElement("div");
	taskDeadline.classList.add("task__info-deadline");
	taskInfo.append(taskDeadline);

	const taskDeadlineTitle = document.createElement("div");
	taskDeadlineTitle.classList.add("task__info-deadline-title");
	taskDeadlineTitle.textContent = "Крайний срок:";
	taskDeadline.append(taskDeadlineTitle);

	const taskDeadlineValue = document.createElement("div");
	taskDeadlineValue.classList.add("task__info-deadline-value");
	taskDeadlineValue.textContent = parseDate(item.deadline);
	taskDeadline.append(taskDeadlineValue);

	const taskTitle = document.createElement("div");
	taskTitle.classList.add("task__info-title");
	taskTitle.textContent = item.title;
	taskInfo.append(taskTitle);

	const buttonClose = document.createElement("button");
	buttonClose.type = "button";
	buttonClose.classList.add("task__button-close");
	buttonClose.textContent = "✕";
	task.append(buttonClose);

	return task;
};
