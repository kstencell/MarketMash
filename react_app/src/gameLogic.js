import $ from 'jquery';

export function DisplayResults(companies) {

    console.log(companies);

    $("#left-scroll").removeClass("left-scroll-hover");
    $("#right-scroll").removeClass("right-scroll-hover");

    $(".scroll-container").css("transition", "max-height 1s linear, transform 0.7s linear");
    $(".scroll-text").css("transition", "max-height 0.5s linear");

    if (companies[0]['market_cap'] >= companies[1]['market_cap']) {
        $(function () {
            $("#left-scroll").animate({
                'max-height': '100%'
            }, {duration: 500, queue: false}).css({
                'transform': 'scale(1.05)'
            });
            $("#right-scroll").animate({
                'max-height': '100%'
            }, {duration: 500, queue: false}).css({
                'transform': 'scale(0.9)'
            });
            $(".scroll-text").animate({
                'max-height': '100%'
            }, {duration: 500, queue: false});
        });
        // $("#left-scroll").css("transform", "scale(1.05)");
        // $("#right-scroll").css("transform", "scale(0.9)");
    }
    else {

        $(function () {
            $("#right-scroll").animate({
                'max-height': '100%'
            }, {duration: 500, queue: false}).css({
                'transform': 'scale(1.05)'
            });
            $("#left-scroll").animate({
                'max-height': '100%'
            }, {duration: 500, queue: false}).css({
                'transform': 'scale(0.9)'
            });
            $(".scroll-text").animate({
                'max-height': '100%'
            }, {duration: 500, queue: false});
        });
        
        // $("#left-scroll").css("transform", "scale(0.9)");
        // $("#right-scroll").css("transform", "scale(1.05)");
    }

    // $(".scroll-text").css("max-height", "100%");
    // $("#left-scroll").css("max-height", "100%");
    // $("#right-scroll").css("max-height", "100%");

    $(".play-again-btn").css("visibility", "visible");
    $(".play-again-btn").css("opacity", "100");

}

export function PlayAgain() {

    $(".scroll-container").css("transition", "max-height 0.5s linear, transform 0.2s linear");

    $(() => {
        $("#right-scroll").animate({
            'max-height': '20%'
        }, {duration: 500, queue: false}).css({
            'transform': 'scale(1)'
        });
        $("#left-scroll").animate({
            'max-height': '20%'
        }, {duration: 500, queue: false}).css({
            'transform': 'scale(1)'
        });
        $(".scroll-text").animate({
            'max-height': '0%'
        }, {duration: 500, queue: false});
    }).promise().done(() => {
        $(".scroll-container").css("transition", "max-height 0.2s linear, transform 0.1s linear");
        $(".scroll-text").css("transition", "max-height 0.2s linear");

        $("#right-scroll").animate({
            'max-height': '35%'
        }, {duration: 50, queue: false});
        $("#left-scroll").animate({
            'max-height': '35%'
        }, {duration: 50, queue: false});
        $(".scroll-text").animate({
            'max-height': '35%'
        }, {duration: 50, queue: false});
    });

    // CALL API FOR NEW TEXT DATA

    // const myTimeout = setTimeout(() => {
    //     $(".scroll-container").css("transition", "max-height 0.2s linear, transform 0.1s linear");
    //     $(".scroll-text").css("transition", "max-height 0.2s linear");

    //     $(function () {
    //         $("#right-scroll").animate({
    //             'max-height': '35%'
    //         }, {duration: 50, queue: false});
    //         $("#left-scroll").animate({
    //             'max-height': '35%'
    //         }, {duration: 50, queue: false});
    //         $(".scroll-text").animate({
    //             'max-height': '35%'
    //         }, {duration: 50, queue: false});
    //     });
    // }, 1000);

    $(".play-again-btn").css("visibility", "hidden");
    $(".play-again-btn").css("opacity", "0");

    // $("#left-scroll").removeAttr("style");
    // $("#left-scroll").addClass("left-scroll-hover");

    // $("#right-scroll").removeAttr("style");
    // $("#right-scroll").addClass("right-scroll-hover");
}