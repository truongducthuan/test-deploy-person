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

$(function(){
    var pos = 0;
    $(window).on('scroll', function(){
        if( $(this).scrollTop() >= $("#scroll-off").height()) {
            //ユーザーのスクロール位置取得　& スクロール方向で分岐
            if($(this).scrollTop() < pos ){
                //上スクロール時の処理を記述
                $("#scroll-on").fadeIn(20);  
            }else{
                //下スクロール時の処理を記述
                $('.sp-main-nav').fadeOut(20);
                $("#scroll-on").fadeOut(20);
                
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
            
            $(".button-to-page-top").fadeOut(20);
        }
    });
});

//スマホメニューオープン
$(function(){
    $('.sp-manu-button').on( 'click', function() {
        $('.sp-main-nav').slideToggle();
        console.log('着てる');
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
    $(window).resize(function() {
        $('body').css('padding-bottom', $(".top-wbw-ebook").outerHeight(true) );
    });
});