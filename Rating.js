window.onload = function() {
	var items = document.querySelectorAll('.item');

	// 1. lighten the star when mouse is over the star items
	function overStar() {

		//var id = parseInt(this.id,10)	

		for (let i = 0; i < this.id; i++) {
			items[i].classList.add('over');
		}
	}
	// add listner to each star items
	for (let i = 0; i < items.length; i++) {
		items[i].addEventListener('mouseover', overStar)
	};


	// 2. turn off star when the mouse leave that star, and is over another star
	function leaveStar() {

		if (!star - container.classList.contains('clicked')) {
			for (let i = 0; i < this.id; i++) {
				items[i].classList.remove('over')
			}
		}
	}
	// add listner to each star items
	for (let i = 0; i < items.length; i++) {
		items[i].addEventListener('mouseleave', leaveStar)
	};

	// 3. pop up the sescription text when clicked
	function clicked() {
		// remove current poped text
		let currOnElem = document.querySelector('.popText');
		// in case currOnELem is null value
		if (currOnElem) {
			currOnElem.classList.remove('popText');
		}

		for (let i = this.id; i < items.length; i++) {
			items[i].classList.remove('over')
		}

		// pop corresponding text
		let targetElemId = 'description' + this.id;
		targetElemId = '#' + targetElemId;
		let targetElem = document.querySelector(targetElemId);
		targetElem.classList.add('popText')

		// add clicked to class list
		star - container.classList.add('clicked')
	}


	// add listner to each star items
	for (let i = 0; i < items.length; i++) {
		items[i].addEventListener('click', clicked)
	};
};