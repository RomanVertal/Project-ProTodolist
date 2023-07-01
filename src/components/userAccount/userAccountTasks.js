import { updateTaskChecked, updateTaskList } from "../../api";
import { createAddTaskForm } from "../modalWindows/addTask";
import {
	askDeleteTaskHandler,
	askDeleteTaskText,
	createAskForm,
} from "../modalWindows/askForm";
import { wrapper } from "../wrapper";
import { tasksFilterHandler } from "./tasksFilterHandler";

export const accountTasks = document.createElement("div");
export const tasksBlock = document.createElement("div");
export const inProgressTasksBlock = document.createElement("div");
export const completedTasksBlock = document.createElement("div");
export const overdueTasksBlock = document.createElement("div");
export const buttonInProgress = document.createElement("button");
export const buttonCompleted = document.createElement("button");
export const buttonOverdue = document.createElement("button");

export const createUserAccountTasks = (container, user) => {
	accountTasks.classList.add("account__tasks");
	accountTasks.classList.remove("hidden");

	const accountTasksNav = document.createElement("div");
	accountTasksNav.classList.add("account__tasks-nav");
	accountTasks.append(accountTasksNav);

	const nav = document.createElement("div");
	nav.classList.add("nav");
	accountTasksNav.append(nav);

	const navSearch = document.createElement("div");
	navSearch.classList.add("nav__search");
	nav.append(navSearch);

	const formSearch = document.createElement("form");
	formSearch.action = "";
	formSearch.method = "get";
	formSearch.target = "_self";
	navSearch.append(formSearch);

	const formSearchInput = document.createElement("input");
	formSearchInput.name = "search";
	formSearchInput.classList.add("nav__search-input");
	formSearchInput.type = "text";
	formSearchInput.placeholder = "Что будем искать?";
	formSearch.append(formSearchInput);

	const formSearchButton = document.createElement("button");
	formSearchButton.classList.add("nav__search-button");
	formSearchButton.type = "button";
	formSearchButton.textContent = "Поиск";
	formSearch.append(formSearchButton);

	const navFilter = document.createElement("div");
	navFilter.classList.add("nav__filter");
	nav.append(navFilter);

	buttonInProgress.classList.add("nav__filter-inProgress", "active_orange");
	buttonInProgress.type = "button";
	buttonInProgress.textContent = "Актуальные";
	navFilter.append(buttonInProgress);

	buttonCompleted.classList.add("nav__filter-completed");
	buttonCompleted.classList.remove("active_green");
	buttonCompleted.type = "button";
	buttonCompleted.textContent = "Выполненные";
	navFilter.append(buttonCompleted);

	buttonOverdue.classList.add("nav__filter-overdue");
	buttonOverdue.classList.remove("active_red");
	buttonOverdue.type = "button";
	buttonOverdue.textContent = "Просроченные";
	navFilter.append(buttonOverdue);

	const addTask = document.createElement("div");
	addTask.classList.add("add-task");
	accountTasksNav.append(addTask);

	const buttonAddTask = document.createElement("button");
	buttonAddTask.classList.add("add-task__button");
	buttonAddTask.type = "button";
	buttonAddTask.textContent = "Добавить задачу";
	addTask.append(buttonAddTask);

	tasksBlock.classList.add("account__tasks-block");
	accountTasks.append(tasksBlock);

	inProgressTasksBlock.classList.add("inProgress-tasks");
	inProgressTasksBlock.classList.remove("hidden");
	tasksBlock.append(inProgressTasksBlock);

	completedTasksBlock.classList.add("completed-tasks", "hidden");
	tasksBlock.append(completedTasksBlock);

	overdueTasksBlock.classList.add("overdue-tasks", "hidden");
	tasksBlock.append(overdueTasksBlock);

	navFilter.addEventListener("click", (e) => {
		tasksFilterHandler(e);
	});

	tasksBlock.addEventListener("click", (e) => {
		const { target } = e;
		const task = target.closest(".task");

		if (task) {
			const idTask = target.closest(".task").id;

			if (target.className === "task__button-close") {
				createAskForm(
					wrapper,
					askDeleteTaskText,
					askDeleteTaskHandler,
					user.login,
					idTask
				);
				console.log(idTask);
			} else if (target.className === "checkbox__input") {
				const completed = target.checked;
				target.closest("label").classList.toggle("checkbox_active");

				updateTaskChecked(user.login, idTask, completed);
			}
		}
	});

	buttonAddTask.addEventListener("click", () => {
		createAddTaskForm(wrapper, user.login);
	});

	updateTaskList(
		inProgressTasksBlock,
		completedTasksBlock,
		overdueTasksBlock,
		user.login
	);

	container.append(accountTasks);
};
