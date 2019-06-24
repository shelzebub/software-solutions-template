//Global Variables
var currentYear = new Date().getFullYear();
console.log("helo");
// shrinking navbar
function checkForNavShrink(scrolledPixels) {
  if (screen.width <= 699) {
      let navbar = $('nav');
      if (scrolledPixels > 300) {
        
          navbar.find('#navList').addClass('shrink')
      } else {
          navbar.find('#navList').removeClass('shrink')
      }
  } else {
      // Bigger Screen sizes
      let navbar = $('nav');
      if (scrolledPixels > 450) {
          navbar.find('#navList').addClass('shrink')
      } else {
          navbar.find('#navList').removeClass('shrink')
      }
  }
}

// loading handlers
function initializeEvents() {
  //scroll listener
  $(window).scroll(function() {
      // shrinking navbar
      checkForNavShrink($(this).scrollTop());
  });

    // onclick listener
    $('#aboutNav').click(() => {
        window.scrollTo({
            'behavior': 'smooth',
            'left': 0,
            'top': document.querySelector('#catchphrase').offsetTop
          });
    });
    $('#servicesNav').click(() => {
        window.scrollTo({
            'behavior': 'smooth',
            'left': 0,
            'top': (document.querySelector('#services').offsetTop)
          });
    });
    $('#storiesNav').click(() => {
        window.scrollTo({
            'behavior': 'smooth',
            'left': 0,
            'top': document.querySelector('#stories').offsetTop
          });
    });
    $('#contactNav').click(() => {
        window.scrollTo({
            'behavior': 'smooth',
            'left': 0,
            'top': document.querySelector('#contacts').offsetTop
          });
    });
    $('#scrollToTop').click(() => {
      window.scrollTo({
          'behavior': 'smooth',
          'left': 0,
          'top': 0
        });
  });
}

// Google Maps API
function initMap() { 
    var surreyCentral = {lat: 49.186392, lng: -122.848374}; 
    var map = new google.maps.Map( document.getElementById('map'), {zoom: 15, center: surreyCentral}); 
    var marker = new google.maps.Marker({position: surreyCentral, map: map}); 
}

// Onload
$(function() {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
    
    initializeEvents();
});