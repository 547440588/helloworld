/**
 * Created by Administrator on 2016/11/23.
 */
$(document).ready(function () {
    $("#newquote-button").on("click",getQuote) ;
    $("#qq-button").on("click",function () {
        window.open('http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url='+encodeURIComponent(currQuote));return true;
    })
}) ;

var currQuote = "" ;
var currAuthor = "" ;
var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12',
    '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"] ;

function getQuote() {
    $.ajax({
        headers: {
        "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
        },
        url:'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
        success:function (response) {
           var r = JSON.parse(response) ;
            currQuote = r["quote"] ;
            currAuthor = r["author"] ;
            $("#quote-text").animate({
                    opacity: 0
                }, 500,
                function() {
                    $(this).animate({
                        opacity: 1
                    }, 500);
                    $('#quote-text').text(r.quote);
                });
            $("#quote-author").html(currAuthor);

            var currColor = colors[Math.floor(Math.random()*colors.length)] ;
            $("#quote-text").css("color",currColor) ;
            $("#quote-author").css("color",currColor) ;
            $(".quot-button").css("background-color",currColor) ;
            $("html body").css("background-color",currColor) ;
        }
    }) ;
};