import { useState } from "react";

// const App = ({ notes }) => {
//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         {notes.map((note) => (
//           <li key={note.id}>{note.content}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

/* memisahkan tampilan satu catatan menjadi komponen catatan tersendiri */

// import Note from "./component/Note";

// const App = ({ notes }) => {
//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         {notes.map((note) => (
//           <Note key={note.id} note={note} />
//         ))}
//       </ul>
//     </div>
//   );
// };

/* Variable */

// const x = 1;
// let y = 5;

// console.log(x, y); // 1 5 are printed

// y += 10;
// console.log(x, y); // 1 15 are printed

// y = "sometext";
// console.log(x, y); // 1 sometext are printed

// x = 5;   // causes an error

/* Array */

// const t = [1, -1, 3];

// t.push(5); //create new array

// console.log(t.length); // 4 is printed
// console.log(t[1]); // -1 is printed

// t.forEach((value) => {
//   console.log(value);  // numbers 1, -1, 3, 5 are printed, each on its own line
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
//   name: "irgi pramudia",
//   age: 25,
//   education: "S.kom",
// };

// const object2 = {
//   name: "Full Stack web application development",
//   level: "Intermediate studies",
//   size: 5,
// };

// const object3 = {
//   name: {
//     first: "Dan",
//     last: "Abrmov",
//   },
//   grades: [2, 3, 5, 3],
//   departement: "Semarang University",
// };

// console.log(object1.name);
// const fieldName = "age";
// console.log(object1[fieldName]);

/* function */

// const sum = (p1, p2) => {
//   console.log(p1);
//   console.log(p2);
//   return p1 + p2;
// };

// const result = sum(1, 6);
// console.log(result);

// const t = [1, 2, 3];
// const tSquared = t.map((p) => p * p);

// console.log(tSquared);

// const average = (a, b) => {
//   return (a + b) / 2;
// };

// const result = average(2, 5);
// console.log(result);

/* Latihan 1.3-1.5 */

// const Header = (props) => {
//   console.log(props);
//   return <h1>{props.course}</h1>;
// };
// const Content = (props) => {
//   console.log(props);
//   return <p>{props.parts.name}</p>;
// };
// const Total = (props) => {
//   console.log(props);
//   return <p>{props.parts.exercise}</p>;
// };

// const App = () => {
//   const course = {
//     name: "Half Stack Application Development",
//     parts: [
//       {
//         name: "Fundamental of React",
//         exercise: 10,
//       },
//       {
//         name: "Using props to pass data",
//         exercise: 7,
//       },
//       {
//         name: "State of a component",
//         exercise: 14,
//       },
//     ],
//   };
//   return (
//     <>
//       <Header course={course.name} />
//       <Content parts={course.parts[0]} />
//       <Total parts={course.parts[0]} />
//     </>
//   );
// };

/* Page Re-Rendering */
/* Statefull Component */

// const App = () => {
//   const [counter, setCounter] = useState(0);

//   setTimeout(() => setCounter(counter + 1), 1000);

//   console.log("Rendering...", counter);

//   return <div>{counter}</div>;
// };

/* Event Handling */

// const App = () => {
//   const [counter, setCounter] = useState(0);

//   return (
//     <div>
//       <div>{counter}</div>
//       <button onClick={() => setCounter(counter + 1)}>plus</button>
//       <button onClick={() => setCounter(0)}>zero</button>
//       <button onClick={() => setCounter(counter - 1)}>Min</button>
//     </div>
//   );
// };

/* Passing state - to child components */
/* komponen React yang kecil dan dapat digunakan kembali di seluruh aplikasi dan bahkan di seluruh proyek. */

// const Display = (props) => {
//   return <div>{props.counter}</div>;
// };

// /* selanjutnya buat komponen tombol */

// const Button = (props) => {
//   return <button onClick={props.onClick}>{props.text}</button>;
// };

// const App = () => {
//   const [counter, setCounter] = useState(0);

//   const incraseByOne = () => setCounter(counter + 1);

//   const decraseByOne = () => setCounter(counter - 1);

//   const setToZero = () => setCounter(0);

//   return (
//     <div>
//       <Display counter={counter} />
//       <Button onClick={incraseByOne} text="plus" />
//       <Button onClick={decraseByOne} text="minus" />
//       <Button onClick={setToZero} text="zero" />
//     </div>
//   );
// };

/* example */

// const Header = (shopper) => {
//   console.log(shopper);
//   return <h4>{shopper.course}</h4>;
// };

// const Display = (shopper) => {
//   return <div>{shopper.bag}</div>;
// };

// const Button = (shopper) => {
//   return <button onClick={shopper.onClick}>{shopper.text}</button>;
// };

// const App = () => {
//   const course = "Jumlah";
//   const [bag, setBag] = useState(0);
//   const incraseByOne = () => setBag(bag + 1);
//   const setToZero = () => setBag(0);
//   const decraseByOne = () => setBag(bag - 1);

//   return (
//     <>
//       <Header course={course} />
//       <Display bag={bag} />
//       <Button onClick={incraseByOne} text="+" />
//       <Button onClick={setToZero} text="reset" />
//       <Button onClick={decraseByOne} text="-" />
//     </>
//   );
// };

export default App;
