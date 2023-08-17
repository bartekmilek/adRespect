const $menu = $('.mobile-menu-wrapper')


$('.burger').click(function() {
    $(this).toggleClass('active');
    $('.mobile-menu-wrapper').toggleClass('active');
    $('.sub-menu').slideUp();
   });


   $('main').add('footer').click(function(){
	if($menu.hasClass('active')){
		$('.mobile-menu').removeClass('active');
		$('.burger').removeClass('opened');
		$('.sub-menu').slideUp();
		$('.has-children').removeClass('active');
	}
});


function mobileOffCanvasMenu() {
    var $offCanvasNav = $('.mobile-menu-wrapper'),
        $offCanvasNavSubMenu = $offCanvasNav.find('.sub-menu');

    /*Add Toggle Button With Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i></i></span>');

    /*Category Sub Menu Toggle*/
    $offCanvasNav.on('click', 'li a, li .menu-expand', function (e) {
        var $this = $(this);
        if ($this.parent().attr('class').match(/\b('has-children'|'has-children'|'has-sub-menu')\b/) || ($this.attr('href') === '#' || $this.hasClass('menu-expand'))) {
            e.preventDefault();
            if ($this.siblings('ul:visible').length) {
                $this.parent('li').removeClass('active');
                $this.siblings('ul').slideUp();
                $this.parent('li').find('li').removeClass('active');
            } else {
                $this.parent('li').addClass('active');
                $this.closest('li').siblings('li').removeClass('active').find('li').removeClass('active');
                $this.siblings('ul').slideDown();
            }
        }
    });
}
mobileOffCanvasMenu();

$('.search-toggle').on('click', function(e) {
    $('.search-drawer').toggleClass("search-drawer-open");
    setTimeout(function() {
        $('input[name="q"]').focus()
    }, 1000);
    e.preventDefault();
    $('.search-close').on('click', function() {
        $('.search-drawer').removeClass("search-drawer-open");
    });
});
$('.search-drawer .search-close').on('click', function(e) {
    $('.search-drawer').toggleClass("search-drawer-open");
});


function searchDrawerOffCanvasToggle() {
    var $offCanvas = $('.search-drawer'),
        $offCanvasOverlay = $('.mobilemenu-overlay');
    $('.search-toggle').on('click', function () {
        $offCanvas.addClass('search-drawer-open');
        $offCanvasOverlay.fadeIn();
    });
    $('.search-close, .mobilemenu-overlay').on('click', function () {
        $offCanvas.removeClass('search-drawer-open');
        $offCanvasOverlay.fadeOut();
    });

}
searchDrawerOffCanvasToggle();


const slides = document.querySelectorAll(".slide");

// loop through slides and set each slides translateX property to index * 100% 
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});



// select next slide button
const nextSlide = document.querySelector(".btn-next");

// select prev slide button
const prevSlide = document.querySelector(".btn-prev");

// current slide counter
let curSlide = 0;
// maximum number of slides
let maxSlide = slides.length - 1;



// add event listener and navigation functionality
nextSlide.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  

//   move slide by -100%
  slides.forEach((slide, indx) => {
    slide.style.opacity = "1";
  slide.style.visibility = "visible";
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});


// add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  //   move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.opacity = "1";
  slide.style.visibility = "visible";
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});


jQuery(document).ready(function($){
  $('.grid').masonry({
    // options
    itemSelector: '.grid-item',
    gutter: '.gutter-sizer',
    columnWidth: 450,
    percentPosition: true
  }); 

  $(".projects-button").click(function(e){
    $(".grid-item").removeClass('hidden');
    $('.grid').masonry('layout');
    $(".grid-overlay").css("display", "none");
    $(this).hide();
  });
});

