import { loginUserHandler } from "../../api";

const loginBlock = document.createElement("div");
export const onRemoveLoginForm = () => {
	loginBlock.textContent = "";
	loginBlock.remove();
};

export const createLoginForm = (container) => {
	loginBlock.classList.add("login-block");

	const loginForm = document.createElement("div");
	loginForm.classList.add("login-form");
	loginBlock.append(loginForm);

	const loginFormTitle = document.createElement("p");
	loginFormTitle.classList.add("login-form__title");
	loginFormTitle.textContent = "Вход в аккаунт";
	loginForm.append(loginFormTitle);

	const buttonClose = document.createElement("button");
	buttonClose.type = "button";
	buttonClose.classList.add("login-form__button-close");
	buttonClose.textContent = "✕";
	loginForm.append(buttonClose);

	const form = document.createElement("form");
	form.action = "";
	form.method = "get";
	form.target = "_self";
	loginForm.append(form);

	const loginLabel = document.createElement("label");
	loginLabel.classList.add("login-form__login-label");
	loginLabel.for = "login";
	loginLabel.textContent = "Логин";
	form.append(loginLabel);

	const loginInput = document.createElement("input");
	loginInput.classList.add("login-form__login-input");
	loginInput.name = "login";
	loginInput.type = "text";
	loginInput.placeholder = "Введите логин";
	form.append(loginInput);

	const passwordLabel = document.createElement("label");
	passwordLabel.classList.add("login-form__password-label");
	passwordLabel.for = "password";
	passwordLabel.textContent = "Пароль";
	form.append(passwordLabel);

	const passwordInput = document.createElement("input");
	passwordInput.classList.add("login-form__password-input");
	passwordInput.name = "password";
	passwordInput.type = "password";
	passwordInput.placeholder = "Введите пароль";
	form.append(passwordInput);

	const buttonBlock = document.createElement("div");
	buttonBlock.classList.add("login-form__button-block");
	form.append(buttonBlock);

	const buttonSubmit = document.createElement("button");
	buttonSubmit.classList.add("login-form__button-submit");
	buttonSubmit.type = "button";
	buttonSubmit.textContent = "Войти";
	buttonBlock.append(buttonSubmit);

	container.append(loginBlock);

	buttonClose.addEventListener("click", onRemoveLoginForm);

	buttonSubmit.addEventListener("click", () => {
		const inputs = loginForm.querySelectorAll("input");
		const emptyInputs = Array.from(inputs).filter((elem) => elem.value === "");

		inputs.forEach((elem) => {
			if (elem.value === "") {
				elem.classList.add("invalid");
			} else {
				elem.classList.remove("invalid");
			}
		});

		if (emptyInputs.length === 0) {
			loginUserHandler(loginInput.value, passwordInput.value);
			console.log(localStorage);
		}
	});
};
