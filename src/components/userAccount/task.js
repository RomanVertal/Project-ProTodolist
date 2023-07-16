import logoButtonEdit from "../../../public/images/logo_edit.png";
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

	const taskContainer = document.createElement("div");
	taskContainer.classList.add("task__info-container");
	taskInfo.append(taskContainer);

	const taskContent = document.createElement("div");
	taskContent.classList.add("task-content");
	taskContainer.append(taskContent);

	const taskContentTitle = document.createElement("div");
	taskContentTitle.classList.add("task-content-title");
	taskContentTitle.textContent = item.title;
	taskContent.append(taskContentTitle);

	const taskContentButton = document.createElement("div");
	taskContentButton.classList.add("task-content-button", "hidden");
	taskContent.append(taskContentButton);

	const btnSave = document.createElement("button");
	btnSave.type = "button";
	btnSave.classList.add("task__button-save");
	btnSave.innerHTML = `&#10004;`;
	taskContentButton.append(btnSave);

	const btnCancel = document.createElement("button");
	btnCancel.type = "button";
	btnCancel.classList.add("task__button-cancel");
	btnCancel.innerHTML = `✕`;
	taskContentButton.append(btnCancel);

	const btnEditTask = document.createElement("button");
	btnEditTask.type = "button";
	btnEditTask.classList.add("task__button-edit");
	btnEditTask.innerHTML = `<img class = 'task__button-edit-logo' src = ${logoButtonEdit}>`;
	taskContainer.append(btnEditTask);

	const buttonClose = document.createElement("button");
	buttonClose.type = "button";
	buttonClose.classList.add("task__button-close");
	buttonClose.textContent = "✕";
	task.append(buttonClose);

	return task;
};
