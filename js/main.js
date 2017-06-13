$(document).ready(function(){

  function ScrollToPoint(clickel, element) {
    this.scroll = function(){
      $(clickel).click(function(){
        document.querySelector(element).scrollIntoView({
          behavior: 'smooth'
        });
        // console.log('Class constructor works');
      })
    }
  }

  var section1 = new ScrollToPoint('#vidBtn', '.firstSec');
  var section2 = new ScrollToPoint('#playlistBtn', '.secondSec');
  var section3 = new ScrollToPoint('#galleryBtn', '.thirdSec');

  section1.scroll();
  section2.scroll();
  section3.scroll();

})
