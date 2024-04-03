"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Paginate = ({ category, total, offset, name }) => {
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
        href={
          !name
            ? `/home/category/${category}?offset=${offset}`
            : `/home/category/${category}?offset=${offset}&${
                category === "characters"
                  ? `nameStartsWith=${name}`
                  : `titleStartsWith=${name}`
              }`
        }
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
      <Link
        className=" text-sm"
        href={
          !name
            ? `/home/category/${category}?offset=0`
            : `/home/category/${category}?offset=0&${
                category === "characters"
                  ? `nameStartsWith=${name}`
                  : `titleStartsWith=${name}`
              }`
        }
      >
        First
      </Link>
      {actualPage > 1 && (
        <Link
          className=" text-sm"
          href={
            !name
              ? `/home/category/${category}?offset=${offset - 20}`
              : `/home/category/${category}?offset=${offset - 20}&${
                  category === "characters"
                    ? `nameStartsWith=${name}`
                    : `titleStartsWith=${name}`
                }`
          }
        >
          {"<"}
        </Link>
      )}
      {buttons}
      {actualPage >= totalPages ? null : (
        <Link
          className=" text-sm"
          href={
            !name
              ? `/home/category/${category}?offset=${parseInt(offset) + 20}`
              : `/home/category/${category}?offset=${parseInt(offset) + 20}&${
                  category === "characters"
                    ? `nameStartsWith=${name}`
                    : `titleStartsWith=${name}`
                }`
          }
        >
          {">"}
        </Link>
      )}
      <Link
        className=" text-sm"
        href={
          !name
            ? `/home/category/${category}?offset=${lastPage}`
            : `/home/category/${category}?offset=${lastPage}&${
                category === "characters"
                  ? `nameStartsWith=${name}`
                  : `titleStartsWith=${name}`
              }`
        }
      >
        Last
      </Link>
    </div>
  );
};

export default Paginate;
