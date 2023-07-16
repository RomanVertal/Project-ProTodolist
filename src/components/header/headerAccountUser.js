import userImg from "../../../public/images/logo_profile.png";

export const headerTopUser = document.createElement("div");

export const createHeaderAccountUser = (container, login) => {
	headerTopUser.classList.add("header__top-user");

	const userLogo = document.createElement("img");
	userLogo.src = userImg;
	headerTopUser.append(userLogo);

	const userLogin = document.createElement("span");
	userLogin.textContent = login;
	headerTopUser.append(userLogin);

	container.append(headerTopUser);
};
