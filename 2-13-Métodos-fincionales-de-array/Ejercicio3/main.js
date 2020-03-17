const users = [
  { name: 'María', isPremium: false },
  { name: 'Lucía', isPremium: true },
  { name: 'Susana', isPremium: true },
  { name: 'Rocío', isPremium: false },
  { name: 'Inmaculada', isPremium: false }
];
const welcomeMessage = users.map(user => {
  if (user.isPremium === true) {
    return `Bienvenida ${user.name}. Gracias por confiar en nosotros.`;
  } else {
    return `Bienvenida ${user.name}.`;
  }
});

console.log(welcomeMessage);
