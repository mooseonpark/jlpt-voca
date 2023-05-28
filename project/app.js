// navbar toggle button
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

// modal
const modal = document.querySelector('.modal');

const oneRandom = document.querySelector('.random .one');
const twoRandom = document.querySelector('.random .two');
const threeRandom = document.querySelector('.random .three');
const fourRandom = document.querySelector('.random .four');
const fiveRandom = document.querySelector('.random .five');

const main = document.querySelector('.main');

const p = document.querySelector('.modal p');

let clickedNumber = () => {
	console.log(document.querySelector('.click').innerText);
	return document.querySelector('.click').innerText;
};

// call words api
const callWords = () => {
	fetch(
		`https://jlpt-vocab-api.vercel.app/api/words/random?level=${clickedNumber}`
	)
		.then((response) => response.json())
		.then((data) => {
			console.log(data.furigana, data.word);
			let level = document.createElement('h2');
			let p = document.createElement('p');
			let button = document.createElement('button');
			modal.appendChild(level).innerText = `[ ${data.level}급 단어 ]`;
			modal.appendChild(p).innerText = `
      ✍
      
			◾ 히라가나 : ${data.furigana}
			  ◽ 한자 : ${data.word}
			  ◾ 뜻 : ${data.meaning}
			  ◽ 발음 : ${data.romaji}`;
			modal.appendChild(button).innerText = '❌';
		});
};

// go to main button
// const backBtn = document.querySelector('.modal');
// backBtn.addEventListener('click', () => {
// 	modal.style.display = 'none';
// 	main.style.display = 'block';
// });

// each level box 1 ~ 5
oneRandom.addEventListener('click', () => {
	modal.style.display = 'block';
	main.style.display = 'none';
	callWords();
});

twoRandom.addEventListener('click', () => {
	modal.style.display = 'block';
	main.style.display = 'none';
	callWords();
});
threeRandom.addEventListener('click', () => {
	modal.style.display = 'block';
	main.style.display = 'none';
	callWords();
});
fourRandom.addEventListener('click', () => {
	modal.style.display = 'block';
	main.style.display = 'none';
	callWords();
});
fiveRandom.addEventListener('click', () => {
	modal.style.display = 'block';
	main.style.display = 'none';
	callWords();
});

//-----
const walking = document.querySelector('.walking');
walking.addEventListener('click', () => {
	console.log('22222');
});

const text = document.querySelector('.bubble');

text.addEventListener('click', () => {
	console.log('five sssss');
});

//-----
const darkmode = document.querySelector('.darkmode');
darkmode.addEventListener('click', () => {
	darkmode.style.color = 'red';
	console.log('222222222222222222222222222222222');
});

const heading = document.querySelector('.heading');
heading.addEventListener('click', () => {
	console.log('head');
});
