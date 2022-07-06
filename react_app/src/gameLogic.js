import $ from 'jquery';
import axios from 'axios';
import { updateCompanies } from './redux/companies';
import store from './redux/store';


const api = axios.create( {
    baseURL: 'http://marketmash.ca/fetch_companies'
});

export function DisplayResults(companies) {

    $("#left-scroll").removeClass("left-scroll-hover");
    $("#right-scroll").removeClass("right-scroll-hover");

    $(".scroll-container").css("transition", "max-height 1s linear, transform 0.7s linear");
    $(".scroll-text").css("transition", "max-height 0.5s linear");

    if (Number(companies[0]['rank']) <= Number(companies[1]['rank'])) {
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

            $("#left-scroll").addClass("left-winner");
            $("#right-scroll").addClass("right-loser");
        });
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

            $("#left-scroll").addClass("left-loser");
            $("#right-scroll").addClass("right-winner");
        });
    }

    $(".play-again-btn").css("visibility", "visible");
    $(".play-again-btn").css("opacity", "100");
}

export function PlayAgain() {

    $("#left-scroll").removeClass('left-winner');
    $("#left-scroll").removeClass('left-loser');
    $("#right-scroll").removeClass('right-winner');
    $("#right-scroll").removeClass('right-loser');

    $(".scroll-container").css("transition", "max-height 0.5s linear, transform 0.1s linear");

    $(() => {
        $("#right-scroll").animate({
            'max-height': '20%'
        }, {duration: 500, queue: false}).css({
            'transform': ''
        });
        $("#left-scroll").animate({
            'max-height': '20%'
        }, {duration: 500, queue: false}).css({
            'transform': ''
        });
        $(".scroll-text").animate({
            'max-height': '0%'
        }, {duration: 500, queue: false});
    });

    $(".play-again-btn").css("visibility", "hidden");
    $(".play-again-btn").css("opacity", "0");

    // API CALL

    setTimeout(() => {
        FetchCompanies().then(() => {
            $(".scroll-container").css("transition", "max-height 0.2s linear, transform 0.1s linear");
            $(".scroll-text").css("transition", "max-height 0.1s linear");


            $("#right-scroll").animate({
                'max-height': '35%'
            }, {duration: 250, queue: false});
            $("#left-scroll").animate({
                'max-height': '35%'
            }, {duration: 250, queue: false});
            $(".scroll-text").animate({
                'max-height': '35%'
            }, {duration: 250, queue: false});

            $("#left-scroll").addClass("left-scroll-hover");
            $("#right-scroll").addClass("right-scroll-hover");
        })}, 1000);
}

export const FetchCompanies = async() => {

    try {
        const response = await api.get('/');
        // console.log(response.data);
        store.dispatch(updateCompanies(response.data));
    }
    catch (err) {
        console.log("error fetching companies");
    }
}