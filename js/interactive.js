var link = document.querySelector(".js-write-us");
var writeus = document.querySelector(".modal-feedback");
var close = writeus.querySelector(".feedback-close-btn");
var fullname = writeus.querySelector("[name=fullname]");
var form = writeus.querySelector("form");
var mail = writeus.querySelector("[name=email]");
var info = writeus.querySelector("[name=message]");
var mapLink = document.querySelector(".static-map");
var mapOpen = document.querySelector(".map-popup");
var mapClose = document.querySelector(".map-close-btn");
var toggle1 = document.querySelector("#js-toggle-1");
var toggle2 = document.querySelector("#js-toggle-2");
var toggle3 = document.querySelector("#js-toggle-3");

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	writeus.classList.add("feedback-show");
	fullname.focus();
});

close.addEventListener("click", function(evt) {
	evt.preventDefault();
	writeus.classList.remove("feedback-show");
	writeus.classList.remove("feedback-error");
});

form.addEventListener("submit", function(evt) {
	if (!fullname.value || !mail.value || !info.value) {
		evt.preventDefault();
		writeus.classList.remove("feedback-error");
		writeus.offsetWidth = writeus.offsetWidth;
		writeus.classList.add("feedback-error");
	}
});

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		
		if (writeus.classList.contains("feedback-show")) {
			writeus.classList.remove("feedback-show");
		}
	}
});

mapLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	mapOpen.classList.add("map-show");
});

mapClose.addEventListener("click", function(evt) {
	evt.preventDefault();
	mapOpen.classList.remove("map-show");
});

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();

		if (mapOpen.classList.contains("map-show")) {
			mapOpen.classList.remove("map-show");
		}
	}
});

var switchSlide = function (slide) {
	var activeToggle = slide.getAttribute("id").slice(10);
	document.querySelector(".service-btn.active").classList.remove("active");
	document.querySelector(".services-slider-item.js-show-slide").classList.remove("js-show-slide");
	slide.classList.add("active");
	document.querySelector("#js-slider-" + activeToggle).classList.add("js-show-slide");
};

toggle1.addEventListener("click", function() {
	switchSlide(this);
});

toggle2.addEventListener("click", function() {
	switchSlide(this);
});

toggle3.addEventListener("click", function() {
	switchSlide(this);
});