// this is for index page navigation
document.querySelectorAll('.tab-link').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault(); // Stop page jump

    // Hide all other sections
    document.querySelectorAll('.sections').forEach(section => {
      section.style.display = 'none';
    });

    // Show only the target section
    const targetId = this.getAttribute('href'); 
    document.querySelector(targetId).style.display = 'block';
    
    // Scroll to top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling animation
    });
  });
});