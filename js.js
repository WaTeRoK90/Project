// JS - версия
window.addEventListener('scroll', function() {
    let height = window.scrollY;
    /*Если сделали скролл на 30px задаём новый класс для header*/
    if(height > 30){
    document.querySelector('header').classList.add('scrolled');
    } else{
    /*Если меньше 30px удаляем класс для header*/
    document.querySelector('header').classList.remove('scrolled');
    }
    });