// document.getElementById('btn').onclick = function () {
// 	fetch('https://jlpt-vocab-api.vercel.app/api/words/random?level=1')
// 		.then((response) => response.json())
// 		.then((data) => console.log(data));
// };

const toggleButton = document.querySelector('.navbar-toggle');
const menu = document.querySelector('.navbar-menu');
const side = document.querySelector('.navbar-side');

toggleButton.addEventListener('click', () => {
	menu.classList.toggle('active');
	side.classList.toggle('active');
});

// const toggleButton = document.querySelector('.navbar-toggle');
// const menu = document.querySelector('navbar-menu');
// const side = document.querySelector('navbar-side');

// toggleButton.addEventListener('click', () => {
// 	console.log('first');
// 	menu.classList.toggle('active');
// 	side.classList.toggle('active');
// });

// /ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ/
// const clickLevel = document.querySelectorAll('.click');

const modal = document.querySelector('.modal');

// clickLevel.addEventListener('click', () => {
// 	modal.style.display = 'block';
// });
const oneRandom = document.querySelector('.random .one');
const twoRandom = document.querySelector('.random .two');
const threeRandom = document.querySelector('.random .three');
const fourRandom = document.querySelector('.random .four');
const fiveRandom = document.querySelector('.random .five');

oneRandom.addEventListener('click', () => {
	modal.style.display = 'block';
	document.body.style.backgroundColor = '#f3f3f3';
});

twoRandom.addEventListener('click', () => {
	console.log('two click');
});
threeRandom.addEventListener('click', () => {
	console.log('three click');
});
fourRandom.addEventListener('click', () => {
	console.log('four click');
});
fiveRandom.addEventListener('click', () => {
	console.log('five click');
});
