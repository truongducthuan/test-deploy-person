/* ============================================================
 ヘッダ固定
============================================================ */
function init() {
	var px_change  = 50;
		window.addEventListener('scroll', function(e){
			if ( $(window).scrollTop() > px_change ) {
				$("#header-pc").addClass("shrink");
			} else if ( $("#header-pc").hasClass("shrink") ) {
				$("#header-pc").removeClass("shrink");
			}
		});
	}
// window.onload = init();


/* ============================================================
 「...」省略
============================================================ */
$(function(){//2行
	$('.line2').trunk8({
		lines: 2,
		tooltip: false
	});
});
$(function(){//3行
	$('.line3').trunk8({
		lines: 3,
		tooltip: false
	});
});

/* ============================================================
 megamenuをディレクトリに応じて選択状態にする
============================================================ */
(function($) {
	$(document).ready(function() {
		var dir3 = location.href.split("/")[3];
		var dir4 = location.href.split("/")[4];
		
		if(dir3.match("brand")) {
			$("#gnav-brand").addClass("active");
		}
		else if(dir3.match("corporate")) {
			$("#gnav-corporate").addClass("active");
		}
		else if(dir3.match("service")) {
			$("#gnav-service").addClass("active");
		}
		else if(dir3.match("news")) {
			$("#gnav-news").addClass("active");
		}
		else if(dir3.match("ir")) {
			$("#gnav-ir").addClass("active");
		}
		else if(dir3.match("recruit")) {
			$("#gnav-recruit").addClass("active");
		}
		else if(dir4&&dir4.length>0){
			if(dir4.match("workersprofile")) {
				$("#gnav-workersprofile").addClass("active");
			}
		}
	});
}) (jQuery);


/* ============================================================
 PC MENU 法人のお客様
============================================================ */
$(function(){
	$("#parent-ttl-nine").hover(function(){
    $("#child-nine").css('display', 'table-cell');
    $("#child-tech").css('display', 'none');
    $("#parent-ttl-nine").addClass('active');
    $("#parent-ttl-tech").removeClass('active');
	});
  
  $("#parent-ttl-tech").hover(function(){
    $("#child-nine").css('display', 'none');
    $("#child-tech").css('display', 'table-cell');
    $("#parent-ttl-nine").removeClass('active');
    $("#parent-ttl-tech").addClass('active');
	});
});

/* ============================================================
 SP MENU
============================================================ */
(function($) {
	$(document).ready(function() {
		$.slidebars();
	});
}) (jQuery);

/* ============================================================
 SP MENUアコーディオン
============================================================ */
$(function(){
	$(".nav-list-parent.parent-ttl").click(function(){
		$(this).next(".nav-list-child").slideToggle();
		$(this).next(".nav-list-child").siblings(".nav-list-child").slideUp();
		$(this).toggleClass("active");
		$(this).siblings(".nav-list-parent.parent-ttl").removeClass("active");
	});
});

/* ============================================================
 ローカルナビアコーディオン
============================================================ */
$(function(){
	$(".l-nav-list-parent").click(function(){
		$(this).next(".l-nav-list-child").slideToggle();
		$(this).next(".l-nav-list-child").siblings(".l-nav-list-child").slideUp();
		$(this).toggleClass("active");
		$(this).siblings(".l-nav-list-parent").removeClass("active");
	});
});


/* ============================================================
 pagetop-pc
============================================================ */
// スムーズスクロール
$(function(){
	// ページ内リンクをクリックすると
	$('a[href^="#"]').click(function(){
 		// スクロールスピード
 		var speed = 800;
 		// クリックしたリンク先を保存
		var href= $(this).attr("href");
		// クリックしたリンク先が#または空のときは
		var target = $(href == "#" || href == "" ? 'html' : href);
		// トップへ移動する
		var position = target.offset().top;
		// リンク先へスムーズに移動する
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
});
// page Topフェードイン・アウト
$(function(){
	$(window).bind("scroll", function() {
	if (document.getElementById('brandPagetop')) {
	} else {
		if ($(this).scrollTop() > 100) { 
			$(".pagetop-pc").fadeIn();
		} else {
			$(".pagetop-pc").fadeOut();
		}
	}
	// ドキュメントの高さ
	scrollHeight = $(document).height();
	// ウィンドウの高さ+スクロールした高さ→ 現在のトップからの位置
	scrollPosition = $(window).height() + $(window).scrollTop();
	// フッターの高さ
	footHeight = $("#footer").height();
	
	// スクロール位置がフッターまで来たら
	if ( scrollHeight - scrollPosition  <= footHeight ) {
		// ページトップリンクをフッターに固定
		$(".pagetop-pc a").css({"position":"absolute","bottom": "2px"});
	} else {
		// ページトップリンクを右下に固定
		$(".pagetop-pc a").css({"position":"fixed","bottom": "0px"});
		}
	});
});

/* ============================================================
 pagetop-sp
============================================================ */
// スムーズスクロール
$(function(){
	// ページ内リンクをクリックすると
	$('a[href^="#"]').click(function(){
 		// スクロールスピード
 		var speed = 800;
 		// クリックしたリンク先を保存
		var href= $(this).attr("href");
		// クリックしたリンク先が#または空のときは
		var target = $(href == "#" || href == "" ? 'html' : href);
		// トップへ移動する
		var position = target.offset().top;
		// リンク先へスムーズに移動する
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
});
// page Topフェードイン・アウト
$(function(){
	$(window).bind("scroll", function() {
	if (document.getElementById('brandPagetop')) {
	} else {
		if ($(this).scrollTop() > 100) { 
			$(".pagetop-sp").fadeIn();
		} else {
			$(".pagetop-sp").fadeOut();
		}
	}
	// ドキュメントの高さ
	scrollHeight = $(document).height();
	// ウィンドウの高さ+スクロールした高さ→ 現在のトップからの位置
	scrollPosition = $(window).height() + $(window).scrollTop();
	// フッターの高さ
	footHeight = $("#footer").height();
	
	// スクロール位置がフッターまで来たら
	if ( scrollHeight - scrollPosition  <= footHeight ) {
		// ページトップリンクをフッターに固定
		$(".pagetop-sp a").css({"position":"absolute","bottom": "10px"});
	} else {
		// ページトップリンクを右下に固定
		$(".pagetop-sp a").css({"position":"fixed","bottom": "10px"});
		}
	});
});