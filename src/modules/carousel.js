const carousel = () => {
  const arrows = document.querySelector('.services-arrow');
  const list = document.querySelector('.slide-row');
  const content = document.querySelectorAll('.slide-content');

  let itRoll = 0;
  const amount = 33;

  arrows.addEventListener('click', (e) => {
    switch (e.target.className) {
      case 'arrow-right':
        if (itRoll < (content.length - 3) * amount) {
          itRoll += amount;

          list.style.transform = `translateX(-${itRoll}%)`;
        }
        break;
      case 'arrow-left':
        if (itRoll > 0) {
          itRoll -= amount;

          list.style.transform = `translateX(-${itRoll}%)`;
        }
        break;
      default:
        list.style.transform = 'translateX(-" + 0 + "%)';

        itRoll = 0;
        break;
    }
  });
};

export default carousel;
