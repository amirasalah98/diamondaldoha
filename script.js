$('.nav-home').on('click',function(){
    $('.home').removeClass("display")
    if($('.about-us'&&'.recruitment'&&'.contact-us'&&'our-services').not('.display')){
        $('.about-us').addClass('display')
        $('.recruitment').addClass('display')
        $('.contact-us').addClass('display')
        $('.our-services').addClass('display')
        $('.header-nav').addClass("display")
    }
})
$('.nav-about').on('click',function(){
    $('.about-us').removeClass("display")
    if($('.home'&&'.recruitment'&&'.contact-us'&&'our-services').not('.display')){
        $('.home').addClass('display')
        $('.recruitment').addClass('display')
        $('.contact-us').addClass('display')
        $('.our-services').addClass('display')
        $('.header-nav').addClass("display")
    }
})
$('.nav-recruit').on('click',function(){
    $('.recruitment').removeClass("display")
    if($('.about-us'&&'.home'&&'.contact-us'&&'our-services').not('.display')){
        $('.about-us').addClass('display')
        $('.home').addClass('display')
        $('.contact-us').addClass('display')
        $('.our-services').addClass('display')
        $('.header-nav').addClass("display")
    }
})
$('.nav-services').on('click',function(){
    $('.our-services').removeClass("display")
    if($('.about-us'&&'.recruitment'&&'.contact-us'&&'home').not('.display')){
        $('.about-us').addClass('display')
        $('.recruitment').addClass('display')
        $('.contact-us').addClass('display')
        $('.home').addClass('display')
        $('.header-nav').addClass("display")
    }
})
$('.nav-contact').on('click',function(){
    $('.contact-us').removeClass("display")
    if($('.about-us'&&'.recruitment'&&'home'&&'.our-services').not('.display')){
        $('.about-us').addClass('display')
        $('.recruitment').addClass('display')
        $('.home').addClass('display')
        $('.our-services').addClass('display')
        $('.header-nav').addClass("display")
    }
})

$('.mob-icon').on('click',function(){
    $('.header-nav').removeClass("display")
    $('.close-nav').removeClass("display")
    
})

$('.colse-nav').on('click',function(){
    $('.header-nav').addClass("display")
    
})

// var headerNav= document.querySelector('.header-nav')
//   function closeNav(event) {
//     if (event.target === formSeheaderNavc) {
//         $('.header-nav').addClass("display")    }
// }