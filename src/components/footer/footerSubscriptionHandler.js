import { footerSubscriptionForm, subscriptionInput } from ".";
import { addSubscription } from "../../api";
import { isEmailValid } from "../../utils/isEmailValid";

export const footerSubscriptionHandler = (email) => {
	if (isEmailValid(email)) {
		addSubscription(email);

		subscriptionInput.value = "";

		const done = document.createElement("div");
		done.innerHTML = "Email успешно добавлен ! <br>";
		done.classList.add("subscription-done");
		footerSubscriptionForm.append(done);

		setTimeout(() => {
			done.remove();
		}, 2000);
	} else {
		const error = document.createElement("div");
		error.innerHTML = "Некорректный Email ! <br>";
		error.classList.add("subscription-error");

		footerSubscriptionForm.append(error);

		setTimeout(() => {
			error.remove();
		}, 2000);
	}
};
