$(document).ready(function () {

    $('.mek > a').click(function (e) {

        e.preventDefault();

        var cn = e.target.className;
        var block = '#' + cn;

        $('html,body').animate({scrollTop: $(block).offset().top}, 1000);

    });
});
