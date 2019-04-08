import React from "react";
import style from "./app.css";
import img from "./image.png";

export function App() {
  return (
    <div>
      <h1>Hello world!</h1>
      <img className={style.img} src={img} />
    </div>
  )
}