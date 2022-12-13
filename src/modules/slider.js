/*BETA*/
const slider = () => {
    const topSlider = document.querySelector('.top-slider');
    const item = topSlider.querySelectorAll('.item');
    const timeInt = 3000;

    let currentSlide = 0;
    let timeId;

    const prevSlide = (elems, index) => {
        elems[index].style.display = "none";
    };
    const nextSlide = (elems, index) => {
        elems[index].style.display = "block";
    };

    const autoSlide = () => {
        prevSlide(item, currentSlide);

        currentSlide++;

        if (currentSlide >= item.length) {
            currentSlide = 0;
        }

        nextSlide(item, currentSlide);
    };

    const startSlide = (timer = 1500) => {
        timeId = setInterval(autoSlide, timer);
    };
    const stopSlide = () => {
        clearInterval(timeId);
    };

    topSlider.addEventListener('mouseenter', (e) => {
        if (e.target.matches('.top-slider')) {
            stopSlide();
        }
    }, true);
    topSlider.addEventListener('mouseleave', (e) => {
        if (e.target.matches('.top-slider')) {
            startSlide(timeInt);
        }
    }, true);

    startSlide(timeInt);
};

export default slider;