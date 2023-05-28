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

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ/
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

const main = document.querySelector('.main');

let clickedNumber = () => {
	console.log(document.querySelector('div').textContent);
	return document.querySelector('.random').textContent;
};
const callWords = () => {
	fetch(
		`https://jlpt-vocab-api.vercel.app/api/words/random?level=${clickedNumber}`
	)
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			console.log(data.furigana, data.word);
			// const word =   document.createElement('div');
			// word.textContent = data.word;
			// document.body.appendChild(word);
			modal.innerHTML = `
      ${data.level}급 단어
      히라가나 : ${data.furigana}  
      한자 : ${data.word}
      뜻 : ${data.meaning}
      발음 : ${data.romaji}`;
		});
};

oneRandom.addEventListener('click', () => {
	modal.style.display = 'block';
	main.innerHTML = '';
	callWords();
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
	console.log('222222222222222222222222222222222');
});
