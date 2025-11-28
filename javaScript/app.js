// Variable

// const myName = 'Irgi Pramudia';
// console.log(myName);

// Manipulasi string

// const firstName = 'Irgi';
// const lastName = 'Pramudia';
// const fullName = firstName + ' ' + lastName;
// console.log(fullName);

// const name = 'Irgi';
// const favoriteFood = 'Rawon';
// const text = 'hallo namaku' + ' ' + name + ' ' + 'aku suka makan' + ' ' + favoriteFood;
// console.log(text);

// Number
// floating point adalah angka desimal

// const priceApel = 5000;
// const pricePisang = 10000;
// const jumlahApel = 3;
// const jumlahPisang = 2;
// const diskon = 0.10;

// const origialPrice = priceApel * jumlahApel + pricePisang * jumlahPisang;
// const price = origialPrice - origialPrice * diskon;

// console.log(price);

// boolean adalah data true or false

// const hasChildren = true;
// const isStudent = true;
// const isEmployed = true;
// const canDriveBike = true;
// const hasPets = true;
// const isTall = true;
// const canCook = false;
// const hasSiblings = true;

// if else

// object



// undefined & Null
// disarankan menggunakan null untuk menandakan suatu yang tidak ada

// contoh membuat variable yang tidak ada

// const Shoe = 'Nike';
// const Bike = null;
// const motorBike = 'honda';
// const Ship = null;

// Function
// fungsi untuk melakukan sesuatu
//
// membahas penggunaan argumen didalam function.
// function namaFunction(parameter){
//     functionbody
// };
// namaFunction(argument)

// function myName() {
//     console.log('Irgi Pramudia')
// };
// myName();
// myName();
// myName();
// myName();

// function jenisAngka(number) {
//     if (number > 0) {
//         console.log('positif');
//     } else if (number < 0) {
//         console.log('negatif');
//     } else {
//         console.log('netral');
//     }
// };
// jenisAngka(1)

// function school(university, fakultas) {
//     console.log('saya mahasiswa ' + university + ' dengan jurusan ' + fakultas);
// };
// school('USM', 'FTIK');

// buat function yang memiliki 2 parameter yaitu x dan y.
// function ini akan log text dengan format x ditambah y sama dengan z

// function total(x, y) {
//     const z = x + y;
//     console.log(x + ' + ' + y + ' = ' + z);
// };
// total(2, 5)

// scope & return 
// Apa it Scope?
// adalah apa yang kita tulis di halaman, ada dua jenis yaitu global scope dan block scope. 
// global scope menyangkup semua yang kita tulis dan block scope yang berada dalam function atau berada dalam kurung kurawal. 
// 

// return
// adalah pengembalian data 
// function void yang tidak mengembalikan data apapun.
// unreachable code data yang tidak akan pernah di eksekusi sama sekali karena return mengakhiri function.

// challenge
// buat function yang menerima 2 angka dan mengembalikan hasil perkalian 2 angka tersebut.
// Panggil function ini dan simpan hasilnya dalam variable. selanjutnyya log variable itu.

const x = 5;
const y = 10;

function getNumber(x, y) {
    return x * y;
};

const result = getNumber(x, y);
console.log(result);