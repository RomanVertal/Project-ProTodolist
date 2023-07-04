import logoAccount from "../../../public/images/logo_profile.png";
import logoTask from "../../../public/images/logo_tasks.png";
import logoInfo from "../../../public/images/logo_user.png";
import {
	askExitAccountHandler,
	askExitAccountText,
	createAskForm,
} from "../modalWindows/askForm";
import { wrapper } from "../wrapper";
import { accountInfo, createUserAccountInfo } from "./userAccountInfo";
import { accountTasks, createUserAccountTasks } from "./userAccountTasks";

export const account = document.createElement("div");

export const createUserAccount = (container, user) => {
	account.classList.add("account");

	const accountSidebar = document.createElement("div");
	accountSidebar.classList.add("account__sidebar");
	account.append(accountSidebar);

	const sidebarTitle = document.createElement("div");
	sidebarTitle.classList.add("sidebar__title");
	accountSidebar.append(sidebarTitle);

	const sidebarTitleText = document.createElement("span");
	sidebarTitleText.textContent = "Аккаунт";
	sidebarTitle.append(sidebarTitleText);

	const imgAccount = document.createElement("img");
	imgAccount.src = logoAccount;
	sidebarTitle.prepend(imgAccount);

	const sidebarNav = document.createElement("ul");
	sidebarNav.classList.add("sidebar__nav");
	accountSidebar.append(sidebarNav);

	const sidebarNavLinkInfo = document.createElement("li");
	sidebarNavLinkInfo.classList.add("sidebar__nav-info");
	sidebarNavLinkInfo.textContent = "Личные данные";
	sidebarNav.append(sidebarNavLinkInfo);

	const imgInfo = document.createElement("img");
	imgInfo.src = logoInfo;
	sidebarNavLinkInfo.prepend(imgInfo);

	const sidebarNavLinkTasks = document.createElement("li");
	sidebarNavLinkTasks.classList.add(
		"sidebar__nav-tasks",
		"sidebar__nav_active"
	);
	sidebarNavLinkTasks.textContent = "Задачи";
	sidebarNav.append(sidebarNavLinkTasks);

	const imgTasks = document.createElement("img");
	imgTasks.src = logoTask;
	sidebarNavLinkTasks.prepend(imgTasks);

	const sidebarButtonExit = document.createElement("div");
	sidebarButtonExit.classList.add("sidebar__button-exit");
	accountSidebar.append(sidebarButtonExit);

	const buttonExit = document.createElement("button");
	buttonExit.classList.add("button-exit");
	buttonExit.type = "button";
	buttonExit.textContent = "Выйти из профиля";
	sidebarButtonExit.append(buttonExit);

	const accountContent = document.createElement("div");
	accountContent.classList.add("account__content");
	account.append(accountContent);

	sidebarNavLinkInfo.addEventListener("click", () => {
		sidebarNavLinkInfo.classList.add("sidebar__nav_active");
		sidebarNavLinkTasks.classList.remove("sidebar__nav_active");

		accountTasks.classList.add("hidden");
		accountInfo.classList.remove("hidden");
	});

	sidebarNavLinkTasks.addEventListener("click", () => {
		sidebarNavLinkInfo.classList.remove("sidebar__nav_active");
		sidebarNavLinkTasks.classList.add("sidebar__nav_active");

		accountTasks.classList.remove("hidden");
		accountInfo.classList.add("hidden");
	});

	buttonExit.addEventListener("click", () => {
		createAskForm(wrapper, askExitAccountText, askExitAccountHandler);
	});
	console.log(user.login);
	createUserAccountTasks(accountContent, user);
	createUserAccountInfo(accountContent, user);

	container.append(account);
};
