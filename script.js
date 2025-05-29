document.querySelectorAll('a').forEach(link => {
  link.addEventListener('mouseenter', () => {
  link.style.textDecoration = 'underline';
    });
  link.addEventListener('mouseleave', () => {
  link.style.textDecoration = 'none';
  });
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault(); // Stops default jumping action
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});