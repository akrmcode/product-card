const card = document.querySelector('.card');
const overlay = document.querySelector('.overlay');
card.addEventListener('click', () => {
    card.classList.add('active');
    overlay.style.display = card.classList.contains('active') ? 'block' : 'none';
})
overlay.addEventListener('click', () => {
    card.classList.remove('active');
    overlay.style.display = 'none';
})