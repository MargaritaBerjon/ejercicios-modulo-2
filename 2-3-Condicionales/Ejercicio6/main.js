let avocados;
const avocadoPrice = 1.5;
const money = 33;

if (money >= avocadoPrice) {
  avocados = money / avocadoPrice;
} else {
  avocados = 0;
}

money >= avocadoPrice ? (avocados = money / avocadoPrice) : (avocados = 0);

//Otro ejemplo

let pelo = 'rubio';

if (pelo === 'rubio') {
  colorPelo = 'Rubio';
} else {
  colorPelo = 'No se';
}

pelo === 'rubio' ? (colorPelo = 'Rubio') : 'No sé';
