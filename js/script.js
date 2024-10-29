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

function copyDivToClipboard(text) {
    console.log(text)
    navigator.clipboard.writeText(text);
    alert("Numero di telefono copiato")
}
