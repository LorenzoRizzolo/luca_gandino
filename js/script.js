const isMobile = $(window).width() < 1300;

$(document).ready(() => {
    if (!isMobile) {
        $(".panel").removeClass("hide").addClass("show");
    }

    function updateNavbarHeight() {
        const headerHeight = $("header").height();
        $(".panel .navbar").css("height", headerHeight);
        $("main").css("padding-top", headerHeight);
    }
    updateNavbarHeight();
    setInterval(updateNavbarHeight, 200);
});

$("header").ready(() => {
    $(".panel .navbar").css({ "height": $("header").height() });
});

$(document).on('scroll', () => {
    const scrollTop = $(document).scrollTop();
    if (scrollTop > 100) {
        $(".scroll_top").css({ "opacity": "1" });
    } else {
        $(".scroll_top").css({ "opacity": "0" });
    }
});

$('.scroll-btn').on('click', function() {
    const target = $(this).data('target');
    $('html, body').animate({
        scrollTop: $(target).offset().top - 200
    }, 800);
});

$(".scroll_top").on("click", () => {
    $('html, body').animate({
        scrollTop: 0
    }, 800);
});

function copyDivToClipboard(text, alert_m) {
    navigator.clipboard.writeText(text);
    alert(alert_m);
}

$(".menu").on("click", (event) => {
    event.stopPropagation();
    $(".panel").removeClass("hide").addClass("show");
    $("html").addClass("no-scroll");  // Disabilita lo scroll della pagina
});

$(".close, .panel .pages button").on("click", () => {
    if (isMobile) {
        $(".panel").removeClass("show").addClass("hide");
        $("html").removeClass("no-scroll");  // Riabilita lo scroll della pagina
    }
});

$(document).on("click", (event) => {
    if (!$(event.target).closest('.panel').length && $(".panel").hasClass("show")) {
        $(".panel").removeClass("show").addClass("hide");
        $("html").removeClass("no-scroll");  // Riabilita lo scroll quando si chiude la .panel
    }
});

