// navbar toggle button -----------------------------------------
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

// modal --------------------------------------------------------
const modal = document.querySelector('.modal');
const main = document.querySelector('.main');
const p = document.querySelector('.modal p');

const oneRandom = document.querySelector('.random .one');
const twoRandom = document.querySelector('.random .two');
const threeRandom = document.querySelector('.random .three');
const fourRandom = document.querySelector('.random .four');
const fiveRandom = document.querySelector('.random .five');

const oneAll = document.querySelector('.all .one');
const twoAll = document.querySelector('.all .two');
const threeAll = document.querySelector('.all .three');
const fourAll = document.querySelector('.all .four');
const fiveAll = document.querySelector('.all .five');

let clickedNumber = document.querySelector('.level-box');
clickedNumber.addEventListener('click', (e) => {
	clickedNumber = e.target.innerText;
	console.log(clickedNumber.value);
});

// call words api ------------------------------------------------
const callWords = () => {
	fetch(
		`https://jlpt-vocab-api.vercel.app/api/words/random?level=${clickedNumber}`
	)
		.then((response) => response.json())
		.then((data) => {
			modal.innerHTML = '';
			let level = document.createElement('h2');
			let p = document.createElement('p');
			let button = document.createElement('button');
			let check = document.createElement('input');

			modal.appendChild(level).innerText = `[ ${data.level}급 단어 ]`;
			modal.appendChild(p).innerText = `
      ✍
      
			◾ 히라가나 : ${data.furigana}
      ◽ 한자 : ${data.word}
      ◾ 발음 : ${data.romaji}
      ◽ 뜻 : ${data.meaning}

      ✔ 암기완료?
      👇 체크!`;
			modal.appendChild(check).type = 'checkbox';
			modal.appendChild(button).innerText = '닫기';
			button.classList.add('button');
			const backBtn = document.querySelector('.button');
			backBtn.addEventListener('click', () => {
				modal.style.display = 'none';
				main.style.display = 'block';
			});
		});
};

// call all words -----------------------------------------------
const callAllWords = () => {
	const time = document.createElement('h1');
	modal.appendChild(time).innerText = '⏱단어를 불러오는 중입니다!⏱';
	setTimeout(() => modal.removeChild(time), 900);

	fetch(
		`https://jlpt-vocab-api.vercel.app/api/words/all?level=${clickedNumber}`
	)
		.then((response) => response.json())
		.then((data) => {
			const num = document.createElement('h2');
			const p = document.createElement('p');
			const button = document.createElement('button');
			modal.appendChild(button).innerText = 'back';
			modal.appendChild(
				num
			).innerText = `총 ${data.length}개의 단어를 불러왔습니다.`;
			modal.appendChild(p).innerText = data.map(
				(word) => `
      👉 히라가나 : ${word.furigana}
      👉 한자 : ${word.word}
      👉 발음 : ${word.romaji}
      👉 뜻 : ${word.meaning}

      🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵
      
      `
			);
			button.addEventListener('click', () => {
				modal.style.display = 'none';
				main.style.display = 'block';
			});
		});
	modal.innerHTML = null;
	const time1 = document.createElement('h1');
	modal.appendChild(time1).innerText = '⏱단어를 불러오는 중입니다!⏱';
	setTimeout(() => modal.removeChild(time1), 1200);
};

// each level box 1 ~ 5 --------------------------------------
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

oneAll.addEventListener('click', () => {
	modal.style.display = 'block';
	main.style.display = 'none';
	callAllWords();
});

twoAll.addEventListener('click', () => {
	modal.style.display = 'block';
	main.style.display = 'none';
	callAllWords();
});

threeAll.addEventListener('click', () => {
	modal.style.display = 'block';
	main.style.display = 'none';
	callAllWords();
});

fourAll.addEventListener('click', () => {
	modal.style.display = 'block';
	main.style.display = 'none';
	callAllWords();
});

fiveAll.addEventListener('click', () => {
	modal.style.display = 'block';
	main.style.display = 'none';
	callAllWords();
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
