const isMobile = navigator.userAgentData.mobile;

$(document).ready(()=>{
    if(!isMobile){
        $(".panel").removeClass("hide")
        $(".panel").addClass("show")
    }
})

$(document).on('scroll', () => {
    const scrollTop = $(document).scrollTop();
    // const documentHeight = $(document).height();
    // const windowHeight = $(window).height();
    // const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;

    if (scrollTop > 100) {
        $(".scroll_top").css({ "opacity": "1" });
        // const newWidth = 50 + (scrollPercent * 0.5);    
        // $("header h1 img").css({
        //     "width": `${newWidth}px`,
        //     "opacity": 1,
        // });
    } else {
        $(".scroll_top").css({ "opacity": "0" });
        // $("header h1 img").css({
        //     "width": "0px",
        //     "opacity": 0, 
        // });
    }
});

$('.scroll-btn').on('click', function() {
    // Ottieni il valore dell'attributo data-target
    const target = $(this).data('target');

    $('html, body').animate({
        scrollTop: $(target).offset().top - 200
    }, 800); // 800 millisecondi per l'animazione, puoi cambiare il tempo se vuoi
});

$(".scroll_top").on("click", ()=>{
    $('html, body').animate({
        scrollTop: 0
    }, 800); // 800 millisecondi per l'animazione, puoi cambiare il tempo se vuoi
})

function copyDivToClipboard(text, alert_m) {
    console.log(alert_m)
    navigator.clipboard.writeText(text);
    alert(alert_m)
}

$(".menu").on("click", ()=>{
    $(".panel").removeClass("hide")
    $(".panel").addClass("show")
})
$(".close, .panel .pages button").on("click", ()=>{
    if(isMobile){
        $(".panel").removeClass("show")
        $(".panel").addClass("hide")
    }
})
