let notification = document.querySelector('.notification');

if (notification.classList.contains('warning')) {
  notification.querySelector('h1').innerText = 'AVISO';
  notification.querySelector('p').innerText = 'Tenga cuidado';
} else if (notification.classList.contains('error')) {
  notification.querySelector('h1').innerText = 'EROR';
  notification.querySelector('p').innerText = 'Ha surgido un error';
} else if (notification.classList.contains('succes')) {
  notification.querySelector('h1').innerText = 'CORRECTO';
  notification.querySelector('p').innerText = 'Los datos son correctos';
}
