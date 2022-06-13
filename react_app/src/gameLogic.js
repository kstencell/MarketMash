import $ from 'jquery';

export function DisplayResults(companies) {

    console.log(companies);

    $("#left-scroll").removeClass("left-scroll-hover");
    $("#right-scroll").removeClass("right-scroll-hover");

    $(".scroll-container").css("transition", "max-height 1s linear, transform 0.3s linear");

    if (companies[0]['market_cap'] >= companies[1]['market_cap']) {
        $("#left-scroll").css("transform", "scale(1.05)");
        $("#right-scroll").css("transform", "scale(0.9)");
    }
    else {
        $("#left-scroll").css("transform", "scale(0.9)");
        $("#right-scroll").css("transform", "scale(1.05)");
    }

    $(".scroll-text").css("max-height", "100%");
    $("#left-scroll").css("max-height", "100%");
    $("#right-scroll").css("max-height", "100%");

    $(".play-again-btn").css("visibility", "visible");
    $(".play-again-btn").css("opacity", "100");

}

export function PlayAgain() {

    $("#left-scroll").css({"transform" : "scale(1)", "max-height" : "20%"});
    $("#right-scroll").css({"transform" : "scale(1)", "max-height" : "20%"});
    $(".scroll-text").css("max-height", "0%");

    $(".play-again-btn").css("visibility", "hidden");
    $(".play-again-btn").css("opacity", "0");

    $(".scroll-container").css("transition", "max-height 1s linear, transform 0.1s linear");

    $("#left-scroll").css("transform", "");
    $("#left-scroll").addClass("left-scroll-hover");

    $("#right-scroll").css("transform", "");
    $("#right-scroll").addClass("right-scroll-hover");

}