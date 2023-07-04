export const addUserText =
	"<span>Пользователь успешно зарегистрирован !</span><br>Воспользуйтесь кнопкой входа, чтобы войти в личный кабинет.";
export const addTaskText =
	"<span>Задача успешно добавлена !</span><br><br>Вы уже можете приступать к её выполнению.";
export const deleteUserText =
	"<span>Аккаунт был успешно удален !</span><br><br>Если решите вернуться то вы всегда можете создать новый.";
export const editTaskText =
	"<span>Задача была успешно изменена !</span><br><br>Вы уже можете приступать к её выполнению.";

export const createCongratulationsForm = (container, textCongratulations) => {
	const congratulationsBlock = document.createElement("div");
	congratulationsBlock.classList.add("congratulations");

	const congratulationsForm = document.createElement("div");
	congratulationsForm.classList.add("congratulations__form");
	congratulationsBlock.append(congratulationsForm);

	const congratulationsLogo = document.createElement("div");
	congratulationsLogo.classList.add("congratulations_logo");
	const congratulationsLogoCheck = document.createElement("span");
	congratulationsLogoCheck.innerHTML = "&#10004;";
	congratulationsLogo.append(congratulationsLogoCheck);
	congratulationsForm.append(congratulationsLogo);

	const congratulationsTitle = document.createElement("p");
	congratulationsTitle.classList.add("congratulations__title");
	congratulationsTitle.innerHTML = textCongratulations;
	congratulationsForm.append(congratulationsTitle);

	const congratulationsBtnClose = document.createElement("button");
	congratulationsBtnClose.type = "button";
	congratulationsBtnClose.classList.add("congratulations__btn-close");
	congratulationsBtnClose.textContent = "Ок";
	congratulationsForm.append(congratulationsBtnClose);

	congratulationsBtnClose.addEventListener("click", () => {
		congratulationsBlock.remove();
	});

	container.append(congratulationsBlock);
};
