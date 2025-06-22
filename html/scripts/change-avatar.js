document.addEventListener('DOMContentLoaded', () => {
  const avatar = document.getElementById('avatar');
  if (!avatar) return;

  const originalSrc = 'img/propstfake.gif';
  const newSrc = 'img/tenna.gif';

  let isChanged = false;
  let revertClicks = 0;

  avatar.addEventListener('click', () => {
    if (!isChanged) {

      avatar.src = newSrc;
      isChanged = true;
      revertClicks = 0; 
    } else {

      revertClicks++;
      if (revertClicks >= 3) {
        avatar.src = originalSrc;
        isChanged = false;
        revertClicks = 0;
      }
    }
  });
});