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

// const x = 5;
// const y = 10;

// function getNumber(x, y) {
//     return x * y;
// };

// const result = getNumber(x, y);
// console.log(result);

// arrow function

// const x = 5;
// const y = 4;

// getNumber = (x, y) => x * y;

// const result = getNumber(x, y);
// console.log(result);

// latihan Arrow function
// mengubah function tradisional menjadi Arrow Function

// Soal 1

// function penjumalahanTradisional(a, b) {
//     return a + b;
// };
// const result = penjumalahanTradisional(3, 4);
// console.log(result)

// // menjadi

// const penjumalahan = (a, b) => a + b;

// const hasil = penjumalahan(9, 2);
// console.log(hasil)

// Soal 2

// function sapa(nama) {
//     return "Halo, " + nama + "!";
// }
// const sapaUser = sapa("pram");
// console.log(sapaUser);

// menjadi

// const sapa = nama => 'Halo, ' + nama + '!';

// const sayUser = sapa("irgi");
// console.log(sayUser);

// Soal 3

// function cekJam() {
//     return "Sekarang jam istirahat"
// }

// cekJam = () => 'sekarang jam istirahat';

// const getStatus = cekJam();
// console.log(getStatus)

// Soal 4
// Mengembalikan Object, ubah fungsi menjadi arrow function

// function buatUser(username, role) {
//     return {
//         nama: username,
//         akses: role
//     };
// }

// buatUser = (username, role) => ({
//     name: username,
//     akses: role
// });

// // note: menambahakan tanda () agar javasript tau kalau ini sebuah objek,bukan blok kode.


// const createUser = buatUser('pram', 'admin');
// console.log(createUser)

// Soal 5 : (Map & Filter)
// Gunakan arrow function di dalam .filter() dan .map()

// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Tugas A: Filter hanta angka GENAP

// const genap = angka.filter(function (n) { return n % 2 == 0 });
// TODO:
// const genap = angka.filter(n => n % 2 === 0);
// console.log(genap)

// Tugas B: kali dua semua angka (gunakan .map())
// const dikaliDua = angka.map(function(n) { return n * 2 });

// TODO:
// const dikaliDua = angka.map(n => n * 2);
// console.log(dikaliDua)


// contoh memproses data dari database

// const produk = [
//     { nama: 'Mouse', harga: 50000 },
//     { nama: 'Laptop', harga: 5000000 },
//     { nama: 'Kabel', harga: 20000 }
// ];

// // implementasi Nyata:
// // filter barang murah (<100ribu) lalu ambil namanya saja

// const barangMurah = produk
//     .filter(item => item.harga < 100000)
//     .map(item => item.nama);

// console.log(barangMurah);

//contoh soal

// // DATA MENTAH
// const mahasiswa = [
//     { nama: 'Budi', nilai: 85 },
//     { nama: 'Siti', nilai: 60 },
//     { nama: 'Joko', nilai: 95 },
//     { nama: 'Ani', nilai: 70 },
//     { nama: 'Diki', nilai: 40 }
// ];

// // TANTANGAN:
// // Gunakan .map() untuk mengubah array object di atas menjadi array string.
// // Gunakan Arrow Function + Ternary Operator.
// // Format Output yang diinginkan: "Budi: Lulus", "Siti: Remidial", dst.

// //TODO:
// const laporan = mahasiswa.map(mhs =>
//     mhs.nama + ': ' + (mhs.nilai > 70 ? 'Lulus' : 'Mengulang')
// );

// console.log(laporan);


// .find() : mencari data 1 saja, jika ditemukan akan berhenti mencari.

// const users = [
//     { id: 1, nama: 'Budi' },
//     { id: 2, nama: 'Siti' },
//     { id: 3, nama: 'Joko' }
// ];

// //Kasus: Cari user dengan ID 2

// const userKetemu = users.find(user => user.id === 3);

// console.log(userKetemu);


// .reduce: melebur semua data di array menjadi satu nilai saja

// skenario: fitur "Keranjang Belanja"(Shopping cart). Menghitung total harga dari sekian banyak barang yang di beli

// const keranjang = [
//     { barang: 'Buku', harga: 5000 },
//     { barang: 'Pena', harga: 2000 },
//     { barang: 'Penggaris', harga: 3000 }
// ];

// // total: angka penampung sementara (akumulator)
// // item: barang yang sedang dihitung

// const totalBayar = keranjang.reduce((total, item) => {
//     return total + item.harga;
// }, 0); //<-- 0 adalah nilai awal (start dari 0 rupiah)

// console.log(totalBayar);
