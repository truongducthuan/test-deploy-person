//ページ内リンクスムーズスクロール
var headerHeight = $('#scroll-off').outerHeight();
var urlHash = location.hash;
if(urlHash) {
    $('body,html').stop().scrollTop(0);
    setTimeout(function(){
        var target = $(urlHash);
        var position = target.offset().top - headerHeight;
        $('body,html').stop().animate({scrollTop:position}, 500);
    }, 100);
}
$('a[href^="#"]').click(function() {
    var href= $(this).attr("href");
    var target = $(href);
    var position = target.offset().top - headerHeight;
    $('body,html').stop().animate({scrollTop:position}, 500);   
});
//ヘッダー追従
//$(function(){
//    var startPos = 0,winScrollTop = 0;
//    $(window).on('scroll',function(){        
//        if( $(this).scrollTop() >= $("#scroll-off").height()) {
//            winScrollTop = $(this).scrollTop();
//            if (winScrollTop >= startPos) {
//                $('.sp-main-nav').fadeOut(500);
//                $("#scroll-on").fadeOut(500);
//                
//                if($(this).hasClass('button-non-active')){                    
//                }else {
//                    $('.sp-manu-button').removeClass('button-active').addClass('button-non-active');
//                }
//            } else {
//                $("#scroll-on").fadeIn(500);               
//            }
//            startPos = winScrollTop;
//            console.log('a:'+winScrollTop);
//            console.log('b:'+startPos);
//        }
//        
//    });
//});
$(function(){
    var pos = 0;
    $(window).on('scroll', function(){
        if( $(this).scrollTop() >= $("#scroll-off").height()) {
            //ユーザーのスクロール位置取得　& スクロール方向で分岐
            if($(this).scrollTop() < pos ){
                //上スクロール時の処理を記述
                $("#scroll-on").fadeIn(500);  
            }else{
                //下スクロール時の処理を記述
                $('.sp-main-nav').fadeOut(500);
                $("#scroll-on").fadeOut(500);
                
                if($(this).hasClass('button-non-active')){                    
                }else {
                    $('.sp-manu-button').removeClass('button-active').addClass('button-non-active');
                }
            }
            //スクロールが停止した位置を保持
            setTimeout(function(){
                pos = $(this).scrollTop();
            },1500);
            
        }
    });
});


$(function(){
    $(window).scroll(function() {
        if( $(this).scrollTop() >= $("#scroll-off").height()) {            
            $(".button-to-page-top").fadeIn(500);
        }else {
            
            $(".button-to-page-top").fadeOut(500);
        }
    });
});

//スマホメニューオープン
$(function(){
    $('.sp-manu-button').on( 'click', function() {
        $('.sp-main-nav').slideToggle();
        if($(this).hasClass('button-non-active')){
            $('.sp-manu-button').removeClass('button-non-active').addClass('button-active');
        }else {
            $('.sp-manu-button').removeClass('button-active').addClass('button-non-active');
        }        
    });
});
//コンサルタント紹介
$(function(){
    $('.button-consultants-triger').on( 'click', function() {
        $('.consultants-thumbs-slider-boxs').slideToggle();
        if($(this).hasClass('off')){
            $(this).removeClass('off').addClass('on');
        }else {
            $(this).removeClass('on').addClass('off');
        }
    });
});
//$.fn.animate2 = function (properties, duration, ease) {
//    ease = ease || 'ease';
//    var $this = this;
//    var cssOrig = { transition: $this.css('transition') };
//    return $this.queue(next => {
//        properties['transition'] = 'all ' + duration + 'ms ' + ease;
//        $this.css(properties);
//        setTimeout(function () {
//            $this.css(cssOrig);
//            next();
//        }, duration);
//    });
//};

$(function(){
    $('body').css('padding-bottom', $(".top-wbw-ebook").outerHeight(true) );
    var window_height = $(window).height();
    var header_height = $("#scroll-off").outerHeight(true);
    var tuijuu_height = $(".top-wbw-ebook").outerHeight(true);
    var slider_size = window_height - header_height - tuijuu_height;
    
    $('.top-slaider-pc-contents').css('height', slider_size );
    $('.top-slaider-pc-box li').css('height', slider_size );
    $(window).resize(function() {
        $('body').css('padding-bottom', $(".top-wbw-ebook").outerHeight(true) );
    });
});

//ナビの動きなど
$(window).scroll(function() {
    var top = $(this).scrollTop() + $("#scroll-off").height() + 10;
    if( $(this).scrollTop() == 0) {
        $('.index-nav-ul-li-link').removeClass('active').addClass('non-active');
        $('.index-nav-ul-li-link-top').removeClass('non-active').addClass('active');
        $('.pc-header-gnav-ul-li_link').removeClass('active').addClass('non-active');
    }
    else if(top >= $('#service').offset().top && top < $('#service').offset().top +$('#service').outerHeight(true) ){
        $('.index-nav-ul-li-link').removeClass('active').addClass('non-active');
        $('.index-nav-ul-li-link-service').removeClass('non-active').addClass('active');
        $('.pc-header-gnav-ul-li_link').removeClass('active').addClass('non-active');
        $('.pc-header-gnav-ul-li_link-service').removeClass('non-active').addClass('active');
    }
    else if(top >= $('#works').offset().top && top < $('#works').offset().top +$('#works').outerHeight(true) ){
        $('.index-nav-ul-li-link').removeClass('active').addClass('non-active');
        $('.index-nav-ul-li-link-works').removeClass('non-active').addClass('active');
        $('.pc-header-gnav-ul-li_link').removeClass('active').addClass('non-active');
        $('.pc-header-gnav-ul-li_link-works').removeClass('non-active').addClass('active');
    }
    else if(top >= $('#voice').offset().top && top < $('#voice').offset().top +$('#voice').outerHeight(true) ){
        $('.index-nav-ul-li-link').removeClass('active').addClass('non-active');
        $('.index-nav-ul-li-link-voice').removeClass('non-active').addClass('active');
        $('.pc-header-gnav-ul-li_link').removeClass('active').addClass('non-active');
        $('.pc-header-gnav-ul-li_link-voice').removeClass('non-active').addClass('active');
    }
    else if(top >= $('#seminar').offset().top && top < $('#seminar').offset().top +$('#seminar').outerHeight(true) ){
        $('.index-nav-ul-li-link').removeClass('active').addClass('non-active');
        $('.index-nav-ul-li-link-seminar').removeClass('non-active').addClass('active');
        $('.pc-header-gnav-ul-li_link').removeClass('active').addClass('non-active');
        $('.pc-header-gnav-ul-li_link-seminar').removeClass('non-active').addClass('active');
    }
    else if(top >= $('#message').offset().top && top < $('#message').offset().top +$('#message').outerHeight(true) ){
        $('.index-nav-ul-li-link').removeClass('active').addClass('non-active');
        $('.index-nav-ul-li-link-message').removeClass('non-active').addClass('active');
        $('.pc-header-gnav-ul-li_link').removeClass('active').addClass('non-active');
        $('.pc-header-gnav-ul-li_link-message').removeClass('non-active').addClass('active');
    }
    else if(top >= $('#consultants').offset().top && top < $('#consultants').offset().top +$('#consultants').outerHeight(true) ){
        $('.index-nav-ul-li-link').removeClass('active').addClass('non-active');
        $('.index-nav-ul-li-link-consultants').removeClass('non-active').addClass('active');
        $('.pc-header-gnav-ul-li_link').removeClass('active').addClass('non-active');
        $('.pc-header-gnav-ul-li_link-consultants').removeClass('non-active').addClass('active');
    }
    else if(top >= $('#seminar').offset().top && top < $('#seminar').offset().top +$('#seminar').outerHeight(true) ){
        $('.index-nav-ul-li-link').removeClass('active').addClass('non-active');
        $('.index-nav-ul-li-link-seminar').removeClass('non-active').addClass('active');
        $('.pc-header-gnav-ul-li_link').removeClass('active').addClass('non-active');
        $('.pc-header-gnav-ul-li_link-seminar').removeClass('non-active').addClass('active');
    }
    else if(top >= $('#news').offset().top && top < $('#news').offset().top +$('#news').outerHeight(true) ){
        $('.index-nav-ul-li-link').removeClass('active').addClass('non-active');
        $('.index-nav-ul-li-link-news').removeClass('non-active').addClass('active');
        $('.pc-header-gnav-ul-li_link').removeClass('active').addClass('non-active');
        $('.pc-header-gnav-ul-li_link-news').removeClass('non-active').addClass('active');
    }
    else if(top >= $('#company').offset().top && top < $('#company').offset().top +$('#company').outerHeight(true) ){
        $('.index-nav-ul-li-link').removeClass('active').addClass('non-active');
        $('.index-nav-ul-li-link-company').removeClass('non-active').addClass('active');
        $('.pc-header-gnav-ul-li_link').removeClass('active').addClass('non-active');
        $('.pc-header-gnav-ul-li_link-company').removeClass('non-active').addClass('active');
    }
    else {
        $('.index-nav-ul-li-link').removeClass('active').addClass('non-active');
        $('.pc-header-gnav-ul-li_link').removeClass('active').addClass('non-active');
    }
});