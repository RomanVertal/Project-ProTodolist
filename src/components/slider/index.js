export const slider = document.createElement("div");
export const sliderLine = document.createElement("div");
export const buttonPrev = document.createElement("button");
export const buttonNext = document.createElement("button");

export const createSlider = (container) => {
	slider.classList.add("slider");

	sliderLine.classList.add("slider__line");
	slider.append(sliderLine);

	const sliderLineItem1 = document.createElement("div");
	sliderLineItem1.classList.add("slider__line-item");
	sliderLine.append(sliderLineItem1);

	const itemTitle1 = document.createElement("p");
	itemTitle1.classList.add("slider__title-style");
	itemTitle1.textContent = "От хаоса к структуре";
	sliderLineItem1.append(itemTitle1);

	const itemSubtitle1 = document.createElement("p");
	itemSubtitle1.classList.add("slider__subtitle-style");
	itemSubtitle1.textContent =
		"ProTodolist дает уверенность в том, что все организовано и принято во внимание, чтобы вы могли преуспеть в важных для себя делах";
	sliderLineItem1.append(itemSubtitle1);

	const sliderLineItem2 = document.createElement("div");
	sliderLineItem2.classList.add("slider__line-item");
	sliderLine.append(sliderLineItem2);

	const itemTitle2 = document.createElement("p");
	itemTitle2.classList.add("slider__title-style");
	itemTitle2.textContent =
		"Начинайте день, чувствуя покой и контроль над ситуацией";
	sliderLineItem2.append(itemTitle2);

	const itemSubtitle2 = document.createElement("p");
	itemSubtitle2.classList.add("slider__subtitle-style");
	itemSubtitle2.textContent =
		"Получайте ясное представление обо всем, что нужно сделать, и не упускайте из вида важные задачи.";
	sliderLineItem2.append(itemSubtitle2);

	const sliderLineItem3 = document.createElement("div");
	sliderLineItem3.classList.add("slider__line-item");
	sliderLine.append(sliderLineItem3);

	const itemTitle3 = document.createElement("p");
	itemTitle3.classList.add("slider__title-style");
	itemTitle3.textContent = "Почувствуйте прогресс";
	sliderLineItem3.append(itemTitle3);

	const itemSubtitle3 = document.createElement("p");
	itemSubtitle3.classList.add("slider__subtitle-style");
	itemSubtitle3.textContent =
		"Маленькие каждодневные шаги со временем приведут к большим свершениям. Ставьте цели на день и неделю, отражайте тренды своей продуктивности графически.";
	sliderLineItem3.append(itemSubtitle3);

	const sliderDots = document.createElement("div");
	sliderDots.classList.add("slider__dots");
	slider.append(sliderDots);

	const sliderDot1 = document.createElement("div");
	sliderDot1.classList.add("slider__dot", "slider__dot-active");
	sliderDots.append(sliderDot1);

	const sliderDot2 = document.createElement("div");
	sliderDot2.classList.add("slider__dot");
	sliderDots.append(sliderDot2);

	const sliderDot3 = document.createElement("div");
	sliderDot3.classList.add("slider__dot");
	sliderDots.append(sliderDot3);

	buttonPrev.type = "button";
	buttonPrev.classList.add("slider__button-prev");
	buttonPrev.innerHTML = "&#10094";
	slider.append(buttonPrev);

	buttonNext.type = "button";
	buttonNext.classList.add("slider__button-next");
	buttonNext.innerHTML = "&#10095";
	slider.append(buttonNext);

	container.append(slider);
};
