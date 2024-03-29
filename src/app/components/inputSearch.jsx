"use client";

import { useState } from "react";
import Search from "../../../public/icons/Search";

export default function InputSearch() {
  const [string, setString] = useState("");

  const handleOfChange = (e) => {
    const { value } = e.target;
    setString(value);
  };

  //setear offset en 0
  //crear funcion para boton search
  //mandar query

  return (
    <>
      <input
        className="w-[150px] text-black"
        type="text"
        name="name"
        id=""
        placeholder="Todavia no funca"
        value={string}
        onChange={handleOfChange}
      />
      <Search />
    </>
  );
}
