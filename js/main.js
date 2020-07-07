


$(window).resize(function(){
    $('.about .left-wrap .text').css('width', $('.about .left-wrap').width());
});

 
 $(document).ready(function() {
   $('.about .left-wrap .text').css('width', $('.about .left-wrap').width());

    $('.welcome-wrap .slider').owlCarousel({
        items:1,
        loop:true,
        nav:false,
        margin: 0,
        dots:true,
       // autoplay:true,
        autoplayTimeout:7000,
        smartSpeed: 1000,
        autoplayHoverPause:true,
        //navText : ["<img src='../img/nav2.png'>","<img src='../img/nav1.png'>"],
 
    });
});


$(window).scroll(function() {

    var fixtop = $('.about .right-wrap').offset().top;
    var fixbottom = $('.about .right-wrap').height() + ($('.about .right-wrap').offset().top) - $('.about .left-wrap .text').height();
    var fixbottomTop = $('.about .right-wrap').height() - $('.about .left-wrap .text').height() -120;
    var scroll = $(window).scrollTop();

    if ($('.about .left-wrap .text p').length > 0) { 

        if(scroll >= fixtop && scroll <= fixbottom) {
            $('.about .left-wrap .text').css({
                position: 'fixed',
                top: '80' + 'px'
            });
        }

        if(scroll < fixtop || $('.left-wrap .text').height() > $(window).height()) {
            $('.about .left-wrap .text').css({
                position: 'static'
            });
        }else{
            if(scroll >= fixbottom) {
                $('.about .left-wrap .text').css({
                    position: 'absolute',
                    top: fixbottomTop + 'px'
                });
            }
        }

 
    }else{
        $('.about .left-wrap .text').css({
            position: 'static'
        });
    }
});




$(document).on("click",".login-wrap .login",function() {
    $('.login_signup_p , .overlay_popup').fadeIn();
    $('.form-box-wrap.login_form').addClass('open');
    $('body').addClass('hidden-b')
});


$(document).on("click",".forgot_pass",function() {
    $('.form-box-wrap.login_form').removeClass('open');
    $('.form-box-wrap.forgotpass_form').addClass('open');
});

$(document).on("click",".forgotpass_form .cancel",function() {
    $('.form-box-wrap.login_form').addClass('open');
    $('.form-box-wrap.forgotpass_form').removeClass('open');
});

$(document).on("click",".signup_p",function() {
    $('.form-box-wrap.login_form').removeClass('open');
    $('.form-box-wrap.signup_form').addClass('open');
});

$(document).on("click",".login_p",function() {
    $('.form-box-wrap.login_form').addClass('open');
    $('.form-box-wrap.signup_form').removeClass('open');
});


$(document).on("click",".close-popup",function() {
	$('.popup , .overlay_popup').fadeOut();
	$('body').removeClass('hidden-b');
	$('.form-box-wrap.login_form , .form-box-wrap.signup_form , .form-box-wrap.forgotpass_form').removeClass('open');
});