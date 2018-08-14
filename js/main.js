
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
function plusSlides(n) {
    if(n === -1) {
        document.querySelector('.project-slider').classList.remove('parent-down');
    } else if(n === 1) {
        document.querySelector('.project-slider').classList.add('parent-down');
    }
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("project-slider__item");
    if (n > slides.length) {slideIndex = 1;} 
    if (n < 1) {slideIndex = slides.length;}
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active', 'inactive');
        if(i > (slideIndex-1)) {
            slides[slideIndex].classList.add('inactive');
        } else if(i === slides.length - 1) {
            slides[0].classList.add('inactive');
        }
    }
    slides[slideIndex-1].classList.add('active');
}