let bgScrol = document.getElementsByClassName("navbar")[0];

window.addEventListener("scroll", function () {

	const mesafe = window.scrollY;
	if (mesafe > 200) {
		bgScrol.classList.add("bgScrol");
	} else {
		bgScrol.classList.remove("bgScrol");
	}
});

let up = document.getElementsByClassName("yukari")[0];

window.addEventListener("scroll", function () {

	const mesafe = window.scrollY;
	if (mesafe > 200) {
		up.classList.add("yukariCik");
	} else {
		up.classList.remove("yukariCik");
	}
});
