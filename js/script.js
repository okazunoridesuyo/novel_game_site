const btnMenu = document.querySelector(".btn--menu");
console.log(btnMenu);
const navMenu = document.querySelector(".nav ul");
const snsMenu = document.querySelector(".container--sns");

btnMenu.addEventListener("click", () => {
	navMenu.classList.toggle("on");
	snsMenu.classList.toggle("on");
});

window.addEventListener("resize", () => {
	navMenu.classList.remove("on");
	snsMenu.classList.remove("on");
});
