

$(window).ready( function() {   
    
    setTimeout(function(){$("#load").css({"transform":"translateY(-100vh)", "transition":"all 1s"}); document.getElementById("body").setAttribute("style","overflow-y:auto"); new WOW().init();}, 5000); 
  $("#loader").fadeOut("fast");  //Fade out the #loader div
});
$( document ).ready(function() {
    var now = new Date().getTime();
  var page_load_time = now - performance.timing.navigationStart;
  console.log("User-perceived page loading time: " + page_load_time);
var width = 100, // width of a progress bar in percentage
    perfData = window.performance.timing, // The PerformanceTiming interface
    EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart), // Calculated Estimated Time of Page Load which returns negative value.
    time = parseInt((EstimatedTime/1000)%60)*100; //Converting EstimatedTime from miliseconds to seconds.

var PercentageID = $("#percent"),
        start = 0,
        end = 100,
        durataion = time;
        animateValue(PercentageID, start, end, durataion);

function animateValue(id, start, end, duration) {
    
    var range = end - start,
      current = start,
      increment = end > start? 1 : -1,
      stepTime = Math.abs(Math.floor(duration / range)),
      obj = $(id);

    var timer = setInterval(function() {
        current += increment;
        $(obj).text(current + "%");
      //obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
        
    }, stepTime);
}
    
    $("#calltoaction").on('click', function(){
    $('html, body').animate({
        scrollTop: $('#contact').offset().top -80
    }, 500);
});
$("#about-element").on('click', function(){
    $('html, body').animate({
        scrollTop: $('#about').offset().top -80
    }, 500);
});
    $(" #work-element").on('click', function(){
    $('html, body').animate({
        scrollTop: $('#work').offset().top -80
    }, 500);
});
    $("#contact-element").on('click', function(){
    $('html, body').animate({
        scrollTop: $('#contact').offset().top -80
    }, 500);
});
    $("#blog-element").on('click', function(){
    $('html, body').animate({
        scrollTop: $('#blog').offset().top -80
    }, 500);
});
    $("#gallary-element").on('click', function(){
    $('html, body').animate({
        scrollTop: $('#gallary').offset().top -80
    }, 500);
});
    

});
//window.onload = function(){
//    var load = document.getElementById("load");
//    load.classList.add("reveal");
//    setTimeout(function(){document.getElementById("body").setAttribute("style","overflow-y:auto")},4000);
////    setTimeout(load.setAttribute("style","display:none"),2000);
//}
//window.onload = function load(url) {
//    // display loading image here...
//    document.getElementById('load').visible = true;
//    // request your data...
////    alert("done1");
//    var req = new XMLHttpRequest();
////    alert("done2");
//    req.open("POST", url, true);
//
//    req.onreadystatechange = function () {
//        if (req.readyState == 4 && req.status == 200) {
//            // content is loaded...hide the gif and display the content...
//            alert("done3");
//            if (req.responseText) {
//                document.getElementById('body').innerHTML = req.responseText;
//                document.getElementById('load').visible = false;
//                document.getElementById("body").setAttribute("style","overflow-y:auto");
//                alert("done");
//            }
//        }
//    };
//    req.send(null);
//}

