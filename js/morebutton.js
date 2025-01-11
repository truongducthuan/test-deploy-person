$(function(){
	$('.news-list-ul:not(.news-list-ul:first-of-type)').css('display','none');//一番上の要素以外を非表示
	$('.more-button').nextAll('.more-button').css('display','none');
	$('.more-button').on('click', function() {
		$(this).css('display','none');
		$(this).next('.news-list-ul').slideDown();
		$(this).nextAll('.more-button:first').css('display','block'); 
	});
});