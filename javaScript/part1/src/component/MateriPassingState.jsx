import React, { useState } from "react";

/* Passing state - to child components */
/* komponen React yang kecil dan dapat digunakan kembali di seluruh aplikasi dan bahkan di seluruh proyek. */

/* example */

const Header = (shopper) => {
  console.log(shopper);
  return <h4>{shopper.course}</h4>;
};

const Display = (shopper) => {
  return <div>Isi Tas: {shopper.bag}</div>;
};

const Button = (shopper) => {
  return <button onClick={shopper.onClick}>{shopper.text}</button>;
};

const Shopper = () => {
  const course = "Jumlah Belanjaan";
  const [bag, setBag] = useState(0);

  const incraseByOne = () => setBag(bag + 1);
  const setToZero = () => setBag(0);
  const decraseByOne = () => setBag(bag - 1);

  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      <Header course={course} />
      <Display bag={bag} />
      <Button onClick={incraseByOne} text="+" />
      <Button onClick={setToZero} text="reset" />
      <Button onClick={decraseByOne} text="-" />
    </div>
  );
};

export default Shopper;
