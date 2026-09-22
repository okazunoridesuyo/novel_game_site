const btnMenu = document.querySelector(".btn--menu");
const navMenu = document.querySelector(".nav ul");
const snsMenu = document.querySelector(".container--sns");

btnMenu.addEventListener("click", () => {
	btnMenu.classList.toggle("on");
	navMenu.classList.toggle("on");
	snsMenu.classList.toggle("on");
});

window.addEventListener("resize", () => {
	btnMenu.classList.remove("on");
	navMenu.classList.remove("on");
	snsMenu.classList.remove("on");
});
