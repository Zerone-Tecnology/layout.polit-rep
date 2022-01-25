$('.slider-wrap').owlCarousel({
  items: 1,
  nav: true,
  navText : ["<i class='arr-left'></i>","<i class='arr-right'></i>"],
  autoplay: true,
  autoplayTimeout: 5000
});

$('.news-slider').owlCarousel({
  items: 1,
  nav: false,
  navText : ["<i class='arr-left'></i>","<i class='arr-right'></i>"],
  autoplay: true,
  autoplayTimeout: 5000
});

const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
});

$(".parent-top" ).click(function() {
  $('body').toggleClass('stop-scrolling')
  $("header").toggleClass('position-fixed');
  $('.megamenu').toggleClass('open_with_animation');
  $('.parent-top').children('span').toggleClass('close-btn');
});
$(window).scroll(function() {
  var height = $(window).scrollTop();

  if(height > 1){
    $('header').removeClass('header-fixed');
    $('#s-one').addClass('padding-top');
  } else{
    $('header').addClass('header-fixed');
    $('#s-one').removeClass('padding-top');
  }
});




