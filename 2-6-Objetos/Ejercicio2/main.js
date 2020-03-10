'use strict';

const adalaber1 = {};
adalaber1.name = 'Susana';
adalaber1.age = 34;
adalaber1.job = 'periodista';
adalaber1.run = sport => `Estoy corriendo ${sport}`;
adalaber1.runAMarathon = distance => 'Estoy corriendo una maratón de ' + distance + ' Kilometros';

console.log(adalaber1.runAMarathon(50));

console.log(adalaber1.run('Hola'));

console.log(adalaber1.run());

console.log('Mi nombre es ' + adalaber1.name + ', tengo ' + adalaber1.age + ' años y soy ' + adalaber1.job + adalaber1.run());

const adalaber2 = {};
adalaber2.name = 'Rocío';
adalaber2.age = 25;
adalaber2.job = 'actriz';

console.log('Mi nombre es ' + adalaber2.name + ', tengo ' + adalaber2.age + ' años y soy ' + adalaber2.job);
