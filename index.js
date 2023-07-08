const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('slideanimationup');
      }else{
          entry.target.classList.remove('slideanimationup')

      }
    });
  });
const observer2 = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('slideanimationleft');
      }
    });
  });

  
  observer.observe(document.querySelector('.benefits'));
  observer2.observe(document.querySelector('.featureSection'));

 