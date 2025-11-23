document.addEventListener('DOMContentLoaded', function () {
    const burgerButton = document.querySelector('.burger-menu__button');
    const burgerContent = document.querySelector('.burger-menu__content');
    const burgerItems = document.querySelectorAll('.burger-menu__item');

    burgerButton.addEventListener('click', function () {
        this.classList.toggle('burger-menu__button--active');
        burgerContent.classList.toggle('burger-menu__content--active');
        document.body.classList.toggle('no-scroll');
    });

    burgerItems.forEach(item => {
        item.addEventListener('click', function () {
            burgerButton.classList.remove('burger-menu__button--active');
            burgerContent.classList.remove('burger-menu__content--active');
            document.body.classList.remove('no-scroll');
        });
    });

    document.addEventListener('click', function (event) {
        if (!event.target.closest('.burger-menu')) {
            burgerButton.classList.remove('burger-menu__button--active');
            burgerContent.classList.remove('burger-menu__content--active');
            document.body.classList.remove('no-scroll');
        }
    });
    const searchButton = document.querySelector('.header__search-button');
    const searchInputContainer = document.querySelector('.header__search-input-container');
    const searchClose = document.querySelector('.header__search-close');
    const searchInput = document.querySelector('.header__search-input');

    searchButton.addEventListener('click', function () {
        searchInputContainer.classList.add('header__search-input-container--active');
        searchInput.focus();
    });

    searchClose.addEventListener('click', function () {
        searchInputContainer.classList.remove('header__search-input-container--active');
        searchInput.value = '';
    });

    document.addEventListener('click', function (event) {
        if (!event.target.closest('.header__search-container')) {
            searchInputContainer.classList.remove('header__search-input-container--active');
        }
    });


    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            searchInputContainer.classList.remove('header__search-input-container--active');
            searchInput.blur();
        }
    });


    const burgerSearchButton = document.querySelector('.burger-menu__search-button');
    const burgerSearchInput = document.querySelector('.burger-menu__search-input');

    burgerSearchButton.addEventListener('click', function () {
        if (burgerSearchInput.value.trim() !== '') {
            performSearch(burgerSearchInput.value);
        }
    });

    burgerSearchInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter' && this.value.trim() !== '') {
            performSearch(this.value);
        }
    });

    function performSearch(query) {
        alert('Search for: ' + query);

        burgerSearchInput.value = '';
    }
    const navItems = document.querySelectorAll('.header__navigation-item');
    navItems.forEach(item => {
        item.addEventListener('click', function () {

            document.querySelector('.header__navigation-item--active')?.classList.remove('header__navigation-item--active');

            this.classList.add('header__navigation-item--active');

            localStorage.setItem('activeNav', this.dataset.nav);
        });
    });
    const navItemsburger = document.querySelectorAll('.burger-menu__item');
    navItemsburger.forEach(item => {
        item.addEventListener('click', function () {

            document.querySelector('.burger-menu__item--active')?.classList.remove('burger-menu__item--active');

            this.classList.add('burger-menu__item--active');

            localStorage.setItem('activeNav', this.dataset.nav);
        });
    });
    const AboutButton = document.querySelectorAll(".about__button");
if (AboutButton.length > 0) {
    AboutButton.forEach(button => {
        button.addEventListener("click", function() {
            showNotification("Кнопка нажата!");
        });
    });
}

function showNotification(message) {
    
    const notification = document.createElement("div");
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        z-index: 1000;
        animation: fadeInOut 3s ease-in-out;
    `;
    

    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInOut {
            0% { opacity: 0; transform: translateY(-20px); }
            10% { opacity: 1; transform: translateY(0); }
            90% { opacity: 1; transform: translateY(0); }
            100% { opacity: 0; transform: translateY(-20px); }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}
});
