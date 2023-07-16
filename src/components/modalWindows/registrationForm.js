import { registrationUserHandler } from "../../api";

const registrationBlock = document.createElement("div");

export const onRemoveReregistrationForm = () => {
	registrationBlock.textContent = "";
	registrationBlock.remove();
};

export const createReregistrationForm = (container) => {
	registrationBlock.classList.add("registration-block");

	const registrationForm = document.createElement("div");
	registrationForm.classList.add("registration-form");
	registrationBlock.append(registrationForm);

	const reregistrationFormTitle = document.createElement("p");
	reregistrationFormTitle.classList.add("registration-form__title");
	reregistrationFormTitle.textContent = "Регистрация";
	registrationForm.append(reregistrationFormTitle);

	const buttonClose = document.createElement("button");
	buttonClose.type = "button";
	buttonClose.classList.add("registration-form__button-close");
	buttonClose.textContent = "✕";
	registrationForm.append(buttonClose);

	const form = document.createElement("form");
	form.action = "";
	form.method = "get";
	form.target = "_self";
	registrationForm.append(form);

	const nameLabel = document.createElement("label");
	nameLabel.classList.add("registration-form__name-label");
	nameLabel.for = "username";
	nameLabel.textContent = "Имя";
	form.append(nameLabel);

	const nameInput = document.createElement("input");
	nameInput.classList.add("registration-form__name-input");
	nameInput.name = "username";
	nameInput.type = "text";
	nameInput.placeholder = "Введите имя";
	form.append(nameInput);

	const loginLabel = document.createElement("label");
	loginLabel.classList.add("registration-form__login-label");
	loginLabel.for = "login";
	loginLabel.textContent = "Логин";
	form.append(loginLabel);

	const loginInput = document.createElement("input");
	loginInput.classList.add("registration-form__login-input");
	loginInput.name = "login";
	loginInput.type = "text";
	loginInput.placeholder = "Введите логин";
	form.append(loginInput);

	const passwordLabel = document.createElement("label");
	passwordLabel.classList.add("registration-form__password-label");
	passwordLabel.for = "password";
	passwordLabel.textContent = "Пароль";
	form.append(passwordLabel);

	const passwordInput = document.createElement("input");
	passwordInput.classList.add("registration-form__password-input");
	passwordInput.name = "password";
	passwordInput.type = "password";
	passwordInput.placeholder = "Введите пароль";
	form.append(passwordInput);

	const repeatPasswordLabel = document.createElement("label");
	repeatPasswordLabel.classList.add("registration-form__repeat-password-label");
	repeatPasswordLabel.for = "repeat-password";
	repeatPasswordLabel.textContent = "Повторите пароль";
	form.append(repeatPasswordLabel);

	const repeatPasswordInput = document.createElement("input");
	repeatPasswordInput.classList.add("registration-form__repeat-password-input");
	repeatPasswordInput.name = "repeat-password";
	repeatPasswordInput.type = "password";
	repeatPasswordInput.placeholder = "Введите пароль еще раз";
	form.append(repeatPasswordInput);

	const emailLabel = document.createElement("label");
	emailLabel.classList.add("registration-form__email-label");
	emailLabel.for = "email";
	emailLabel.textContent = "E-mail";
	form.append(emailLabel);

	const emailInput = document.createElement("input");
	emailInput.classList.add("registration-form__email-input");
	emailInput.name = "email";
	emailInput.type = "email";
	emailInput.placeholder = "Введите адрес электронной почты";
	form.append(emailInput);

	const buttonBlock = document.createElement("div");
	buttonBlock.classList.add("registration-form__button-block");
	form.append(buttonBlock);

	const buttonReset = document.createElement("button");
	buttonReset.classList.add("registration-form__button-reset");
	buttonReset.type = "reset";
	buttonReset.textContent = "Очистить";
	buttonBlock.append(buttonReset);

	const buttonSubmit = document.createElement("button");
	buttonSubmit.classList.add("registration-form__button-submit");
	buttonSubmit.type = "button";
	buttonSubmit.textContent = "Зарегистрироваться";
	buttonBlock.append(buttonSubmit);

	container.append(registrationBlock);

	buttonClose.addEventListener("click", onRemoveReregistrationForm);

	const registrationFormValidation = () => {
		const inputs = registrationForm.querySelectorAll("input");
		const emptyInputs = Array.from(inputs).filter((elem) => elem.value === "");
		const passwordCheck = passwordInput.value === repeatPasswordInput.value;

		inputs.forEach((elem) => {
			if (elem.value === "") {
				elem.classList.add("invalid");
			} else {
				elem.classList.remove("invalid");
			}
		});

		if (passwordCheck) {
			repeatPasswordInput.classList.remove("invalid");
		} else {
			repeatPasswordInput.classList.add("invalid");
		}

		if (emptyInputs.length === 0 && passwordCheck) {
			registrationUserHandler(
				loginInput.value,
				passwordInput.value,
				nameInput.value,
				emailInput.value
			);
		}
	};

	buttonSubmit.addEventListener("click", registrationFormValidation);
};
