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
        `/home/${category}?offset=0&nameStartsWith=${string}`
      );
    } else {
      router.push(
        `/home/${category}?offset=0&titleStartsWith=${string}`
      );
    }

    setString("");
  };

  return (
    <div className="flex gap-2 items-center mr-5">
      <input
        className="w-[100px] md:w-[200px] px-2 py-1 text-black"
        autoComplete="off"
        type="text"
        name="name"
        id=""
        placeholder="Buscar por nombre..."
        title="Buscar por nombre..."
        value={string}
        onChange={handleOfChange}
      />
      <Search sendQuery={sendQuery} />
    </div>
  );
}
