function slidesPlagin(activeSlide = 0){
    const slides = document.querySelectorAll('.slide');
    const img = document.querySelector('.bg-image');

    slides[activeSlide].classList.add('active');
    setBackground(slides[activeSlide]);
    slides.forEach((slide) => {
        slide.addEventListener('click', () => {
            clearActiveClasses();
            setBackground(slide);
            slide.classList.add('active');
        });
    })

    function clearActiveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove('active');
        })
    }

    function setBackground(slide) {
        img.src = `${slide.style.backgroundImage.slice(4, -1).replace(/"/g, "")}`;
    }
}

slidesPlagin(3);