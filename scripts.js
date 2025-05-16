// Простая функция для плавного скролла
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('trialForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    alert('Форма отправлена! Мы свяжемся с вами в ближайшее время.');
    this.reset();
});
