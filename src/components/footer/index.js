import logoInstagram from "../../../public/images/logo_instagram_black.png";
import logoTelegram from "../../../public/images/logo_telegram_black.png";
import logoTwitch from "../../../public/images/logo_twitch_black.png";
import logoVk from "../../../public/images/logo_vk_black.png";
import logoYoutube from "../../../public/images/logo_youtube_black.png";
import { footerSubscriptionHandler } from "./footerSubscriptionHandler";

export const footerSubscriptionForm = document.createElement("div");
export const subscriptionInput = document.createElement("input");
export const createFooter = (container) => {
	const footer = document.createElement("footer");
	footer.classList.add("footer");

	const footerSubscription = document.createElement("div");
	footerSubscription.classList.add("footer__subscription");
	footer.append(footerSubscription);

	const footerSubscriptionInfo = document.createElement("div");
	footerSubscriptionInfo.classList.add("footer__subscription-info");
	footerSubscription.append(footerSubscriptionInfo);

	const subscriptionTitle = document.createElement("span");
	subscriptionTitle.textContent =
		"Подпишитесь и будьте первыми в курсе наших новостей!";
	footerSubscriptionInfo.append(subscriptionTitle);

	footerSubscriptionForm.classList.add("footer__subscription-form");
	footerSubscription.append(footerSubscriptionForm);

	const subscriptionForm = document.createElement("form");
	subscriptionForm.action = "";
	subscriptionForm.method = "get";
	subscriptionForm.target = "_self";
	footerSubscriptionForm.append(subscriptionForm);

	subscriptionInput.classList.add("footer__subscription-form-input");
	subscriptionInput.type = "email";
	subscriptionInput.placeholder = "Введите адрес эл.почты";
	subscriptionForm.append(subscriptionInput);

	const subscriptionButton = document.createElement("button");
	subscriptionButton.classList.add("footer__subscription-form-button");
	subscriptionButton.textContent = "Подписаться";
	subscriptionButton.type = "button";
	subscriptionForm.append(subscriptionButton);

	const footerSocialNetworks = document.createElement("div");
	footerSocialNetworks.classList.add("footer__social_networks");
	footer.append(footerSocialNetworks);

	const youtube = document.createElement("a");
	youtube.href = "https://www.youtube.com";
	youtube.target = "_blank";
	youtube.classList.add("social_networks_youtube", "social_networks_style");
	footerSocialNetworks.append(youtube);

	const youtubeImages = document.createElement("img");
	youtubeImages.src = logoYoutube;
	youtubeImages.alt = "Youtube";
	youtubeImages.title = "Youtube";
	youtube.append(youtubeImages);

	const instagram = document.createElement("a");
	instagram.href = "https://www.instagram.com/";
	instagram.target = "_blank";
	instagram.classList.add("social_networks_instagram", "social_networks_style");
	footerSocialNetworks.append(instagram);

	const instagramImages = document.createElement("img");
	instagramImages.src = logoInstagram;
	instagramImages.alt = "Instagram";
	instagramImages.title = "Instagram";
	instagram.append(instagramImages);

	const vk = document.createElement("a");
	vk.href = "https://vk.com/";
	vk.target = "_blank";
	vk.classList.add("social_networks_vk", "social_networks_style");
	footerSocialNetworks.append(vk);

	const vkImages = document.createElement("img");
	vkImages.src = logoVk;
	vkImages.alt = "VK";
	vkImages.title = "VK";
	vk.append(vkImages);

	const telegram = document.createElement("a");
	telegram.href = "https://telegram.org/";
	telegram.target = "_blank";
	telegram.classList.add("social_networks_telegram", "social_networks_style");
	footerSocialNetworks.append(telegram);

	const telegramImages = document.createElement("img");
	telegramImages.src = logoTelegram;
	telegramImages.alt = "Telegram";
	telegramImages.title = "Telegram";
	telegram.append(telegramImages);

	const twitch = document.createElement("a");
	twitch.href = "https://www.twitch.tv/";
	twitch.target = "_blank";
	twitch.classList.add("social_networks_twitch", "social_networks_style");
	footerSocialNetworks.append(twitch);

	const twitchImages = document.createElement("img");
	twitchImages.src = logoTwitch;
	twitchImages.alt = "Twitch";
	twitchImages.title = "Twitch";
	twitch.append(twitchImages);

	const footerInfo = document.createElement("div");
	footerInfo.classList.add("footer__info");
	footer.append(footerInfo);

	const footerInfoTitle = document.createElement("span");
	footerInfoTitle.classList.add("footer__info-title");
	footerInfoTitle.innerHTML =
		"ProTodolist — список дел и таск-менеджер № 1. <br> &#169; 2023  ";
	footerInfo.append(footerInfoTitle);

	subscriptionButton.addEventListener("click", () => {
		footerSubscriptionHandler(subscriptionInput.value);
	});

	container.append(footer);
};
