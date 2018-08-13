
$(document).ready(function(){
    // init Custom Filter
    var $btns = $('.filter-list a').click(function() {
        if (this.id == 'all') {
            $('.projects-grid > .projects-grid__item').fadeIn(500);
        } else {
            var $el = $('.' + this.id).fadeIn(500);
            $('.projects-grid > .projects-grid__item').not($el).hide();
        }
        $btns.parent().removeClass('active');
        $(this).parent().addClass('active');
    });

});