import $ from 'jquery';
import axios from 'axios';
import { updateCompanies } from './redux/companies';
import store from './redux/store'


const api = axios.create( {
    baseURL: 'http://localhost/fetch_companies'
});

export function DisplayResults(companies) {

    console.log(companies);

    $("#left-scroll").removeClass("left-scroll-hover");
    $("#right-scroll").removeClass("right-scroll-hover");

    $(".scroll-container").css("transition", "max-height 1s linear, transform 0.7s linear");
    $(".scroll-text").css("transition", "max-height 0.5s linear");

    if (companies[0]['rank'] <= companies[1]['rank']) {
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
    }

    $(".play-again-btn").css("visibility", "visible");
    $(".play-again-btn").css("opacity", "100");
}

export function PlayAgain() {

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

    // FetchCompanies().then(() => {
    //     $("#right-scroll").animate({
    //         'max-height': '35%'
    //     }, {duration: 500, queue: false});
    //     $("#left-scroll").animate({
    //         'max-height': '35%'
    //     }, {duration: 500, queue: false});
    //     $(".scroll-text").animate({
    //         'max-height': '35%'
    //     }, {duration: 500, queue: false});
    // });
}

export const FetchCompanies = async() => {

    try {
        // const response = await api.get('/');
        // console.log(response.data);
        // dispatch(updateCompanies(response.data));
        store.dispatch(updateCompanies(
            [
                {
                    rank: 4,
                    name: "Amazon",
                    symbol: "AMZN",
                    market_cap: 2230000000,
                    price: 137.13,
                    country: "USA"
                },
                {
                    rank: 3,
                    name: "Tesla",
                    symbol: "TSLA",
                    market_cap: 1906000000,
                    price: 252.99,
                    country: "USA"
                }]
        ));
    }
    catch (err) {
        console.log("error fetching companies");
    }
}


// export const dispatch = useDispatch();

// const FetchCompanies = async() => {
//     try {
//         const response = await api.get('/');
//         console.log(response.data);
//         dispatch(updateCompanies(response.data));
//     }
//     catch (err) {
//         console.log("error fetching companies");
//     }
// }