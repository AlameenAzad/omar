$(window).ready(function(){setTimeout(function(){$("#load").css({transform:"translateY(-100vh)",transition:"all 1s"}),document.getElementById("body").setAttribute("style","overflow-y:auto"),(new WOW).init()},5e3),$("#loader").fadeOut("fast")}),$(document).ready(function(){(new Date).getTime(),performance.timing.navigationStart;var t,o,n,e,a,l,c,i,r,f,m=window.performance.timing,s=-(m.loadEventEnd-m.navigationStart),d=100*parseInt(s/1e3%60),u=$("#percent");t=u,e=d,a=(n=100)-(o=0),l=o,c=n>o?1:-1,i=Math.abs(Math.floor(e/a)),r=$(t),f=setInterval(function(){l+=c,$(r).text(l+"%"),l==n&&clearInterval(f)},i),$("#calltoaction").on("click",function(){$("html, body").animate({scrollTop:$("#contact").offset().top-80},500)}),$("#about-element").on("click",function(){$("html, body").animate({scrollTop:$("#about").offset().top-80},500)}),$(" #work-element").on("click",function(){$("html, body").animate({scrollTop:$("#work").offset().top-80},500)}),$("#contact-element").on("click",function(){$("html, body").animate({scrollTop:$("#contact").offset().top-80},500)}),$("#blog-element").on("click",function(){$("html, body").animate({scrollTop:$("#blog").offset().top-80},500)}),$("#gallary-element").on("click",function(){$("html, body").animate({scrollTop:$("#gallary").offset().top-80},500)})});