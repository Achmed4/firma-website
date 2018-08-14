
$(document).ready(function(){
    // init the filter
    var $btns = $('.filter-list a').click(function() {
        if (this.id == 'all') {
            $('.projects-grid > .projects-grid__item').fadeIn(500);
            $('.projects-grid > .projects-grid__item').removeClass('projects-grid__item--active');
        } else {
            var $el = $('.' + this.id).fadeIn(500);
            $el.addClass('projects-grid__item--active');
            $('.projects-grid > .projects-grid__item').not($el).hide();
        }
        $btns.parent().removeClass('active');
        $(this).parent().addClass('active');
    });    

});

// init the slider
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n, dir) {
    showSlides(slideIndex += n, dir);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n, dir) {
    var i;
    var slides = document.getElementsByClassName("project-slider__item");
    if (n > slides.length) {slideIndex = 1;} 
    if (n < 1) {slideIndex = slides.length;}
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active', 'inactive');
        if(dir === 'up') {
            if(i > (slideIndex-1)) {
                slides[slideIndex].classList.add('inactive');
            } else if(i === slides.length - 1) {
                slides[0].classList.add('inactive');
            }
        } else {
            if(i < (slideIndex-1)) {
                slides[slideIndex - 2].classList.add('inactive');
            } else if((slideIndex-1) === 0) {
                slides[slides.length-1].classList.add('inactive');
            }
        }
    }
    slides[slideIndex-1].classList.add('active');
}

var sliderNav = document.querySelector('.project-slider__nav');
sliderNav.onclick = function(e) {
    if(e.target.classList.contains('prev-btn')) {
        plusSlides(-1, 'up');
    } else if(e.target.classList.contains('next-btn')) {
        plusSlides(1, 'down');
    }
};