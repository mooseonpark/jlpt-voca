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
