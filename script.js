// Прокрутка страницы - обновление стилей плавающего меню
window.onscroll = function() {
    updateFloatingMenu();
};

function updateFloatingMenu() {
    var floatingMenu = document.getElementById("floating-menu");
    var content = document.getElementById("content");

    if (window.pageYOffset > content.offsetTop) {
        floatingMenu.style.background = "#555";
    } else {
        floatingMenu.style.background = "#333";
    }
}
