const btnPrev = document.querySelector('.slider-prev');
const btnNext = document.querySelector('.slider-next');
const slider = document.querySelector('.slider');
const sliderBody = document.querySelector('.slider-body');
const dot = document.querySelectorAll('.dot');
const saleButtons = document.querySelectorAll('.sale-btn');
const sale = document.querySelectorAll('.sale-item');
const saleSection = document.querySelector('.sale');

let count = 0;

function sliderNext() {
    btnNext.addEventListener('click', function () {
        if (count == 0) {
            sliderBody.style.transform = 'translateX(-100%)';
            count += 1;
        } else if (count == 1) {
            sliderBody.style.transform = 'translateX(-200%)';
            count += 1;
        }
    })
}
sliderNext();

function sliderPrev() {
    btnPrev.addEventListener('click', function () {
        if (count == 2) {
            sliderBody.style.transform = 'translateX(-100%)';
            count -= 1;
        } else if (count == 1) {
            sliderBody.style.transform = 'translateX(0)';
            count -= 1;
        }
    })
}
sliderPrev();

function opacityButtons() {
    if (count == 0) {
        btnNext.style.opacity = '1';
        btnPrev.style.opacity = '0.5';
    } else if (count == 2) {
        btnNext.style.opacity = '0.5';
        btnPrev.style.opacity = '1';
    } else {
        btnNext.style.opacity = '1';
        btnPrev.style.opacity = '1';
    }
}
opacityButtons();
slider.addEventListener('click', function () {
    opacityButtons();
})


function moveDots() {
    dot.forEach(e => {
        e.addEventListener('click', function () {
            dot.forEach(d => d.classList.remove('active'));
            if (e.id == 'dot1') {
                sliderBody.style.transform = 'translateX(0)';
                count = 0;
                e.classList.add('active');
            } else if (e.id == 'dot2') {
                sliderBody.style.transform = 'translateX(-100%)';
                count = 1;
                e.classList.add('active');
            } else if (e.id == 'dot3') {
                sliderBody.style.transform = 'translateX(-200%)';
                count = 2;
                e.classList.add('active');
            }
        })
    })
}
moveDots();

function activeBtn () {
    saleButtons.forEach(e => {
        e.addEventListener('click', () => {
            saleButtons.forEach(d => d.classList.remove('active'));
            e.classList.add('active')
        })
    })
}
activeBtn();

function activeSale () {

    sale.forEach(e => {
        e.addEventListener('mouseover', () => {
            e.lastElementChild.style.display = 'flex';
            e.style.boxShadow = '0px 16px 32px rgba(0, 0, 0, 0.1)';
            e.style.height = '480px';
            saleSection.style.gap = '10px';
        })
        e.addEventListener('mouseout', () => {
            e.lastElementChild.style.display = 'none';
            e.style.boxShadow = 'none';
            e.style.height = '370px';
            saleSection.style.gap = '120px';
        })
    })
}
activeSale();

document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
	const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
	const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
	const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
	const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');

	dropDownBtn.addEventListener('click', function (e) {
		dropDownList.classList.toggle('dropdown__list--visible');
        this.classList.add('dropdown__button--active');
	});

	dropDownListItems.forEach(function (listItem) {
		listItem.addEventListener('click', function (e) {
			e.stopPropagation();
			dropDownBtn.innerText = this.innerText;
			dropDownBtn.focus();
			dropDownInput.value = this.dataset.value;
			dropDownList.classList.remove('dropdown__list--visible');
		});
	});

	document.addEventListener('click', function (e) {
		if (e.target !== dropDownBtn) {
			dropDownBtn.classList.remove('dropdown__button--active');
			dropDownList.classList.remove('dropdown__list--visible');
		}
	});

	document.addEventListener('keydown', function (e) {
		if (e.key === 'Tab' || e.key === 'Escape') {
			dropDownBtn.classList.remove('dropdown__button--active');
			dropDownList.classList.remove('dropdown__list--visible');
		}
	});
});

const heart = document.querySelectorAll('.heart');
function activeHeart() {
    let count = 0;
    heart.forEach(e => {
        e.addEventListener('click', () => {
            if(count === 0){
                e.style.backgroundImage = 'url(../assets/image/png/heartpress.png)';
                count += 1;
            } else if (count === 1) {
                e.style.backgroundImage = 'url(../assets/image/png/heart.png)';
                count -= 1;
            }
        })
    }) 
} 
activeHeart();
