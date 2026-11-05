document.addEventListener("DOMContentLoaded", function() {
    // Находим все блоки, которые должны анимироваться
    const reveals = document.querySelectorAll('.reveal-block');

    // Создаем "наблюдатель", который следит за прокруткой
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Если блок появился на экране (хотя бы на 15%)
            if (entry.isIntersecting) {
                // Добавляем класс, который запускает анимацию в CSS
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.15 
    });

    // Запускаем наблюдение за каждым блоком
    reveals.forEach(reveal => {
        observer.observe(reveal);
    });
});