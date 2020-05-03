$(document).ready(function() {
    $(".jimg").hover(
    function() {
        $(this).addClass("animated pulse");
    }, 
    function() {
        $(this).removeClass("animated pulse");
    })

    $(".design-item1").on("click", function() {
        $(".design-item-description1").css("display", "grid");
    })

    $(".design-item2").on("click", function() {
        $(".design-item-description2").css("display", "grid");
    })

    $(".design-item3").on("click", function() {
        $(".design-item-description3").css("display", "grid");
    })

    $(".x-icon1").on("click", function() {
        $(".design-item-description1").css("display", "none");
    })

    $(".x-icon2").on("click", function() {
        $(".design-item-description2").css("display", "none");
    })

    $(".x-icon3").on("click", function() {
        $(".design-item-description3").css("display", "none");
    })
});