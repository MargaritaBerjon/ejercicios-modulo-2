function getEmoji() {
  fetch('https://api.rand.fun/games/rockpaperscissorslizardspock')
    .then(response => response.json())
    .then(data => {
      document.body.innerHTML = data.result;
    });
}
document.body.addEventListener('click', getEmoji);
