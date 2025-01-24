document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.project-card');

    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';

        setTimeout(() => {
            card.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200); // Задержка для каждой карточки
    });
});

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.querySelector('.loader').style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 10000);
});