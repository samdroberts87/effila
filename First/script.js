// JavaScript to make the element fade out when scrolling past the parent div
if (window.innerWidth <= 768) { // Only run on mobile devices
    const containerQ1 = document.querySelector('.container-q1');
    const testDiv = document.getElementById('test-div');
    const rect = testDiv.getBoundingClientRect();
    const originalTop = rect.top; // Original top position relative to the viewport
    let isFixed = false;

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        if (scrollY >= originalTop && scrollY <= originalTop + testDiv.clientHeight) {
            if (!isFixed) {
                containerQ1.classList.add('fixed-container');
                containerQ1.style.width = `${testDiv.clientWidth}px`; // Set width to match "test-div"
                isFixed = true;
                containerQ1.style.opacity = 1; // Make sure it's fully visible when fixed
            }
        } else {
            if (isFixed) {
                containerQ1.style.opacity = 0;
                isFixed = false;
            }
        }
    });
}
if (window.innerWidth <= 768) { // Only run on mobile devices
document.addEventListener("DOMContentLoaded", function() {
    const heroImageContainer = document.querySelector('.hero-image-container');
    const sellingPoints = document.getElementById('selling-points');
    const containerWrapperAu = document.querySelector('.container-wrapper-au');
    const navbarBrand = document.querySelector('.navbar-brand');
  
    // Add animation classes to elements to trigger the animations
    heroImageContainer.classList.add('fade-in');
    sellingPoints.classList.add('slide-left');
    containerWrapperAu.classList.add('slide-right');
  
    // Make the navbar-brand element initially invisible
    navbarBrand.style.opacity = '0';
  
    // Add the fade-in class to the navbar-brand with a delay
    setTimeout(function() {
      navbarBrand.style.opacity = '1'; // Ensure it stays visible after fading in
      navbarBrand.classList.add('fade-in');
    }, 1000); // 1000 milliseconds = 1 second delay
  });
  
}
else {
    const heroImageContainer = document.querySelector('.hero-image-container');
    heroImageContainer.classList.add('slide-left');
}
//   our-services-box

// #contact-us