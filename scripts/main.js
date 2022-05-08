let myImage = document.querySelector("img");
myImage.onclick = function () {
	let mySrc = myImage.getAttribute("src");
	if (mySrc === "images/firefox-icon.png") {
		myImage.setAttribute("src", "images/logo512.png");
	} else {
		myImage.setAttribute("src", "images/firefox-icon.png");
	}
};

if (!localStorage.getItem("name")) {
	setUserName();
} else {
	let storedName = localStorage.getItem("name");
	updateUserName(username = storedName);
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
myButton.onclick = function () {
	setUserName();
};

function setUserName() {
	let myName = prompt("Please enter your name.");
	localStorage.setItem("name", myName);
	updateUserName(username = myName);
}

function updateUserName(username: String){
    myHeading.textContent = "My new name is " + username;
}