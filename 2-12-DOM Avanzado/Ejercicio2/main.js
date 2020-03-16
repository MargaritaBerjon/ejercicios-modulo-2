const city = document.querySelector('select');
const photo1 = document.querySelector('.js-photo-1');
const photo2 = document.querySelector('.js-photo-2');
const photo3 = document.querySelector('.js-photo-3');

const options = {
  madrid: {
    src1: 'https://www.lavanguardia.com/r/GODO/LV/p7/WebSite/2020/03/14/Recortada/img_dduch_20200314-125311_imagenes_lv_propias_dduch_20200314-27-kCxC-5NU4F3JDVC0HRSMU-992x558@LaVanguardia-Web.jpg',
    src2: 'https://www.larazon.es/resizer/ULjQkDfSGAc2e_ksrlFJ3061uOg=/840x560/smart/arc-photo-larazon.s3.amazonaws.com/eu-central-1-prod/public/BKYUFMA4ZNBHBMZF4WWFDLJWHI.jpg',
    src3: 'https://phantom-elmundo.unidadeditorial.es/f009345bcfa76df3c3d311190123f5f3/resize/1300/assets/multimedia/imagenes/2020/03/14/15841764705348.jpg'
  },
  nuevaYork: {
    src1: 'https://images.clarin.com/2020/03/15/times-square-nueva-york-johannes___pyid3VvL_1256x620__1.jpg',
    src2: 'https://rec-end.elnuevodia.com/images/tn/587/0/4465/3371/900/789/2020/03/14/32a7c11da673413895869be4006ff6a6.jpg',
    src3: 'https://eldiariony.files.wordpress.com/2020/03/0b839b0ee49bc560117ec4123febf05b57d33235.jpg?quality=60&strip=all&w=940'
  },
  paris: {
    src1: 'https://img.jakpost.net/c/2020/03/13/2020_03_13_89155_1584088787._large.jpg',
    src2: 'https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2020/03/13/coronavirus-en-francia.jpeg',
    src3: 'https://s.france24.com/media/display/ee4d1312-6444-11ea-a9f4-005056bf87d6/w:1240/p:16x9/78aa4ce27fb0bcaa5e55e53f809c25aba7c984db.webp'
  }
};

function showMyCity() {
  if (options[city.value]) {
    photo1.src = options[city.value].src1;
    photo2.src = options[city.value].src2;
    photo3.src = options[city.value].src3;
  } else {
    photo1.src = '';
    photo2.src = '';
    photo3.src = '';
  }
}

city.addEventListener('change', showMyCity);

//OTRA FORMA DE HACER EL EJERCICIO. Con esta forma no hace falta crear el objeto options

// function showMyCity() {
//   if (city.value === 'madrid') {
//     photo1.src = 'https://www.lavanguardia.com/r/GODO/LV/p7/WebSite/2020/03/14/Recortada/img_dduch_20200314-125311_imagenes_lv_propias_dduch_20200314-27-kCxC-5NU4F3JDVC0HRSMU-992x558@LaVanguardia-Web.jpg';
//     photo2.src = 'https://www.larazon.es/resizer/ULjQkDfSGAc2e_ksrlFJ3061uOg=/840x560/smart/arc-photo-larazon.s3.amazonaws.com/eu-central-1-prod/public/BKYUFMA4ZNBHBMZF4WWFDLJWHI.jpg';
//     photo3.src = 'https://phantom-elmundo.unidadeditorial.es/f009345bcfa76df3c3d311190123f5f3/resize/1300/assets/multimedia/imagenes/2020/03/14/15841764705348.jpg';
//   } else if (city.value === 'nuevaYork') {
//     photo1.src = 'https://images.clarin.com/2020/03/15/times-square-nueva-york-johannes___pyid3VvL_1256x620__1.jpg';
//     photo2.src = 'https://rec-end.elnuevodia.com/images/tn/587/0/4465/3371/900/789/2020/03/14/32a7c11da673413895869be4006ff6a6.jpg';
//     photo3.src = 'https://eldiariony.files.wordpress.com/2020/03/0b839b0ee49bc560117ec4123febf05b57d33235.jpg?quality=60&strip=all&w=940';
//   } else if (city.value === 'paris') {
//     photo1.src = 'https://img.jakpost.net/c/2020/03/13/2020_03_13_89155_1584088787._large.jpg';
//     photo2.src = 'https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2020/03/13/coronavirus-en-francia.jpeg';
//     photo3.src = 'https://s.france24.com/media/display/ee4d1312-6444-11ea-a9f4-005056bf87d6/w:1240/p:16x9/78aa4ce27fb0bcaa5e55e53f809c25aba7c984db.webp';
//   } else {
//     photo1.src = '';
//     photo2.src = '';
//     photo3.src = '';
//   }
// }
