import icon1 from "../../../public/images/logo_start_page1.png";
import icon2 from "../../../public/images/logo_start_page2.png";
import icon3 from "../../../public/images/logo_start_page3.png";
import icon4 from "../../../public/images/logo_start_page4.png";
import icon5 from "../../../public/images/logo_start_page5.png";
import icon6 from "../../../public/images/logo_start_page6.png";
import mainLogo from "../../../public/images/main_logo.png";

export const startPage = document.createElement("div");

export const createStartPage = (container) => {
	startPage.classList.add("start-page");

	const startPageTitle = document.createElement("div");
	startPageTitle.classList.add("start-page__title");
	startPage.append(startPageTitle);

	const titleText = document.createElement("p");
	titleText.innerHTML =
		"Невероятно простой и мощный<br>сервис для управление<br>задачами.";
	startPageTitle.append(titleText);

	const startPageInfo = document.createElement("div");
	startPageInfo.classList.add("start-page__info");
	startPage.append(startPageInfo);

	const infoBlockOne = document.createElement("div");
	infoBlockOne.classList.add("info-block");
	startPageInfo.append(infoBlockOne);

	const infoBlockItem1 = document.createElement("div");
	infoBlockItem1.classList.add("info-block__item");
	infoBlockOne.append(infoBlockItem1);

	const imgItem1 = document.createElement("img");
	imgItem1.src = icon1;
	imgItem1.alt = "logo";
	imgItem1.title = "logo";
	infoBlockItem1.append(imgItem1);

	const titleItem1 = document.createElement("span");
	titleItem1.classList.add("info-block__item-title");
	titleItem1.textContent = "Быстрое добавление";
	infoBlockItem1.append(titleItem1);

	const subtitleItem1 = document.createElement("span");
	subtitleItem1.classList.add("info-block__item-subtitle");
	subtitleItem1.textContent =
		"Позволяет зафиксировать и организовать задачи за секунды.";
	infoBlockItem1.append(subtitleItem1);

	const infoBlockItem2 = document.createElement("div");
	infoBlockItem2.classList.add("info-block__item");
	infoBlockOne.append(infoBlockItem2);

	const imgItem2 = document.createElement("img");
	imgItem2.src = icon2;
	imgItem2.alt = "logo";
	imgItem2.title = "logo";
	infoBlockItem2.append(imgItem2);

	const titleItem2 = document.createElement("span");
	titleItem2.classList.add("info-block__item-title");
	titleItem2.textContent = "Достигайте большего";
	infoBlockItem2.append(titleItem2);

	const subtitleItem2 = document.createElement("span");
	subtitleItem2.classList.add("info-block__item-subtitle");
	subtitleItem2.textContent =
		"Организуйте свою жизнь и достигайте большего каждый день.";
	infoBlockItem2.append(subtitleItem2);

	const infoBlockItem3 = document.createElement("div");
	infoBlockItem3.classList.add("info-block__item");
	infoBlockOne.append(infoBlockItem3);

	const imgItem3 = document.createElement("img");
	imgItem3.src = icon3;
	imgItem3.alt = "logo";
	imgItem3.title = "logo";
	infoBlockItem3.append(imgItem3);

	const titleItem3 = document.createElement("span");
	titleItem3.classList.add("info-block__item-title");
	titleItem3.textContent = "Почувствуйте прогресс";
	infoBlockItem3.append(titleItem3);

	const subtitleItem3 = document.createElement("span");
	subtitleItem3.classList.add("info-block__item-subtitle");
	subtitleItem3.textContent =
		"Маленькие каждодневные шаги со временем приведут к большим свершениям.";
	infoBlockItem3.append(subtitleItem3);

	const infoBlockTwo = document.createElement("div");
	infoBlockTwo.classList.add("info-block");
	startPageInfo.append(infoBlockTwo);

	const infoBlockLogo = document.createElement("div");
	infoBlockLogo.classList.add("info-block__logo");
	infoBlockTwo.append(infoBlockLogo);

	const logo = document.createElement("img");
	logo.src = mainLogo;
	logo.alt = "logo";
	logo.title = "logo";
	infoBlockLogo.append(logo);

	const infoBlockThree = document.createElement("div");
	infoBlockThree.classList.add("info-block");
	startPageInfo.append(infoBlockThree);

	const infoBlockItem4 = document.createElement("div");
	infoBlockItem4.classList.add("info-block__item");
	infoBlockThree.append(infoBlockItem4);

	const imgItem4 = document.createElement("img");
	imgItem4.src = icon4;
	imgItem4.alt = "logo";
	imgItem4.title = "logo";
	infoBlockItem4.append(imgItem4);

	const titleItem4 = document.createElement("span");
	titleItem4.classList.add("info-block__item-title");
	titleItem4.textContent = "Всегда с вами";
	infoBlockItem4.append(titleItem4);

	const subtitleItem4 = document.createElement("span");
	subtitleItem4.classList.add("info-block__item-subtitle");
	subtitleItem4.textContent =
		"Используйте приложение на любых устройствах и платформах.";
	infoBlockItem4.append(subtitleItem4);

	const infoBlockItem5 = document.createElement("div");
	infoBlockItem5.classList.add("info-block__item");
	infoBlockThree.append(infoBlockItem5);

	const imgItem5 = document.createElement("img");
	imgItem5.src = icon5;
	imgItem5.alt = "logo";
	imgItem5.title = "logo";
	infoBlockItem5.append(imgItem5);

	const titleItem5 = document.createElement("span");
	titleItem5.classList.add("info-block__item-title");
	titleItem5.textContent = "Разгрузите свой ум";
	infoBlockItem5.append(titleItem5);

	const subtitleItem5 = document.createElement("span");
	subtitleItem5.classList.add("info-block__item-subtitle");
	subtitleItem5.textContent = "Обретите, наконец, кристальную ясность ума.";
	infoBlockItem5.append(subtitleItem5);

	const infoBlockItem6 = document.createElement("div");
	infoBlockItem6.classList.add("info-block__item");
	infoBlockThree.append(infoBlockItem6);

	const imgItem6 = document.createElement("img");
	imgItem6.src = icon6;
	imgItem6.alt = "logo";
	imgItem6.title = "logo";
	infoBlockItem6.append(imgItem6);

	const titleItem6 = document.createElement("span");
	titleItem6.classList.add("info-block__item-title");
	titleItem6.textContent = "Контроль над ситуацией";
	infoBlockItem6.append(titleItem6);

	const subtitleItem6 = document.createElement("span");
	subtitleItem6.classList.add("info-block__item-subtitle");
	subtitleItem6.textContent =
		"Получайте ясное представление обо всем, что нужно сделать.";
	infoBlockItem6.append(subtitleItem6);

	container.append(startPage);
};
