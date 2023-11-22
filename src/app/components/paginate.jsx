"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Paginate = ({ category, total, offset }) => {
  const [actualPage, setActualPage] = useState(1);

  console.log(offset);
  useEffect(() => {
    if (offset) {
      setActualPage(offset / 20 + 1);
    }
  }, [offset]);

  const totalPages = Math.ceil(total / 20);
  const buttonsToShow = 5;

  const startPage = Math.max(1, actualPage - Math.floor(buttonsToShow / 2));
  const endPage = Math.min(totalPages, startPage + buttonsToShow - 1);

  const buttons = [];

  for (let i = startPage; i <= endPage; i++) {
    const offset = (i - 1) * 20;

    buttons.push(
      <Link
        key={i}
        href={`/home/category/${category}?offset=${offset}`}
        onClick={() => setActualPage(i)}
        className={`${
          actualPage === i ? "bg-red-400" : "bg-red-200"
        } px-2 py-1`}
      >
        {i}
      </Link>
    );
  }

  return (
    <div className="flex items-start gap-5 flex-wrap">
      <Link href={`/home/category/${category}?offset=${offset - 20}`}>
        {"<"}
      </Link>
      {buttons}
      <Link href={`/home/category/${category}?offset=${parseInt(offset) + 20}`}>
        {">"}
      </Link>
    </div>
  );
};

export default Paginate;
