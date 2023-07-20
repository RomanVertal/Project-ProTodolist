import { deleteTask, deleteUser } from "../../api";
import { headerTop } from "../header";
import { createHeaderAccountButton } from "../header/headerAccountButton";
import { headerTopUser } from "../header/headerAccountUser";
import { main } from "../main";
import { createStartPage } from "../startPage";
import { account } from "../userAccount";
import { accountInfo } from "../userAccount/userAccountInfo";
import { accountTasks } from "../userAccount/userAccountTasks";
import { wrapper } from "../wrapper";
import {
	createCongratulationsForm,
	deleteUserText,
} from "./congratulationsForm";

export const askBlock = document.createElement("div");

export const onRemoveAskForm = () => {
	askBlock.textContent = "";
	askBlock.remove();
};

export const askDeleteTaskText =
	"<span>Вы действительно хотите удалить задачу?</span><br><br>После подтверждения удаления восстановить её будет невозможно.";

export const askDeleteTaskHandler = (login, idTask) => {
	deleteTask(login, idTask);
	onRemoveAskForm();
};

export const askExitAccountText =
	"<span>Вы действительно хотите выйти из аккауна?</span>";

export const askExitAccountHandler = () => {
	account.textContent = "";
	account.remove();
	headerTopUser.textContent = "";
	headerTopUser.remove();
	accountInfo.textContent = "";
	accountInfo.remove();
	accountTasks.textContent = "";
	accountTasks.remove();

	createStartPage(main);
	createHeaderAccountButton(headerTop);
	onRemoveAskForm();

	localStorage.removeItem("user");
};

export const askDeleteUserText =
	"<span>Вы действительно хотите удалить аккаунт?</span><br><br>После подтверждения удаления восстановить его будет невозможно.";

export const askDeleteUserHandler = (login) => {
	deleteUser(login);
	account.textContent = "";
	account.remove();
	headerTopUser.textContent = "";
	headerTopUser.remove();
	accountInfo.textContent = "";
	accountInfo.remove();
	accountTasks.textContent = "";
	accountTasks.remove();
	createStartPage(main);
	createHeaderAccountButton(headerTop);
	onRemoveAskForm();
	createCongratulationsForm(wrapper, deleteUserText);

	localStorage.removeItem("user");
};

export const createAskForm = (
	container,
	askText,
	askHandler,
	login,
	idTask
) => {
	askBlock.classList.add("ask");

	const askForm = document.createElement("div");
	askForm.classList.add("ask__form");
	askBlock.append(askForm);

	const askTitle = document.createElement("p");
	askTitle.classList.add("ask__title");
	askTitle.innerHTML = askText;
	askForm.append(askTitle);

	const askButtonYes = document.createElement("button");
	askButtonYes.type = "button";
	askButtonYes.classList.add("ask__btn-yes");
	askButtonYes.textContent = "Да";
	askForm.append(askButtonYes);

	const askButtonNo = document.createElement("button");
	askButtonNo.type = "button";
	askButtonNo.classList.add("ask__btn-no");
	askButtonNo.textContent = "Нет";
	askForm.append(askButtonNo);

	askButtonYes.addEventListener("click", () => {
		askHandler(login, idTask);
	});

	askButtonNo.addEventListener("click", () => {
		onRemoveAskForm();
	});
	container.append(askBlock);
};
