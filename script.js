const btnCardShare = document.getElementById('btn__card--share');
const cardShare = document.getElementById('card__share');

btnCardShare.addEventListener('click', () => {
  cardShare.classList.toggle('fade__in');
});

cardShare.addEventListener('mouseleave', () => {
  cardShare.classList.remove('fade__in');
});
