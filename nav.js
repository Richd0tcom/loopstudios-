function onClickMenu(){
	document.getElementById("menu").classList.toggle("change");
	document.getElementById("nav").classList.toggle("change");
	
	document.getElementById("menu-bg").classList.toggle("change-bg");
};

window.addEventListener('scroll', function(){
	let header = document.querySelector('header');
	let madder=window.scrollY>0;
	header.classList.toggle('scrolling-active',madder);
});

disableScroll(){
	
}


