// JavaScript Document

$(function(){
	$('.mv--slide').slick({
		fade: true,
		autoplay: true,
		dots: true,
		arrows: false,
		cssEase: 'linear',
		pauseOnFocus: false,
		pauseOnHover: false,
		autoplaySpeed: 1200,
		speed: 2400
	});
});

$(function(){
	$('.strength--slide').slick({
		autoplay: true,
		dots: false,
		arrows: false,
		pauseOnFocus: false,
		pauseOnHover: false,
		variableWidth: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplaySpeed: 0,
		speed: 6500,
		cssEase: 'linear',
		zIndex: 0,
		responsive: [{
			breakpoint: 768,
			speed: 5000,
		}]
	});
});

$(function(){
	$('.consult--slide').slick({
		autoplay: false,
		dots: false,
		arrows: false,
		adaptiveHeight: true,
		pauseOnFocus: false,
		pauseOnHover: false,
		variableWidth: true,
		asNavFor:'.thumb',
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 1200,
	});
	$('.thumb').slick({
		asNavFor:'.consult--slide',
		focusOnSelect: true,
		arrows: true,
		variableWidth: true,
		prevArrow: '<img src="img_renew/index/icn_arrow_r.png" alt="prev" class="btn-prev">',
		nextArrow: '<img src="img_renew/index/icn_arrow_l.png" alt="next" class="btn-next">',
       	slidesToShow:6,
		responsive: [{
			breakpoint: 820,
			slidesToShow: 3,
		}]
     });
});

$(function(){
	$('.works--slide').slick({
		autoplay: false,
		dots: false,
		arrows: true,
		pauseOnFocus: false,
		pauseOnHover: false,
		variableWidth: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		speed: 800,
		zIndex: 0,
		prevArrow: '<img src="img_renew/index/icn_arrow_r.png" alt="prev" class="btn-prev">',
		nextArrow: '<img src="img_renew/index/icn_arrow_l.png" alt="next" class="btn-next">',
		responsive: [{
			breakpoint: 768,
			slidesToShow: 1,
			arrows: true,
		}]
	});
});

$(window).on('click', '[data-lightbox]', lity);


$(function(){
    $(".works-detail").each(function(i){
        $(this).find(".works-detail--slide").attr("data-slick", i);
        $(this).find(".works-detail--slide--thumb").attr("data-slick", i);
    });

    $('.works-detail--slide').each(function(){
        let attr = $(this).attr('data-slick');
        var w_slide = $(this).slick({
            autoplay: false,
            variableWidth: true,
            slidesToShow: 1,
            slidesToScroll: 1,
			initialSlide: 0,
            arrows: false,
            asNavFor: '.works-detail--slide--thumb[data-slick="'+attr+'"]',
        });
		$('.reset').click(function(){
            w_slide.slick('setPosition');
         });
        var thumb_slide = $('.works-detail--slide--thumb[data-slick="'+attr+'"]').slick({
            asNavFor: '.works-detail--slide[data-slick="'+attr+'"]',
            focusOnSelect: true,
            arrows: true,
            variableWidth: true,
            swipeToSlide: true,
			initialSlide: 0,
            prevArrow: '<img src="img_renew/index/icn_arrow_r.png" alt="next" class="btn-prev">',
            nextArrow: '<img src="img_renew/index/icn_arrow_l.png" alt="next" class="btn-next">',
			slidesToShow:3,
			slidesToScroll: 1,
			responsive: [{
                breakpoint: 768,
                centerMode: true,
            }]
        });
		$('.reset').click(function(){
            thumb_slide.slick('setPosition');
         });
    });
});


$(function(){
	$('.topics--box .more-button').click(function(){
		$('.topics--box .more-button').fadeOut(100);
		$('.topics--archive').slideDown();
	});
});



