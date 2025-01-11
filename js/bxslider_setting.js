$(document).ready(function(){
    $('.top-slaider-pc-box').bxSlider({ //bxsliderを使用しているulクラスを指定
        mode:'fade',
        pager: false,
        speed:1000,
        pause:5000,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
        slideWidth: 1920,
        controls:false,
        pager:false,
        auto: true,
        slideMargin: 0
    });
    $('.top-slaider-sp-box').bxSlider({ //bxsliderを使用しているulクラスを指定
        mode:'fade',
        pager: false,
        speed:1000,
        pause:5000,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
        slideWidth: 768,
        controls:false,
        pager:false,
        auto: true,
        slideMargin: 0
    });
    
    $('.works-slider-ul-sp').bxSlider({         
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
        slideWidth: 260,
        controls:true,
        pager:false,
        slideMargin: 0
    });
    $('.works-slider-ul-pc').bxSlider({ 
        minSlides: 3,
        maxSlides: 3,
        moveSlides: 1,
        slideWidth: 360,
        controls:true,
        pager:false,
        slideMargin: 60
    });

    $('.consultants-main-slider').bxSlider({
        touchEnabled:false,
        pagerCustom: '.consultants-thumbs-slider'
    });
});


$(window).on('load resize', function(){
    var window_height = $(window).height();
    var header_height = $("#scroll-off").outerHeight(true);
    var tuijuu_height = $(".top-wbw-ebook").outerHeight(true);
    var slider_size = window_height - ( header_height + tuijuu_height);
    $('.top-slaider-pc-contents').css('height', slider_size );
    $('.top-slaider-pc-box li').css('height', slider_size );
    if(window.innerWidth > 768 && window.innerWidth < 1300 ){
        
        $('.top-slaider-pc-contents').css('height', '45.833333333333336vw' );
        $('.top-slaider-pc-box li').animate({height: '45.833333333333336vw'}, 50, 'swing');
    }
});