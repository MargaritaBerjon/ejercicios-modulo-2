'use strict';

const adalaber1 = {};
adalaber1.name = 'Susana';
adalaber1.age = 34;
adalaber1.job = 'periodista';
adalaber1.run = sport => `Estoy corriendo ${sport}`;
adalaber1.runAMarathon = distance => 'Estoy corriendo una maratón de ' + distance + ' Kilometros';
adalaber1.showBio = function() {
  return 'Mi nombre es ' + this.name + ', tengo ' + this.age + ' años y soy ' + this.job;
};

console.log(adalaber1.showBio());

const adalaber2 = {};
adalaber2.name = 'Rocío';
adalaber2.age = 25;
adalaber2.job = 'actriz';
adalaber2.showBio = function() {
  return 'Mi nombre es ' + this.name + ', tengo ' + this.age + ' años y soy ' + this.job;
};

console.log(adalaber2.showBio());

console.log('Mi nombre es ' + adalaber2.name + ', tengo ' + adalaber2.age + ' años y soy ' + adalaber2.job);
