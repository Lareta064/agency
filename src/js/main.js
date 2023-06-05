document.addEventListener('DOMContentLoaded', function () {

	/*=======  показать/скрыть мобильное меню =========== */
	const headerMenu = document.querySelector('#header-menu');
	const menuToggle = document.querySelector('#menu-toggle');

	menuToggle.addEventListener('click', function () {
		if (!menuToggle.classList.contains('active')) {
			headerMenu.classList.add('open');
			this.classList.add('active');
		} else {
			headerMenu.classList.remove('open');
			this.classList.remove('active');
		}

	})
});