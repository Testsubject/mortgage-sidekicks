//Navigation Bar Black Fade
$(window).on('scroll', function () {
    if ($(window).scrollTop()) {
        $('.navigation-bar').addClass('black')
    } else {
        $('.navigation-bar').removeClass('black')
    }
})

const headerHeight = $(".navigation-bar").height()

$('a').click(function () {
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - headerHeight
    }, 400)
    return false
})

