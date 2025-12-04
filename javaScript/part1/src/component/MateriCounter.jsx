import React from "react";

/* Latihan 1.3-1.5 */

const Header = (props) => {
  console.log(props);
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  console.log(props);
  return (
    <p>
      {props.parts.name} {props.parts.exercise}
    </p>
  );
};

const Total = (props) => {
  console.log(props);
  return <p>Number of exercises {props.parts.exercise}</p>;
};

const Course = () => {
  const course = {
    name: "Half Stack Application Development",
    parts: [
      {
        name: "Fundamental of React",
        exercise: 10,
      },
      {
        name: "Using props to pass data",
        exercise: 7,
      },
      {
        name: "State of a component",
        exercise: 14,
      },
    ],
  };

  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      <Header course={course.name} />
      <Content parts={course.parts[0]} />
      <Content parts={course.parts[1]} />
      <Content parts={course.parts[2]} />
      {/* Total disesuaikan logikanya jika ingin menjumlahkan, tapi sesuai kode asli: */}
      <Total parts={course.parts[0]} />
    </div>
  );
};

export default Course;
