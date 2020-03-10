// Cada 3 años se produce una luna llena completamente iluminada por el Sol durante unos minutos. Esta luna es conocida como la “Luna del cazador”. En el año 2017 se pudo ver esta luna el 5 de octubre y mucha gente se la perdió. Para que no nos pase los siguientes años vamos a crear un código que muestre en consola cuándo serán las 15 próximas lunas.

// 3 años = luna del cazador
// 2017 -> 5 octubre
// siguiente luna 2017 + 3
// ¿Cuándo serán las próximas 15 lunas?

// inicialización será una declaración y asignación de variable (ej: let i = 1, se suele usar i por la palabra index)
// condición será la condición que debe cumplirse para que se ejecute el bloque de código (ej: i < 20)
// actualización será la operación que se realizará al final de cada iteración del bucle (ej: i++, que es la abreviación de i = i + 1)
// al final definimos un bloque de código entre llaves { } que se va a ejecutar si se cumple la condición

// 2017 + 3 + 3...
let year = 2017;
for (let i = 0; i < 15; i++) {
  year += 3;
  console.log('La próxima luna será el 5 de octubre de ' + year);
}

for (let i = 0; i < 15 * 3; i = i + 3) {
  console.log('La próxima luna será el 5 de octubre de ' + (2017 + i));
}

for (let i = 2017; i < 2017 + 15 * 3; i += 3) {
  console.log('La próxima luna será el 5 de octubre de ' + i);
}
