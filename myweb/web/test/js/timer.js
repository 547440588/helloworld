/**
 * Created by Administrator on 2016/11/29.
 */
$(document).ready(function () {
    $(".timer").on("click",timerClick) ;
    $("button").on("click",buttonClick);
}) ;

var currBreakLength = 5 ;
var currSessionLenth = 5 ;
var isTiming = false ;
var timer ;
var seconds = 60*currSessionLenth;


var secondsToHms = function (seconds) {
    seconds = Number(seconds) ;
    var h = Math.floor(seconds/3600) ;
    var m = Math.floor(seconds%3600/60) ;
    var s = Math.floor(seconds%3600%60) ;

    return (h > 0 ? h + ":" + (m < 10 ? "0" : "") : "") + m + ":" + (s < 10 ? "0" : "") + s
}

var buttonClick = function () {
    var text = $(this).attr("value");
    if(text === "breakadd"){
        currBreakLength ++ ;
    }else if(text === "breaksub"){
        currBreakLength -- ;
    }else if(text === "sessionsub"){
        currSessionLenth -- ;
    }else if(text === "sessionadd"){
        currSessionLenth ++ ;
    }

    $("#sessiontime").html(currSessionLenth) ;
    $("#breaktime").html(currBreakLength) ;
    $("#timeleft").html(currSessionLenth);
} ;
var timerClick = function () {
    if(!isTiming){
        isTiming = true ;
        timing() ;
    }else{
        isTiming = false ;
        clearTimeout(timer) ;
    }
}

var timing = function () {
    seconds -= 1 ;
    var currTimeLeft = secondsToHms(seconds) ;
    $("#timeleft").html(currTimeLeft);
    timer = setTimeout(timing,1000) ;
}

