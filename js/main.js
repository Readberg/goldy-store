const btnPrev = document.querySelector('.slider-prev');
const btnNext = document.querySelector('.slider-next');
const slider = document.querySelector('.slider');
const sliderBody = document.querySelector('.slider-body');
const dot = document.querySelectorAll('.dot')
const dot1 = document.getElementById('dot1');
const dot2 = document.getElementById('dot2');
const dot3 = document.getElementById('dot3');

let count = 0;

function sliderNext () {
    btnNext.addEventListener('click', function() {
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

function sliderPrev () {
    btnPrev.addEventListener('click', function() {
        if (count == 2) {
            sliderBody.style.transform = 'translateX(-100%)';
            count -= 1;
        } else if (count == 1){
            sliderBody.style.transform = 'translateX(0)';
            count -= 1;
        }
    })
}
sliderPrev();

function opacityButtons () {
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


function moveDots () {
    dot.forEach(e => {
        e.addEventListener('click', function () {
            if (e.id == 'dot1') {
                sliderBody.style.transform = 'translateX(0)';
                count = 0;
                dot1.classList.add('active-dot');
                dot2.classList.remove('active-dot');
                dot3.classList.remove('active-dot');            
            } else if (e.id == 'dot2') {
                sliderBody.style.transform = 'translateX(-100%)';
                count = 1;
                dot1.classList.remove('active-dot');
                dot2.classList.add('active-dot');
                dot3.classList.remove('active-dot');    
            } else if (e.id == 'dot3') {
                sliderBody.style.transform = 'translateX(-200%)';
                count = 2;
                dot1.classList.remove('active-dot');
                dot2.classList.remove('active-dot');
                dot3.classList.add('active-dot');  
            }
        })
    })
}
moveDots();

