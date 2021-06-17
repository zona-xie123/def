$(document).ready(function () {
  AOS.init();
  $('.scroll-line').click(function () {
    $("html,body").animate({
      scrollTop: $("#sevice-con").offset().top - 150
    }, 500);
  })

  if($(window).width() < 600){
$('.phone').after($('.scroll-line'));
  }
  $('.revealedBox').each(function(i){ 

    var childrenSpan = $(this).children('span').length;
  
    $(this).addClass('childrenSpan-' + childrenSpan);  
  
    if($(window).scrollTop() + $(window).height() > $(this).offset().top + $(this).outerHeight() ){ 
      $(this).addClass('revealedBox-in');       
    }   
  
  }); 
  
  $(window).scroll(function() { 
    $('.revealedBox').each(function(i){  
    if($(window).scrollTop() + $(window).height() > $(this).offset().top ){ 
      $(this).addClass('revealedBox-in');       
    }   
  }); 
    
  });

  // 第一重輪播畫面
       
  var mySwiper = new Swiper ('.swiper-container', {
    speed: 400,
    spaceBetween: 100,
    initialSlide: 0,
    //truewrapper adoptsheight of active slide
    autoHeight: false,
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // delay between transitions in ms
    autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
    autoplayStopOnLast: false, // loop false also
    // If we need pagination
    pagination: {
			el: '.swiper-pagination',
			clickable: true,
			bulletClass: 'slideshow-pagination-item',
			bulletActiveClass: 'active',
			clickableClass: 'slideshow-pagination-clickable',
			modifierClass: 'slideshow-pagination-',

		},
  
    // "slide", "fade", "cube", "coverflow" or "flip"
    effect: 'slide',
    // Distance between slides in px.
    spaceBetween: 30,
    //
    slidesPerView: 2,
    //
    centeredSlides: true,
    //
    slidesOffsetBefore: 0,
    //
    grabCursor: true,
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
     
    }
  })        

  // var swiper = new Swiper('.swiper-container', {

  //   pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true,
  //     bulletClass: 'slideshow-pagination-item',
  //     bulletActiveClass: 'active',
  //     clickableClass: 'slideshow-pagination-clickable',
  //     modifierClass: 'slideshow-pagination-',

  //   }
  // });
  //錨點
  $('.main-nav ul.anchor li a').click(function () {

    //Animate
    $('html, body').stop().animate({
      scrollTop: $($(this).attr('href')).offset().top - 90
    }, 400);
    return false;
  });
  //faq_down
  $('.tabs .qa-section').each(function (i) {
    var _number = i;
    $(this).click(function () {
      $(this).toggleClass('active-qa')
      $('.answer').eq(_number).slideToggle(200);
    });
  });

  //tab
  $(".tab-list").on("click", ".tab", function (e) {
    e.preventDefault();

    $(".tab").removeClass("active-tab");
    $(".tab-content").removeClass("show");
    $(this).addClass("active-tab");
    $($(this).attr('href')).addClass("show");
  });
  $(".tab-list-1").on("click", ".tab-1", function (e) {
    e.preventDefault();

    $(".tab-1").removeClass("active-tab");
    $(".tab-content-1").removeClass("show");
    $(this).addClass("active-tab");
    $($(this).attr('href')).addClass("show");
  });
})
