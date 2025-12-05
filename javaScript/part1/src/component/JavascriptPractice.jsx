import React from "react";

const JavascriptPractice = () => {
  /* Variable */

  // const x = 1;
  // let y = 5;

  // console.log(x, y); // 1 5 are printed

  // y += 10;
  // console.log(x, y); // 1 15 are printed

  // y = "sometext";
  // console.log(x, y); // 1 sometext are printed

  // x = 5;   // causes an error

  /* Array */

  // const t = [1, -1, 3];

  // t.push(5); //create new array

  // console.log(t.length); // 4 is printed
  // console.log(t[1]); // -1 is printed

  // t.forEach((value) => {
  //   console.log(value);  // numbers 1, -1, 3, 5 are printed, each on its own line
  // });

  /* yang perlu diperhatikan pada bagian ini fakta bahwa meskipun variable yang dideklarasikan dengan const tidak dapat ditetapkan ulang ke nilai yagn berbeda, konten objek yang dirujuk tetap dapat dimodifikasi

  salah satu cara mengulangi item array adalah dengan menggunakan forEach. forEach menerima fungsi yang didefinisikan sintax panah sebagai parameter.

  forEach memanggil fungsi untuk setiap item dalam array. */

  // const t = [2, -2, 3];

  // const t2 = t.concat(5); //create new array

  // console.log(t); // 2, -2, 3 is printed
  // console.log(t2); // 2, -2, 3, 5 is printed

  // const animal = ["dog", "cat"];
  // const animal2 = animal.concat("bird");

  // console.log(animal);
  // console.log(animal2);

  // const car = ["bmw", "ferrari", "porsche"];

  // const newCar = car.concat("avanza");

  // console.log(car);
  // console.log(newCar);

  /* catatan: .concat tidak akan menambahkan item baru kedalam array lama, tetapi akan mengembalikan array baru. selain berisi array lama ,juga berisi array baru. */

  /* .map
  berdasarkan array lama, map membuat arrayy baru yang menggunakan fungsi yang diberikan sebagai parameter untuk membuat item. */

  // const t = [1, 2, 3];

  // const m1 = t.map((value) => value * 2);
  // console.log(m1);

  // const m2 = t.map((value) => "<li>" + value + "</li>");
  // console.log(m2); // [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ] is printed

  /* disini array yang berisi nilai intrger diubah menjadi array yang berisi string HTML menggunakan metode map. */

  // const t = [1, 2, 3, 4, 5];

  // const [first, second, ...rest] = t;

  // console.log(first, second);
  // console.log(rest);

  /* diatas variabel first diberi bilanhgan bulat pertama dalam array, dan variable second diberi bilangan bulat kedua dalam array. variabel rest mengumpulkan bilangan bulat yang tersisa ke dalam arraynya sendiri. */

  /* Object
   ada beberapa cara berbeda untuk mendefinisikan objek dalam JS. salah satu metode yang sangat umum adalah menggunakan literal objek, yang dilakukan untuk mencantumkan propertinya dalam kurung kurawal */

  // const object1 = {
  //   name: "irgi pramudia",
  //   age: 25,
  //   education: "S.kom",
  // };

  // const object2 = {
  //   name: "Full Stack web application development",
  //   level: "Intermediate studies",
  //   size: 5,
  // };

  // const object3 = {
  //   name: {
  //     first: "Dan",
  //     last: "Abrmov",
  //   },
  //   grades: [2, 3, 5, 3],
  //   departement: "Semarang University",
  // };

  // console.log(object1.name);
  // const fieldName = "age";
  // console.log(object1[fieldName]);

  /* function */

  // const sum = (p1, p2) => {
  //   console.log(p1);
  //   console.log(p2);
  //   return p1 + p2;
  // };

  // const result = sum(1, 6);
  // console.log(result);

  // const t = [1, 2, 3];
  // const tSquared = t.map((p) => p * p);

  // console.log(tSquared);

  // const average = (a, b) => {
  //   return (a + b) / 2;
  // };

  // const result = average(2, 5);
  // console.log(result);

  /* Array.prototype.join() */
  /* menggabungkan semua elemen dalam  larik ini, dipisahkan dengan koma atau string pemisah yang ditentukan */

  /* jika suatu elemen adalah undefined atau null, elemen tesebut akan dikonversi menjadi string kosong, bukan string "null" atau "undefined" */

  /* metode ini join diakses secara internal Array.prototype.toString() tanpa argumen. mengganti join instan array toString juga akan mengganti perilakunya.
  
  Array.prototype.join() secara rekursif, setiap elemen, termasuk array lain, dikonversi menjadi string,  karena string yang dikembalikan oleh Array.prototype.toString(yang sama dengan memanggil join()) tidak memiliki pembatas, array bersarang tampak diratakan */

  // const matrix = [
  //   [1, 2, 3],
  //   [4, 5, 6],
  //   [6, 7, 8],
  // ];

  // console.log(matrix.join()); // 1,2,3,4,5,6,7,8,9
  // console.log(matrix.join(";")); //1,2,3;4,5,6;7,8,9

  // const arr = [];
  // arr.push(1, [3, arr , 4], 2);
  // console.log(arr.join(";")); //1;3,,4;2

  /* pembaruan status bersifat asynchronous */

  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      <h3>Materi Javascript Basics</h3>
    </div>
  );
};

export default JavascriptPractice;
