"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Paginate = ({ category, total, offset }) => {
  const [actualPage, setActualPage] = useState(1);

  console.log(offset);
  useEffect(() => {
    if (offset) {
      console.log("dentro del if");
      setActualPage(offset / 20 + 1);
    }
  }, []);

  const totalPages = Math.ceil(total / 20);

  const buttons = [];
  let offset2 = 0;

  for (let i = 1; i <= 5; i++) {
    if (i !== 1) offset2 += 20;

    buttons.push(
      <Link
        key={i}
        href={`/home/category/${category}?offset=${offset2}`}
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
