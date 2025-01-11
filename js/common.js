// JavaScript Document


$(function(){
	$('.drawer').on('click',function(){
		if($('body').hasClass('open')){
			$('body').removeClass('open');
			$('.spNav').removeClass('spNav-open');
		}else{
			$('body').addClass('open');
			$('.spNav').addClass('spNav-open');
		}
	});
	$('.spNav ul li a[href^="#"]').on('click',function(){
		$('body').removeClass('open');
		$('.spNav').removeClass('spNav-open');
	});
});

$(document).ready(function() {
  setTimeout(() => {
      if($("#loading").is(':visible')){
          $("#loading").fadeOut(500);
      }
  }, 3000);
});

$(window).on('load', function() {
  if($("#loading").is(':visible')){
      $("#loading").fadeOut(500);
  }
});

//同一ページ用
$(window).on("load", function() {
    var windowWidth = window.innerWidth;
        $('a[href^="#"]').click(function(){
		var adjust = null;
        if (windowWidth <= 767) {
          adjust = 90;
        }else{
            adjust = 120;
        }
          var speed = 400;
          var href= $(this).attr("href");
          var target = $(href == "#" || href == "" ? 'html' : href);
          var position = target.offset().top - adjust;
              $('body,html').animate({scrollTop:position}, speed, 'swing');
          return false;
       });
});

//別ページ遷移用
$(window).on("DOMContentLoaded", function() {
	var windowWidth02 = window.innerWidth;
	var adjust02 = null;
        if (windowWidth02 <= 767) {
          adjust02 = 90;
        }else{
            adjust02 = 120;
        }
	var urlHash = location.hash;
      setTimeout(function(){
        var target = $(urlHash);
        var position = target.offset().top - adjust02;
        $('body,html').animate({scrollTop:position}, 0);
    }, 0);
    return false;
});

$(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 200) {
			$('header').addClass('scrl');
		} else {
			$('header').removeClass('scrl');
		}
	});
});

$(function () {
  var offset = $('.contact').offset().top;
  var height = $(window).height();
	$(window).scroll(function () {
		if ($(this).scrollTop() > offset - height) {
      $('.float-bnr').fadeOut();
			$('.pageTop').fadeIn();
		} else {
      $('.float-bnr').fadeIn();
			$('.pageTop').fadeOut();
		}
	});
});

$(function() {
    $(window).on("load scroll resize", function(){
      var st = $(window).scrollTop();
      var wh = $(window).height();

      $('.anchor-check').each(function() {
        var tg = $(this).offset().top;
        var id = $(this).attr('id');

        if (st > tg  - wh / 2) {
          $("#anchor li a").removeClass("current");
			$("#sp-anchor li a").removeClass("current");
          var link = $("#anchor li a[href *= " + id +"]");
          var linksp = $("#sp-anchor li a[href *= " + id +"]");
          $(link).addClass("current");
			$(linksp).addClass("current");
        } else if(st == 0){
            $("#anchor li a").removeClass("current");
			$("#sp-anchor li a").removeClass("current");
        }
          
      });
    });
});


$(function () {
     AOS.init({
		 duration: 700,
         delay: 100,
	 });
});

$(function () {
    $('.effect01').css('opacity',1).textillate({
		in: {
			effect: 'fadeInUp', 
			minDisplayTime: 1000, 
		}
	});
});


$(function () {
  $(window).scroll(function(){
    $('.effect02').each(function(){
      var windowHeight = $(window).height();
      var scroll = $(window).scrollTop();
      var hogePoint = $(this).offset().top;
      if (scroll > hogePoint - windowHeight){
        $(this).css('opacity',1).textillate({
          in: {
            effect: 'fadeInUp',
            delay: 40,
          }});
      }
    });
  });
});

$(function () {
  $(window).scroll(function(){
    $('.effect03').each(function(){
      var windowHeight = $(window).height();
      var scroll = $(window).scrollTop();
      var hogePoint = $(this).offset().top;
      if (scroll > hogePoint - windowHeight){
        $(this).css('opacity',1).textillate({
          in: {
            effect: 'fadeInUp',
            delay: 20,
          }});
		  $(this).addClass('copy-line-active');
      }
    });
  });
});

$(function () {
  $(window).scroll(function(){
    $('.effect04').each(function(){
      var windowHeight = $(window).height();
      var scroll = $(window).scrollTop();
      var hogePoint = $(this).offset().top;
      if (scroll > hogePoint - windowHeight){
        $(this).css('opacity',1).textillate({
          in: {
            effect: 'fadeInLeft',
            delay: 50,
          }});
      }
    });
  });
});

$(function () {
    $('.effect05').css('opacity',1).textillate({
		in: {
			effect: 'fadeInLeft',
			minDisplayTime: 1000, 
		}
	});
});


