📘 Rangkuman Materi Belajar React

File ini berisi catatan penting dari materi yang sudah dipelajari.
Tips: Tekan Ctrl + Shift + V di VS Code untuk melihat tampilan preview yang cantik.

1. JavaScript Modern (ES6+) untuk React

Variable (const vs let)

const: Nilainya tidak bisa diubah (reassign).

Kecuali Array/Object, isinya masih bisa dimodifikasi, tapi wadahnya tidak bisa diganti.

Gunakan ini secara default.

let: Gunakan hanya jika nilainya akan berubah (misal: counter loop).

Array Methods

React sangat bergantung pada manipulasi array tanpa merusak data asli (Immutability).

.map() (Sangat Penting!)

Membuat array baru dari array lama.

Digunakan untuk merender list di React.

Contoh: Mengubah [1, 2, 3] menjadi [<li>1</li>, <li>2</li>, ...]

.concat() vs .push()

push(): Mengubah array asli (JANGAN PAKAI ini untuk State React).

concat(): Membuat array baru gabungan (AMAN untuk React).

Destructuring

Cara cepat mengambil isi array/object.

Kode: const { name, age } = person;

Kode: const [count, setCount] = useState(0);

2. Konsep Dasar React

Komponen

Komponen adalah fungsi JavaScript yang mengembalikan JSX (HTML).

Nama fungsi wajib Huruf Besar di awal (contoh: Note, App).

Harus mengembalikan satu elemen induk (bungkus dengan <div> atau <>...</>).

Props (Properties)

Cara mengirim data dari Parent (Induk) ke Child (Anak).

Sifatnya Read-Only (Anak tidak boleh mengubah props yang dikirim Bapaknya).

Analogi: Bapak memberi uang saku ke anak. Anak bisa pakai uangnya, tapi gak bisa minta uang itu berubah nominalnya sendiri.

3. State & Event Handling

useState Hook

State adalah "ingatan" komponen. Jika data berubah, React akan me-render ulang tampilan.

import { useState } from 'react';

const App = () => {
// [variabel, fungsiPengubah] = useState(nilaiAwal)
const [counter, setCounter] = useState(0);

// Cara Pakai:
// BENAR: setCounter(counter + 1)
// SALAH: counter = counter + 1 (Gak bakal ngefek ke tampilan)
};

Aturan Hooks (PENTING!)

Hanya panggil Hooks (useState, useEffect) di paling atas fungsi komponen.

Jangan panggil di dalam loops, conditions (if), atau nested functions.

Event Handling

Gunakan camelCase: onClick, onSubmit, onChange.

Pass function reference, jangan dipanggil langsung.

✅ onClick={handleClick}

✅ onClick={() => setCounter(0)}

❌ onClick={handleClick()} (Ini bakal jalan terus-terusan/error)

4. Rendering List

Saat menampilkan banyak data dari array menggunakan .map():

Selalu tambahkan properti key.

key harus unik (biasanya pakai ID dari database).

Jangan pakai index array sebagai key jika urutan datanya bisa berubah (bisa bikin bug).

// Contoh
{notes.map(note => (

   <li key={note.id}>{note.content}</li>
))}

5. Refactoring & Lifting State Up

Refactoring (Pemisahan File)

Pisahkan komponen ke file tersendiri di folder src/component/.

Gunakan export default NamaKomponen di file komponen.

Gunakan import NamaKomponen from './path' di file tujuan.

Lifting State Up (Mengangkat State)

Jika dua komponen butuh data yang sama, pindahkan State ke Parent (Induk) mereka.

Parent yang pegang data, Child cuma terima data lewat props.

Contoh di Latihan: Shopper (Parent) pegang bag, tombol ButtonShopper cuma kirim sinyal klik.

Catatan Tambahan:
Tulis materi baru di sini setiap selesai belajar bab baru.
