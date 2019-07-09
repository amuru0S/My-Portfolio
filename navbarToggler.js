$(document).ready(() => {
    $(".navbar-toggler").on('mouseenter', () => {
        $('#Navbar').show();
    });
    $('#Navbar').on('mouseleave', () => {
        $('#Navbar').hide();
    });
});