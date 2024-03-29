"use client";

import { useState } from "react";

export default function InputSearch() {
  const [string, setString] = useState("");

  const handleOfChange = (e) => {
    const {value} = e.target
    setString(value)
  }

  return (
    <input
      className="w-[150px] text-black"
      type="text"
      name="name"
      id=""
      placeholder="Todavia no funca"
      value={string}
      onChange={handleOfChange}
    />
  );
}
