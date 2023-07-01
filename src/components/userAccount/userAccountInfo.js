import { parseDate } from "../../utils/date";
import {
	askDeleteUserHandler,
	askDeleteUserText,
	createAskForm,
} from "../modalWindows/askForm";
import { wrapper } from "../wrapper";

export const accountInfo = document.createElement("div");

export const createUserAccountInfo = (container, user) => {
	accountInfo.classList.add("account__info", "hidden");

	const accountInfoTitle = document.createElement("div");
	accountInfoTitle.classList.add("account__info-title");
	accountInfoTitle.textContent = "Личные данные:";
	accountInfo.append(accountInfoTitle);

	const name = document.createElement("div");
	name.classList.add("account__info-item");
	accountInfo.append(name);

	const nameTitle = document.createElement("div");
	nameTitle.classList.add("info-item__title");
	nameTitle.textContent = "Имя:";
	name.append(nameTitle);

	const nameValue = document.createElement("div");
	nameTitle.classList.add("info-item__value");
	nameValue.id = "name";
	nameValue.textContent = user.name;
	name.append(nameValue);

	const login = document.createElement("div");
	login.classList.add("account__info-item");
	accountInfo.append(login);

	const loginTitle = document.createElement("div");
	loginTitle.classList.add("info-item__title");
	loginTitle.textContent = "Логин:";
	login.append(loginTitle);

	const loginValue = document.createElement("div");
	loginValue.classList.add("info-item__value");
	loginValue.id = "login";
	loginValue.textContent = user.login;
	login.append(loginValue);

	const password = document.createElement("div");
	password.classList.add("account__info-item");
	accountInfo.append(password);

	const passwordTitle = document.createElement("div");
	passwordTitle.classList.add("info-item__title");
	passwordTitle.textContent = "Пароль:";
	password.append(passwordTitle);

	const passwordValue = document.createElement("div");
	passwordValue.classList.add("info-item__value");
	passwordValue.id = "password";
	passwordValue.textContent = user.password;
	password.append(passwordValue);

	const email = document.createElement("div");
	email.classList.add("account__info-item");
	accountInfo.append(email);

	const emailTitle = document.createElement("div");
	emailTitle.classList.add("info-item__title");
	emailTitle.textContent = "E-mail:";
	email.append(emailTitle);

	const emailValue = document.createElement("div");
	emailValue.classList.add("info-item__value");
	emailValue.id = "email";
	emailValue.textContent = user.email;
	email.append(emailValue);

	const registrationDate = document.createElement("div");
	registrationDate.classList.add("account__info-item");
	accountInfo.append(registrationDate);

	const registrationDateTitle = document.createElement("div");
	registrationDateTitle.classList.add("info-item__title");
	registrationDateTitle.textContent = "Дата регистрации:";
	registrationDate.append(registrationDateTitle);

	const registrationDateValue = document.createElement("div");
	registrationDateValue.classList.add("info-item__value");
	registrationDateValue.id = "registrationDate";
	registrationDateValue.textContent = parseDate(user.registrationDate);
	registrationDate.append(registrationDateValue);

	const buttonDeleteBlock = document.createElement("div");
	buttonDeleteBlock.classList.add("account__info-delete");
	accountInfo.append(buttonDeleteBlock);

	const buttonDelete = document.createElement("button");
	buttonDelete.classList.add("button-delete");
	buttonDelete.textContent = "Удалить аккаунт";
	buttonDeleteBlock.append(buttonDelete);

	buttonDelete.addEventListener("click", () => {
		createAskForm(wrapper, askDeleteUserText, askDeleteUserHandler, user.login);
	});

	container.append(accountInfo);
};
