// Get current page filename
const currentPage = window.location.pathname.split('/').pop();
// Remove .html for matching
const pageName = currentPage.replace('.html', '');
// Find the corresponding nav link and add 'active' class
document.querySelectorAll('nav a').forEach(link => {
  if (link.getAttribute('href').includes(pageName)) {
    link.classList.add('active');
  }
});