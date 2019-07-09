$(document).ready(() => {
    $(".navbar").on('mouseenter', () => {
        $('.navbar-nav').show();
    });
    $('.navbar-nav').on('mouseleave', () => {
        $('.navbar-nav').hide();
    });
});