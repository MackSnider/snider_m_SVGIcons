 (() => {
	// stub
	console.log('Fired!');

	let theIcon = document.querySelector('.wrapper img'),
		theIcons = document.querySelectorAll('.wrapper img')

	function logMe() {
		console.log('clicked on an image!');
		console.log(this.id);
	}

	theIcon.addEventListener('click', logMe);

	theIcons.forEach(icon => icon.addEventListener("click", logMe))
})();