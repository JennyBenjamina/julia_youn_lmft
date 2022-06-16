let options = {
  root: null,
  rootMargin: '0px',
  threshold: 0,
};
var nav = document.querySelector('.navbar');

let observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      nav.classList.add('inverse');
    } else {
      nav.classList.remove('inverse');
    }
    console.log(entry);
    // observer.unobserve(entry.target);
  });
}, options);

let target = document.querySelector('.marketing');
observer.observe(target);
