const adalabers = [
  {
    name: 'María',
    age: 29,
    job: 'diseñadora'
  },
  {
    name: 'Lucía',
    age: 31,
    job: 'ingenira química'
  },
  {
    name: 'Susana',
    age: 34,
    job: 'periodista'
  },
  {
    name: 'Rocío',
    age: 25,
    job: 'actriz'
  },
  {
    name: 'Inmaculada',
    age: 21,
    job: 'diseñadora'
  }
];

function countAdalabers(adalabers) {
  return adalabers.length;
}

function averageAge(adalabers) {
  let acc = 0;
  for (const adalaber of adalabers) {
    acc = acc + adalaber.age;
  }
  return acc / adalabers.length;
}

function theYoungest(adalabers) {
  let minAgeAdalaber = adalabers[0];
  for (const adalaber of adalabers) {
    if (adalaber.age < minAgeAdalaber.age) {
      minAgeAdalaber = adalaber;
    }
  }
  return minAgeAdalaber.name;
}

function countDesigners(adalabers) {
  let acc = 0;
  {
    for (const adalaber of adalabers) {
      if (adalaber.job === 'diseñadora') {
        acc += 1;
      }
    }
  }
  return acc;
}

console.log(countDesigners(adalabers));
