/**
 * Created by Administrator on 2016/11/24.
 */
var ans = "";
var clear = false;
var calc = "";
var onButton = function () {
    var text = $(this).attr("value");
    $(".c-num-box").html(text) ;
    if(parseInt(text, 10) == text || text === "." || text === "/" || text === "*" || text === "-" || text === "+" || text === "%") {
        if(clear === false) {
            calc += text;
            $(".c-num-box").val(calc);
        } else {
            calc = text;
            $(".c-num-box").val(calc);
            clear = false;
        }
    } else if(text === "AC") {
        calc = "";
        $(".c-num-box").val("");
    } else if(text === "CE") {
        calc = calc.slice(0, -1);
        $(".c-num-box").val(calc);
    } else if(text === "=") {
        ans = eval(calc);
        $(".c-num-box").val(ans);
        clear = true;
    }
}

$(document).ready(function () {
    $(".c-btn").on("click",onButton) ;
}) ;

