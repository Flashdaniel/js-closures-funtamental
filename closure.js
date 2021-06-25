/** @format */
function makeSizer(size) {
	return function () {
		document.body.style.fontSize = size + "px";
	};
}

let size12 = makeSizer(12);
let size16 = makeSizer(16);
let size18 = makeSizer(18);

document.querySelector(".size-12").addEventListener("click", size12);
document.querySelector(".size-16").addEventListener("click", size16);
document.querySelector(".size-18").addEventListener("click", size18);
