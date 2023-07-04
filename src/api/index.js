import { initializeApp } from "firebase/app";
import {
	child,
	get,
	getDatabase,
	ref,
	remove,
	set,
	update,
} from "firebase/database";
import { v4 as uuidv4 } from "uuid";
import { headerTop } from "../components/header";
import { headerTopButton } from "../components/header/headerAccountButton";
import { createHeaderAccountUser } from "../components/header/headerAccountUser";
import { main } from "../components/main";
import {
	addUserText,
	createCongratulationsForm,
} from "../components/modalWindows/congratulationsForm";
import {
	createErrorForm,
	incorrectDataText,
	loginIsUsedText,
} from "../components/modalWindows/errorForm";
import { onRemoveLoginForm } from "../components/modalWindows/loginForm";
import { onRemoveReregistrationForm } from "../components/modalWindows/registrationForm";
import { startPage } from "../components/startPage";
import { createUserAccount } from "../components/userAccount";
import { createTaskItem } from "../components/userAccount/task";

import { firebaseConfig } from "../../firebaseConfigs/firebaseConfig";
import { dragAndDropHandler } from "../components/dragAndDrop";
import {
	completedTasksBlock,
	inProgressTasksBlock,
	overdueTasksBlock,
} from "../components/userAccount/userAccountTasks";
import { wrapper } from "../components/wrapper";
import { currentDate } from "../utils/date";
import { encryptionData } from "../utils/encryption";
import { sortTasks } from "../utils/sortTasks";

export const app = initializeApp(firebaseConfig);

export const createUser = (login, password, name, email) => {
	const db = getDatabase();
	set(ref(db, `users/${login}`), {
		login,
		password,
		name,
		email,
		registrationDate: currentDate(new Date()),
		tasks: "",
	});
};

export const updateTaskList = (
	inProgressContainer,
	completedContainer,
	overdueContainer,
	login
) => {
	const dbRef = ref(getDatabase());
	get(child(dbRef, `users/${login}/tasks`))
		.then((snapshot) => {
			const tasks = Object.values(snapshot.val());
			const { inProgressTasks, completedTasks, overdueTasks } =
				sortTasks(tasks);

			const inProgressTaskElements = inProgressTasks.map(createTaskItem);
			const completedTaskElements = completedTasks.map(createTaskItem);
			const overdueTaskElements = overdueTasks.map(createTaskItem);

			inProgressContainer.textContent = "";
			completedContainer.textContent = "";
			overdueContainer.textContent = "";

			inProgressContainer.append(...inProgressTaskElements);
			completedContainer.append(...completedTaskElements);
			overdueContainer.append(...overdueTaskElements);

			dragAndDropHandler();
		})
		.catch((error) => {
			console.error(error);
		});
};

export const createTask = (login, title, deadline) => {
	const id = new Date().getTime();
	const db = getDatabase();
	set(ref(db, `users/${login}/tasks/${id}`), {
		id,
		title,
		deadline,
		completed: false,
	});
	updateTaskList(
		inProgressTasksBlock,
		completedTasksBlock,
		overdueTasksBlock,
		login
	);
};

export const updateTaskChecked = (login, idTask, completed) => {
	const db = getDatabase();
	update(ref(db, `users/${login}/tasks/${idTask}`), {
		completed,
	});
	console.log(login);
	updateTaskList(
		inProgressTasksBlock,
		completedTasksBlock,
		overdueTasksBlock,
		login
	);
};

export const updateTaskTitle = (login, idTask, title) => {
	const db = getDatabase();
	update(ref(db, `users/${login}/tasks/${idTask}`), {
		title,
	});

	updateTaskList(
		inProgressTasksBlock,
		completedTasksBlock,
		overdueTasksBlock,
		login
	);
};

export const deleteTask = (login, idTask) => {
	const db = getDatabase();
	remove(ref(db, `users/${login}/tasks/${idTask}`));
	updateTaskList(
		inProgressTasksBlock,
		completedTasksBlock,
		overdueTasksBlock,
		login
	);
};

export const deleteUser = (login) => {
	const db = getDatabase();
	remove(ref(db, `users/${login}`));
};

export const registrationUserHandler = (login, password, name, email) => {
	const dbRef = ref(getDatabase());
	get(child(dbRef, `users/`))
		.then((snapshot) => {
			const users = Object.keys(snapshot.val());
			console.log(users.length);
			if (users.includes(login)) {
				createErrorForm(wrapper, loginIsUsedText);
			} else {
				createUser(login, password, name, email);
				onRemoveReregistrationForm();
				createCongratulationsForm(wrapper, addUserText);
			}
		})
		.catch((error) => {
			console.error(error);
		});
};

export const loginUserHandler = (login, password) => {
	const dbRef = ref(getDatabase());
	get(child(dbRef, `users/`))
		.then((snapshot) => {
			const users = Object.keys(snapshot.val());

			if (
				users.includes(login) &&
				password === snapshot.val()[login].password
			) {
				const user = snapshot.val()[login];
				startPage.textContent = "";
				startPage.remove();
				createUserAccount(main, user);
				onRemoveLoginForm();
				headerTopButton.textContent = "";
				headerTopButton.remove();
				createHeaderAccountUser(headerTop, login);

				localStorage.setItem("user", encryptionData(login));
				console.log(localStorage);
			} else {
				createErrorForm(wrapper, incorrectDataText);
			}
		})
		.catch((error) => {
			console.error(error);
		});
};

export const addSubscription = (email) => {
	const id = uuidv4();
	const db = getDatabase();
	set(ref(db, `subscription/${id}`), {
		email,
	});
};

export const createLoginAuto = (login) => {
	const dbRef = ref(getDatabase());
	get(child(dbRef, `users/`))
		.then((snapshot) => {
			const user = snapshot.val()[login];

			createUserAccount(main, user);
		})
		.catch((error) => {
			console.error(error);
		});
};

export const searchTasksHandler = (
	inProgressContainer,
	completedContainer,
	overdueContainer,
	login,
	value
) => {
	const dbRef = ref(getDatabase());
	get(child(dbRef, `users/${login}/tasks`))
		.then((snapshot) => {
			const tasks = Object.values(snapshot.val());

			const foundTasks = tasks.filter((item) => {
				if (item.title.toLowerCase().includes(value.toLowerCase())) {
					return item;
				}
			});

			const { inProgressTasks, completedTasks, overdueTasks } =
				sortTasks(foundTasks);

			const inProgressTaskElements = inProgressTasks.map(createTaskItem);
			const completedTaskElements = completedTasks.map(createTaskItem);
			const overdueTaskElements = overdueTasks.map(createTaskItem);

			inProgressContainer.textContent = "";
			completedContainer.textContent = "";
			overdueContainer.textContent = "";

			inProgressContainer.append(...inProgressTaskElements);
			completedContainer.append(...completedTaskElements);
			overdueContainer.append(...overdueTaskElements);

			dragAndDropHandler();
		})
		.catch((error) => {
			console.error(error);
		});
};
