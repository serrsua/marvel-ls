"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Paginate = ({ category, total, offset }) => {
  const [actualPage, setActualPage] = useState(1);

  useEffect(() => {
    if (offset) {
      setActualPage(offset / 20 + 1);
    }
  }, [offset]);

  const totalPages = Math.ceil(total / 20);
  const buttonsToShow = 5;

  const startPage = Math.max(1, actualPage - Math.floor(buttonsToShow / 2));
  const endPage = Math.min(totalPages, startPage + buttonsToShow - 1);
  const lastPage = totalPages * 20 - 20;

  const buttons = [];

  for (let i = startPage; i <= endPage; i++) {
    const offset = (i - 1) * 20;

    buttons.push(
      <Link
        key={i}
        href={`/home/category/${category}?offset=${offset}`}
        onClick={() => setActualPage(i)}
        className={`${
          actualPage === i ? "bg-green-400" : "bg-white"
        } px-2 py-1 border border-gray-400 rounded-md`}
      >
        {i}
      </Link>
    );
  }

  return (
    <div className="flex gap-3 flex-wrap items-center">
      <Link className=" text-sm" href={`/home/category/${category}?offset=0`}>
        First
      </Link>
      {actualPage > 1 && (
        <Link
          className=" text-sm"
          href={`/home/category/${category}?offset=${offset - 20}`}
        >
          {"<"}
        </Link>
      )}
      {buttons}
      {actualPage >= totalPages ? null : (
        <Link
          className=" text-sm"
          href={`/home/category/${category}?offset=${parseInt(offset) + 20}`}
        >
          {">"}
        </Link>
      )}
      <Link
        className=" text-sm"
        href={`/home/category/${category}?offset=${lastPage}`}
      >
        Last
      </Link>
    </div>
  );
};

export default Paginate;
