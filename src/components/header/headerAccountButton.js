import { createLoginForm } from "../modalWindows/loginForm";
import { createReregistrationForm } from "../modalWindows/registrationForm";
import { wrapper } from "../wrapper";

export const headerTopButton = document.createElement("div");
export const createHeaderAccountButton = (container) => {
	headerTopButton.classList.add("header__top-button");

	const buttonLogin = document.createElement("button");
	buttonLogin.type = "button";
	buttonLogin.classList.add("header__top-button-login");
	buttonLogin.textContent = "Вход";
	headerTopButton.append(buttonLogin);

	const buttonRegistration = document.createElement("button");
	buttonRegistration.type = "button";
	buttonRegistration.classList.add("header__top-button-registration");
	buttonRegistration.textContent = "Регистрация";
	headerTopButton.append(buttonRegistration);

	buttonLogin.addEventListener("click", () => {
		createLoginForm(wrapper);
	});
	buttonRegistration.addEventListener("click", () => {
		createReregistrationForm(wrapper);
	});

	container.append(headerTopButton);
};
