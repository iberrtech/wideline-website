////header-slider
$(document).ready(function(){
  $('.header-slider').slick({
    autoplay: true,
    autoplaySpeed: 1000, // Change slide every 5 seconds
    dots: false,
    arrows: false,
    fade: true,
    cssEase: 'linear'
  });

  // Handle captions animation
  $('.header-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    // Hide current caption
    $('.slick-current .slider-caption').css('opacity', '1');
  });
});

/////scroll y and navbar fixed
window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');

  if (window.scrollY > 50) {
    navbar.style.position = 'fixed';
    navbar.style.top = 0;
    navbar.style.width = '100%';
  } else {
    navbar.style.position = 'sticky';
  }
});


////accordion
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


////client-slider
//////product slider 
$(document).ready(function(){
  $('.client-slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });
});


////////numbers count increase animation
const countElement1 = document.getElementById('count1');
const countElement2 = document.getElementById('count2');
const countElement3 = document.getElementById('count3');

function startCountingOnIntersection(counterElement, limit, duration) {
  let count = 0;
  let countingStarted = false;
  function updateCount() {
    counterElement.textContent = count;
  }
  function countUp() {
    if (count <= limit) {
      updateCount();
      count++;
      requestAnimationFrame(countUp);
    }
  }
  const observer = new IntersectionObserver((entries) => {
    if (!countingStarted && entries[0].isIntersecting) {
      countingStarted = true;
      const startTime = performance.now();

      function animate() {
        const elapsedTime = performance.now() - startTime;
        const progress = elapsedTime / duration;

        if (progress < 1) {
          count = Math.min(Math.floor(progress * limit), limit);
          updateCount();
          requestAnimationFrame(animate);
        } else {
          count = limit;
          updateCount();
        }
      }

      animate();
    }
  });
  observer.observe(counterElement);
}
// Set the limit for counting and the duration in milliseconds (e.g., 1000ms for 1 second)
startCountingOnIntersection(countElement1, 200, 2000);
startCountingOnIntersection(countElement2, 5, 2000);
startCountingOnIntersection(countElement3, 1000, 2000);


///// (onclick) JavaScript function to handle the redirection
function service(a) {
  // Set the new URL
  if(a==1){
      window.location.href = 'air_conditioning.html';
  }else if(a==2){
      window.location.href = 'electrical.html'
  }else if(a==3){
    window.location.href = 'plumbing.html'
  }else if(a==4){
    window.location.href = 'fire_fight_work.html'
  }else if(a==5){
    window.location.href = 'mep_service.html'
  }

  // Redirect to the new URL
  
}