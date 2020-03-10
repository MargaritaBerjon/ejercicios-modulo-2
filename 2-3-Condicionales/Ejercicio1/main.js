'use strict';

// avatar por defecto
const DEFAULT_AVATAR = 'http://placehold.it/300x300';
// avatar que eligió el usuario al registrarse
let userAvatar = 'http://www.fillmurray.com/300/300';

let image = document.querySelector('.user__avatar');

let imageSrc = DEFAULT_AVATAR || userAvatar;

image.src = imageSrc;
