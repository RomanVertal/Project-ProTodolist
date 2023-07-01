import { createLoginAuto } from "./api";
import { createFooter } from "./components/footer";
import { createHeader, headerTop } from "./components/header";
import { createHeaderAccountButton } from "./components/header/headerAccountButton";
import { createHeaderAccountUser } from "./components/header/headerAccountUser";
import { createMain, main } from "./components/main";
import { sliderHandler } from "./components/slider/sliderHandler";
import { createStartPage } from "./components/startPage";
import { createWrapper, wrapper } from "./components/wrapper";
import "./style/style.scss";
import "./style/styleAccount.scss";
import "./style/styleModalForm.scss";
import "./style/styleStartPage.scss";
import "./style/styleTaskItem.scss";
import { decryptionData } from "./utils/encryption";

const initApp = () => {
	createWrapper();
	createHeader(wrapper);
	createMain(wrapper);
	if (localStorage.user) {
		const login = decryptionData(localStorage.user);
		createHeaderAccountUser(headerTop, login);
		createLoginAuto(login);
	} else {
		createHeaderAccountButton(headerTop);
		createStartPage(main);
	}

	createFooter(wrapper);
	document.body.append(wrapper);
	sliderHandler();
};

initApp();

console.log(localStorage);
