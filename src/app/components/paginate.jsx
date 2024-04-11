"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

const Paginate = ({ totalPages }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const offset = Number(searchParams.get("offset")) || 0;
  const actualPage = offset / 20 + 1; //calculo la pagina actual

  const buttonsToShow = 5;

  const startPage = Math.max(1, actualPage - Math.floor(buttonsToShow / 2));
  const endPage = Math.min(totalPages, startPage + buttonsToShow - 1);
  const lastPage = totalPages * 20 - 20;

  const buttons = [];

  const createPageUrl = (offset) => {
    if (offset > lastPage) offset = lastPage;
    const params = new URLSearchParams(searchParams);
    params.set("offset", offset);

    return `${pathname}?${params.toString()}`;
  };

  for (let i = startPage; i <= endPage; i++) {
    const offset = (i - 1) * 20;

    buttons.push(
      <Link
        key={i}
        href={createPageUrl(offset)}
        className={`${
          actualPage === i ? "bg-green-400" : "bg-teal-50"
        } px-2 py-1 transition-all hover:bg-green-500`}
      >
        {i}
      </Link>
    );
  }

  return (
    <div className="flex gap-2 flex-wrap items-center my-2">
      <Link className=" text-sm" href={createPageUrl("0")}>
        First
      </Link>
      {actualPage > 1 && (
        <Link className=" text-sm" href={createPageUrl(offset - 20)}>
          {"<"}
        </Link>
      )}
      {actualPage > 10 && (
        <Link className=" text-sm" href={createPageUrl(offset - 200)}>
          10...
        </Link>
      )}
      {actualPage > 50 && (
        <Link className=" text-sm" href={createPageUrl(offset - 1000)}>
          50...
        </Link>
      )}
      <div className=" border border-gray-200 p-0.5 h-fit flex items-center">
        {buttons}
      </div>
      {actualPage >= totalPages ? null : (
        <Link className=" text-sm" href={createPageUrl(offset + 20)}>
          {">"}
        </Link>
      )}
      {actualPage >= totalPages ? null : (
        <>
          <Link className=" text-sm" href={createPageUrl(offset + 200)}>
            ...10
          </Link>
          <Link className=" text-sm" href={createPageUrl(offset + 1000)}>
            ...50
          </Link>
        </>
      )}

      <Link className=" text-sm" href={createPageUrl(lastPage)}>
        Last
      </Link>
    </div>
  );
};

export default Paginate;
