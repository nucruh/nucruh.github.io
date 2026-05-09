function updateTimers() {
    const timers = document.querySelectorAll('.experienceTimer');

    timers.forEach(timer => {
        const startDate = timer.getAttribute('data-start-date');
        const now = new Date();
        const start = new Date(startDate);
        const elapsedTime = now - start;

        const years = Math.floor(elapsedTime / (1000 * 60 * 60 * 24 * 365));
        const months = Math.floor(elapsedTime % (1000 * 60 * 60 * 24 * 365) / (1000 * 60 * 60 * 24 * 30));
        const days = Math.floor((elapsedTime % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));

        const timeString = `${years} years, ${months} months`;

        timer.textContent = timeString;
    });
}

const cards = document.querySelectorAll('.contentCardImg');

cards.forEach(card => {
    card.addEventListener('click', () => {
        enlargeCard(card);
    });
});

const buttons = document.querySelectorAll('.contentCardImg button, .contentCardImg a.linkButton');

buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        // button logic here
    });
});

function enlargeCard(card) {
    const img = card.querySelector('img');

    const overlay = document.createElement('div');
    overlay.className = 'imagePreview';

    const previewImg = document.createElement('img');
    previewImg.src = img.src;

    overlay.appendChild(previewImg);
    document.body.appendChild(overlay);

    // animate in
    setTimeout(() => {
        previewImg.classList.add('show');
    }, 10);

    // click anywhere to close
    overlay.addEventListener('click', () => {
        previewImg.classList.add('hide');
        overlay.classList.add('hide');
        setTimeout(() => {
            overlay.remove();
        }, 150);


    });
}

function minimizeCard(img)
{
    img.style.zIndex = 1;
    img.style.transform = 'scale(1)';
}

updateTimers();