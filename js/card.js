document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.participants__cards .card');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const numDisplay = document.querySelector('.participants__num');

    let currentIndex = 0;
    const cardsToShow = 3; // Количество отображаемых карточек

    function updateCards() {
        // Скрываем все карточки
        cards.forEach(card => {
            card.classList.remove('active');
            card.style.display = 'none'; // Скрываем карточки
        });

        // Показываем нужные карточки с задержкой для анимации
        for (let i = currentIndex; i < currentIndex + cardsToShow && i < cards.length; i++) {
            cards[i].style.display = 'flex'; // Показываем карточки
            setTimeout(() => {
                cards[i].classList.add('active'); // Добавляем класс активной карточке с задержкой
            }, 10); // Небольшая задержка для активации перехода
        }

        // Обновляем номер участника
        numDisplay.textContent = `${Math.min(currentIndex + cardsToShow, cards.length)}/${cards.length}`;

        // Управление состоянием кнопок
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex + cardsToShow >= cards.length;
    }

    prevBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex -= 1; // Переход к предыдущей группе карточек
            updateCards();
        }
    });

    nextBtn.addEventListener('click', function() {
        if (currentIndex + cardsToShow < cards.length) {
            currentIndex += 1; // Переход к следующей группе карточек
            updateCards();
        }
    });

    updateCards(); // Инициализация отображения первых трех карточек
});