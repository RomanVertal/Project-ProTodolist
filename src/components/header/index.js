import mainLogo from "../../../public/images/main_logo.png";
import { createSlider } from "../slider";

export const header = document.createElement("header");
export const headerTop = document.createElement("div");

export const createHeader = (container) => {
	header.classList.add("header");

	headerTop.classList.add("header__top");
	header.append(headerTop);

	const headerTopLogo = document.createElement("div");
	headerTopLogo.classList.add("header__top-logo");
	headerTop.append(headerTopLogo);

	const headerTopLogoImg = document.createElement("img");
	headerTopLogoImg.src = mainLogo;
	headerTopLogoImg.alt = "logo_ProTodoList";
	headerTopLogoImg.title = "ProTodoList";
	headerTopLogo.append(headerTopLogoImg);

	const headerTopLogoTitle = document.createElement("span");
	headerTopLogoTitle.classList.add("header__top-logo-title");
	headerTopLogoTitle.innerHTML = "<span>Pro</span>Todolist";
	headerTopLogo.append(headerTopLogoTitle);

	const headerCenter = document.createElement("div");
	headerCenter.classList.add("header__center");
	header.append(headerCenter);

	createSlider(headerCenter);

	container.append(header);
};
