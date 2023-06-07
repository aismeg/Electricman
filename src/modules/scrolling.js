const scrolling = () => {
  const button = document.querySelector('.up');

  document.addEventListener('scroll', () => {
    const current = window.scrollY;

    if (current >= 1110) {
      button.style.display = 'block';
    } else {
      button.style.display = 'none';
    }
  });
};

export default scrolling;
