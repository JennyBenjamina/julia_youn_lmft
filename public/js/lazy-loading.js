const images = document.querySelectorAll('[data-src]');

function preloadImage(img) {
  const src = img.getAttribute('data-src');
  if (!src) {
    return;
  }

  img.src = src;
}

function myMove(img, id) {
  var pos = -300;
  clearInterval(id);
  id = setInterval(frame, 0.005);
  function frame() {
    if (pos == 0) {
      clearInterval(id);
    } else {
      pos++;
      if (img.id == 'pic-1') {
        img.style.right = pos + 'px';
      } else {
        img.style.left = pos + 'px';
      }
    }
  }
}

function slideIn(img) {
  var id = null;
  myMove(img, id);
}

const imgOptions = {
  threshold: 0.2,
  rootMargin: '0px 0px 150px 0px',
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      preloadImage(entry.target);
      slideIn(entry.target);
      imgObserver.unobserve(entry.target);
    }
  });
}, imgOptions);

images.forEach((image) => {
  imgObserver.observe(image);
});
