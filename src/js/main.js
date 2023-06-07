document.addEventListener('DOMContentLoaded', function () {

	/*=======  показать/скрыть мобильное меню =========== */
	const headerMenu = document.querySelector('#header-menu');
	const menuToggle = document.querySelector('#menu-toggle');
	const bodyEl = document.body;
	/*=== показать/скрыть моб меню по клику по бургеру */
	menuToggle.addEventListener('click', ()=>{
		if (!menuToggle.classList.contains('active')) {
			headerMenu.classList.add('open');
			menuToggle.classList.add('active');
			body.classList.add('lock');
		} else {
			headerMenu.classList.remove('open');
			menuToggle.classList.remove('active');
			bodyEl.classList.remove('lock');
		}

	});
	/*=== закрыть моб меню по клику по нему */
	headerMenu.addEventListener('click', ()=>{
		headerMenu.classList.remove('open');
		menuToggle.classList.remove('active');
		bodyEl.classList.remove('lock');
	});
	/*=== закрыть моб меню при ресайзе экрана */
	window.addEventListener('resize', ()=>{
		if (window.innerWidth != window.innerHeight){
			headerMenu.classList.remove('open');
			menuToggle.classList.remove('active');
			bodyEl.classList.remove('lock');
		}
		
	});
	/* =======header-slider ========= */
	$('#header-slider').slick({
		infinite: true,
		speed: 600,
		fade: true,
		dots: true
		
	});
	/* ======= partners-slider ========= */
	$('#partners-slider').slick({
		infinite: true,
		speed: 600,
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 2.1,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true
				}
			}
		]
	});
	/* ======= partners-traffic ========= */
	$('#partners-traffic').slick({
		infinite: true,
		speed: 600,
		slidesToShow: 6,
		responsive: [
			{
				breakpoint: 1439,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1,
					infinite: true,
					
				}
			},
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: true,
					
				}
			},
			
			{
				breakpoint: 1023,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					
				}
			},
			{
				breakpoint: 574,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					
				}
			}
		]
	});
	
});