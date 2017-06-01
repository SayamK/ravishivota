 var button = document.getElementById("load");
  var feed = new Instafeed({
      get: 'tagged',
      target: 'recent-work',
      tagName: 'raviofficial',
      accessToken: '3797463487.23ab6be.ddc52adf26404dc1876b649661d92ac8',
      // userId: '3797463487',
      // clientId: '23ab6be2e97a4dac9fec4f862784b104',
      limit:16,
      resolution: 'standard_resolution'
  });

feed.run();



function openCreatorsWebsite() {
  window.open("http://sayamkanwar.com","_self");
}

function soc1() {
  window.open("https://www.facebook.com/Illustration-Arts-1034458820017503/","_self");
}

function soc2() {
  window.open("https://www.instagram.com/the_ravi_official_/","_self");
}

function soc3() {
  window.open("mailto:bunny.akaksg@gmail.com","_self");
}


function subForm() {

  $('.beforeSend').css({"opacity":"1"});

  var link = "https://formspree.io/bunny.akaksg@gmail.com";

  var dataStr = $("#contactForm").serialize();
  console.log(dataStr);

  $.ajax({
    type: 'POST',
    url: link,
    data: dataStr,
    dataType: 'json',
    success: function(){
      $('.beforeSend').css({"opacity":"0"});
      $('.afterSend').css({"opacity":"1"});
      $('.input').val('');
    }
  });

  setTimeout(function(){
    $('.afterSend').css({"opacity":"0"});
  }, 5000);

}

$(document).ready(function(){

 $('.downClick').click(function(e){

   e.preventDefault();

   var scrollLink = $(this).attr('href');

 $('body').animate({
   scrollTop: $(scrollLink).offset().top
 }, 1000);
 console.log(scrollLink);

 });

});

window.onload = function(){
  $('.loading').css({"opacity":"0"});
  $('.loading').css({"zIndex":"-5"});
}

//
// $(window).load(function(){
//
//
// });
