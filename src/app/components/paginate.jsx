"use client";

import Link from "next/link";
import { useState } from "react";

const Paginate = ({ category, total }) => {
  const [actualPage, setActualPage] = useState(0);

  const totalPages = Math.ceil(total / 20);

  const buttons = [];
  let offset = 0;

  for (let i = 1; i <= 5; i++) {
    if (i !== 1) offset += 20;

    buttons.push(
      <Link
        key={i}
        href={`/home/category/${category}?offset=${offset}`}
        onClick={() => setActualPage(i)}
        className={`${
          actualPage === i ? "bg-red-400" : "bg-red-200"
        } px-1 py-2`}
      >
        {i}
      </Link>
    );
  }

  return <div className=" flex items-start gap-5">{buttons}</div>;
};

export default Paginate;
