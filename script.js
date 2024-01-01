var iconsShareBlock = document.querySelector('.icon__share'),
  networks = document.querySelector('.networks'),
  iShare = document.querySelector('.i-share');

iconsShareBlock.addEventListener('click', function () {
  if (networks.style.visibility === '' || networks.style.visibility === 'hidden') {
    networks.style.visibility = 'visible';
    this.style.background = 'var(--clr-neutral-300)';
    iShare.style.fill = 'var(--clr-neutral-100)';
    return;
  }

  networks.style.visibility = 'hidden';
  this.style.background = '';
  iShare.style.fill = '';
});