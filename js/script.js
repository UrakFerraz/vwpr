let slidesOverflow = document.querySelector('.heroSliderOverflow');
const slidesContainer = document.querySelector('.heroSlider');
const dotsContainer = document.querySelector('.sliderDotsWrapper');
const slideTime = 5000;
let cont = 0;
let slideAtual = 1;
let paused = false;
let slides = slidesOverflow.children;
slides = Array.from(slides);
const totalSlides = slidesOverflow.childElementCount;
let timeBar = document.querySelector('.timeBar');

slidesOverflow.style.gridTemplateColumns = `repeat(${totalSlides}, 100%)`;

for(let i = 0;i <= totalSlides -1; i++) {
	const dot = document.createElement('div');
	dot.className = 'boxModel sliderDots';
	dotsContainer.appendChild(dot);
}

let dots = dotsContainer.children;
dots = Array.from(dots);
dots[cont].style.opacity = '1.0';

const rightSlideBtn = document.querySelector('.sliderArrowsBtnsRight').addEventListener('click', nextSlide);

const leftSlideBtn = document.querySelector('.sliderArrowsBtnsLeft').addEventListener('click', prevSlide);

function nextSlide() {
	if(slideAtual === 1) {
		cont += 1;
		slideAtual += 1;
		slides.forEach(function(el) {
			el.style.transform = `translateX(-${cont}00%)`;
		});
	} else if (slideAtual >= totalSlides) {
		cont = 0;
		slideAtual = 1;
		slides.forEach(function(el) {
			el.style.transform = `translateX(${cont}00%)`;
		});
	} else {
		cont += 1;
		slideAtual += 1;
		slides.forEach(function(el) {
			el.style.transform = `translateX(-${cont}00%)`;
		});
	};
	dots.forEach(function(el) {
		el.style.opacity = '0.3';
	});
	dots[cont].style.opacity = '1.0';
	timeBarAnim();
};

function prevSlide() {
	if(slideAtual != 1) {
		cont -= 1;
		slideAtual -= 1;
		slides.forEach(function(el) {
			el.style.transform = `translateX(-${cont}00%)`;
		});
	} else if (slideAtual === 1) {
		cont = totalSlides -1;
		slideAtual = totalSlides;
		slides.forEach(function(el) {
			el.style.transform = `translateX(-${cont}00%)`;
		});
	};
	dots.forEach(function(el) {
		el.style.opacity = '0.3';
	});
	dots[cont].style.opacity = '1.0';
	timeBarAnim();
};

function dotClicked(el) {
	if(el.target.classList.contains('sliderDots')) {
		dots.forEach(function(el) {
			el.style.opacity = '0.3';
		});
		el.target.style.opacity = '1.0';
		cont = dots.indexOf(el.target);
		slideAtual = cont +1;
		slides.forEach(function(e) {
			e.style.transform = `translateX(-${cont}00%)`;
		});
	}
	timeBar.style.animationPlayState = 'paused';
	timeBar.style.animationName = 'none';
};

slidesContainer.addEventListener('click', dotClicked);

let playSlides = setInterval(nextSlide, slideTime);
let playTimeBar = setInterval(timeBarAnim, slideTime);

function pauseSlides() {
	clearInterval(playSlides);
	timeBar.style.animationPlayState = 'paused';
	timeBar.style.animationName = 'none';
	clearInterval(playTimeBar);
};

function resumeSlides() {
	clearInterval(playSlides);
	clearInterval(playTimeBar);
	playSlides = setInterval(nextSlide, slideTime);
	playTimeBar = setInterval(timeBarAnim, slideTime);
};

slidesContainer.addEventListener('mouseover', pauseSlides);
slidesContainer.addEventListener('mouseout', resumeSlides);

function timeBarAnim() {
	timeBar.style.animationPlayState = '´paused';
	timeBar.style.animationName = 'none';
	timeBar.style.animationName = 'timeBarAmination';
	timeBar.style.animationFillMode = 'backwards';
	timeBar.style.animationDuration = `${slideTime}ms`;
	timeBar.style.animationPlayState = 'running';
	timeBar.style.animationIterationCount = 'infinite';
};



























let contNews = 0;

function nextNews() {
	const newsBlocks = document.querySelectorAll('.newsSectionWrapperOverflow');
	if(contNews >= newsBlocks.length -1) {
		contNews = 0;
		newsBlocks.forEach(function(el) {
			el.style.transform = `translateX(-${contNews}00%)`;
		});
	} else {	
		contNews += 1;
		newsBlocks.forEach(function(el) {
			el.style.transform = `translateX(-${contNews}00%)`;
		})
	}
};

function prevNews() {
	const newsBlocks = document.querySelectorAll('.newsSectionWrapperOverflow');
	if(contNews === 0) {
		contNews = newsBlocks.length - 1;
		console.log(contNews);
		newsBlocks.forEach(function(el) {
			el.style.transform = `translateX(-${contNews}00%)`;
		});
	} else {
		contNews -= 1;
		console.log(contNews);
		newsBlocks.forEach(function(el) {
			el.style.transform = `translateX(-${contNews}00%)`;
		})		
	}
}

document.querySelector('.newsArrowsBtnsRight').addEventListener('click', nextNews);
document.querySelector('.newsArrowsBtnsLeft').addEventListener('click', prevNews);


















let contCars = 0;

function nextCars() {
	const carBlocks = document.querySelectorAll('.carsSectionWrapperOverflow');
	if(contCars >= carBlocks.length -1) {
		contCars = 0;
		carBlocks.forEach(function(el) {
			el.style.transform = `translateX(-${contCars}00%)`;
		});
	} else {	
		contCars += 1;
		carBlocks.forEach(function(el) {
			el.style.transform = `translateX(-${contCars}00%)`;
		})
	}
};

function prevCars() {
	const carBlocks = document.querySelectorAll('.carsSectionWrapperOverflow');
	if(contCars === 0) {
		contCars = carBlocks.length - 1;
		console.log(contCars);
		carBlocks.forEach(function(el) {
			el.style.transform = `translateX(-${contCars}00%)`;
		});
	} else {
		contCars -= 1;
		console.log(contCars);
		carBlocks.forEach(function(el) {
			el.style.transform = `translateX(-${contCars}00%)`;
		})		
	}
}

document.querySelector('.carsArrowsBtnsRight').addEventListener('click', nextCars);
document.querySelector('.carsArrowsBtnsLeft').addEventListener('click', prevCars);





















let contTweets = 0;

function nextTweets() {
	const tweetBlocks = document.querySelectorAll('.twitterSectionWrapperOverflow');
	if(contTweets >= tweetBlocks.length -1) {
		contTweets = 0;
		tweetBlocks.forEach(function(el) {
			el.style.transform = `translateX(-${contTweets}00%)`;
		});
	} else {	
		contTweets += 1;
		tweetBlocks.forEach(function(el) {
			el.style.transform = `translateX(-${contTweets}00%)`;
		})
	}
};

function prevTweets() {
	const tweetBlocks = document.querySelectorAll('.twitterSectionWrapperOverflow');
	if(contTweets === 0) {
		contTweets = tweetBlocks.length - 1;
		console.log(contTweets);
		tweetBlocks.forEach(function(el) {
			el.style.transform = `translateX(-${contTweets}00%)`;
		});
	} else {
		contTweets -= 1;
		console.log(contTweets);
		tweetBlocks.forEach(function(el) {
			el.style.transform = `translateX(-${contTweets}00%)`;
		})		
	}
}

document.querySelector('.twitterArrowsBtnsRight').addEventListener('click', nextTweets);
document.querySelector('.twitterArrowsBtnsLeft').addEventListener('click', prevTweets);






















let contYoutube = 0;

function nextYoutube() {
	const youtubeBlocks = document.querySelectorAll('.youtubeSectionWrapperOverflow');
	if(contYoutube >= youtubeBlocks.length -1) {
		contYoutube = 0;
		youtubeBlocks.forEach(function(el) {
			el.style.transform = `translateX(-${contYoutube}00%)`;
		});
	} else {	
		contYoutube += 1;
		youtubeBlocks.forEach(function(el) {
			el.style.transform = `translateX(-${contYoutube}00%)`;
		})
	}
};

function prevTweets() {
	const youtubeBlocks = document.querySelectorAll('.youtubeSectionWrapperOverflow');
	if(contYoutube === 0) {
		contYoutube = youtubeBlocks.length - 1;
		console.log(contYoutube);
		youtubeBlocks.forEach(function(el) {
			el.style.transform = `translateX(-${contYoutube}00%)`;
		});
	} else {
		contYoutube -= 1;
		console.log(contYoutube);
		youtubeBlocks.forEach(function(el) {
			el.style.transform = `translateX(-${contYoutube}00%)`;
		})		
	}
}

document.querySelector('.youtubeArrowsBtnsRight').addEventListener('click', nextYoutube);
document.querySelector('.youtubeArrowsBtnsLeft').addEventListener('click', prevTweets);