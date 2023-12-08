document.addEventListener("DOMContentLoaded", function() {
  // Function to add a class when an element is in the viewport
  function addClassOnIntersection(entries, observer) {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('active');
              observer.unobserve(entry.target);
          }
      });
  }

  // Create an intersection observer
  var observer = new IntersectionObserver(addClassOnIntersection, { threshold: 0.5 });

  // Observe each animated-div
  var elements = document.querySelectorAll('.aos');
  elements.forEach(element => {
      observer.observe(element);
  });
});