window.addEventListener('DOMContentLoaded', function() {

    // SmoothScroll doesn't support IE 
    var userAgent = window.navigator.userAgent.toLowerCase();
    var isIE = (userAgent.indexOf('msie') >= 0 || userAgent.indexOf('trident') >= 0);
    
    if(!isIE){
        var w = window.innerWidth;
        if (w <= 768){
            var scroll = new SmoothScroll('a[href*="#"]',{
                header: '#header',
                speed: 100,
            });
        } else {
            var scroll = new SmoothScroll('a[href*="#"]',{
                header: '#header',
                speed: 100,
            });
        }
    }
});