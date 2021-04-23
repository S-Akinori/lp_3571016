$(function() {
    var $topButton = $('#topScrollButton');
    $topButton.hide();

    $(window).scroll(function () {
        if($(this).scrollTop() > 100) {
            $topButton.fadeIn();
        } else {
            $topButton.fadeOut();
        }
    });
    $topButton.on('click', function() {
        $('body, html').animate({scrollTop: 0}, 500);
        return false;
    });
});