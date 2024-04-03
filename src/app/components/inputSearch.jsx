"use client";

import { useState } from "react";
import Search from "../../../public/icons/Search";
import { useRouter } from "next/navigation";

export default function InputSearch({ category }) {
  const [string, setString] = useState("");
  const router = useRouter();

  const handleOfChange = (e) => {
    const { value } = e.target;
    setString(value);
  };

  const sendQuery = () => {
    if (category === "characters") {
      router.push(
        `/home/category/${category}?offset=0&nameStartsWith=${string}`
      );
    } else {
      router.push(
        `/home/category/${category}?offset=0&titleStartsWith=${string}`
      );
    }

    setString("");
  };
  //setear offset en 0
  //crear funcion para boton search
  //mandar query

  return (
    <>
      <input
        className="w-[150px] lg:w-[200px] px-2 py-1 text-black"
        type="text"
        name="name"
        id=""
        placeholder="Buscar por nombre..."
        value={string}
        onChange={handleOfChange}
      />
      <Search sendQuery={sendQuery} />
    </>
  );
}
