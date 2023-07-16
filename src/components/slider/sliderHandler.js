import { buttonNext, buttonPrev, slider, sliderLine } from ".";

export const sliderHandler = () => {
	let position = 0;
	let dotIndex = 0;
	const dots = document.querySelectorAll(".slider__dot");
	const widthSlide = slider.offsetWidth;
	const amountSlides = document.querySelectorAll(".slider__line-item").length;
	const maxPositionSlide = widthSlide * (amountSlides - 1);

	const dotActive = (index) => {
		dots.forEach((item) => {
			item.classList.remove("slider__dot-active");
		});
		dots[index].classList.add("slider__dot-active");
	};

	const onNextSlide = () => {
		if (position > -maxPositionSlide) {
			position += -widthSlide;
			dotIndex += 1;
			dotActive(dotIndex);
		} else {
			position = 0;
			dotIndex = 0;
			dotActive(dotIndex);
		}

		sliderLine.style.left = `${position}px`;
	};

	const onPrevSlide = () => {
		if (position >= 0) {
			position = -maxPositionSlide;
			dotIndex = amountSlides - 1;
			dotActive(dotIndex);
		} else {
			position += widthSlide;
			dotIndex -= 1;
			dotActive(dotIndex);
		}

		sliderLine.style.left = `${position}px`;
	};

	dots.forEach((item, index) => {
		item.addEventListener("click", () => {
			position = -widthSlide * index;
			sliderLine.style.left = `${position}px`;
			dotIndex = index;
			dotActive(index);
		});
	});

	setInterval(() => {
		onNextSlide();
	}, 10000);

	buttonNext.addEventListener("click", onNextSlide);
	buttonPrev.addEventListener("click", onPrevSlide);
};
