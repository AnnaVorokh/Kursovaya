// Простая функция для плавного скролла
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function trial() {
var form = document.getElementById('trialForm');
    if (form.value.length != 0) {
        alert('Форма отправлена! Мы свяжемся с вами в ближайшее время.');
        form.reset();
    } else {
        alert('Форма не заполнена!');
        form.reset();
}
