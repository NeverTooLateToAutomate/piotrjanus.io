/*
$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top -69
	    }, 750, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});
/*https://stackoverflow.com/questions/11365091/jquery-scroll-to-anchor-minus-set-amount-of-pixels*/

/*
$(document).ready(function () {
        $('ul.nav > li').click(function (e) {
            e.preventDefault();
            $('ul.nav > li').removeClass('active');
            $(this).addClass('active');                
        });            
    });


$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});

/*google maps*/
function myMap() {
  var myCenter = new google.maps.LatLng(52.23027686758034,20.934045910835266);
  var mapCanvas = document.getElementById("map");
  var mapOptions = {center: myCenter, zoom: 13	};
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({position:myCenter});
  marker.setMap(map);
}
/*
AIzaSyBsnvaVugZfEOc330aLW3KDUeqCgc7P2mQ
To use this code on your website, get a free API key from Google.
Read more at: https://www.w3schools.com/graphics/google_maps_basic.asp
*/


/*counter https://bootsnipp.com/snippets/o1V0y*//*
var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});


/*https://www.w3schools.com/bootstrap/bootstrap_theme_company.asp*/
/*slide*/
$(window).scroll(function() {
  $(".slideanim").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 600) {
      $(this).addClass("slide2");
    }
  });
});





