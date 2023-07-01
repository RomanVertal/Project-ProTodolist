export const loginIsUsedText =
	"<span>Пользователь с таким логином уже зарегистрирован !</span><br>Воспользуйтесь кнопкой входа или придумайте другой логин.";
export const incorrectDataText =
	"<span>Неверный логин или пароль !</span><br>Если у вас еще нету аккаунта то воспользуйтесь кнопкой регистрации чтобы создать новый.";
export const createErrorForm = (container, textError) => {
	const errorBlock = document.createElement("div");
	errorBlock.classList.add("error");

	const errorForm = document.createElement("div");
	errorForm.classList.add("error__form");
	errorBlock.append(errorForm);

	const errorLogo = document.createElement("div");
	errorLogo.classList.add("error_logo");
	const errorLogoCheck = document.createElement("span");
	errorLogoCheck.innerHTML = "✕";
	errorLogo.append(errorLogoCheck);
	errorForm.append(errorLogo);

	const errorTitle = document.createElement("p");
	errorTitle.classList.add("error__title");
	errorTitle.innerHTML = textError;
	errorForm.append(errorTitle);

	const errorBtnClose = document.createElement("button");
	errorBtnClose.type = "button";
	errorBtnClose.classList.add("error__btn-close");
	errorBtnClose.textContent = "Ок";
	errorForm.append(errorBtnClose);

	errorBtnClose.addEventListener("click", () => {
		errorBlock.remove();
	});

	container.append(errorBlock);
};
