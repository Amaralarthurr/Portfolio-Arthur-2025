window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    header.classList.toggle('active-scroll', window.scrollY > 100)
    
})