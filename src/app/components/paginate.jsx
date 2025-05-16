"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export default function Paginate({ totalPages }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const offset = Number(searchParams.get("offset")) || 0;
  const actualPage = Math.floor(offset / 20) + 1;
  const maxOffset = (totalPages - 1) * 20;

  const createPageUrl = (newOffset) => {
    const clamped = Math.min(Math.max(newOffset, 0), maxOffset);
    const params = new URLSearchParams(searchParams);
    params.set("offset", String(clamped));
    return `${pathname}?${params.toString()}`;
  };
  const links = [
    {
      condition: actualPage > 1,
      label: "1",
      offset: 0,
    },
    {
      condition: actualPage > 1,
      label: "<",
      offset: offset - 20,
    },
    {
      label: actualPage,
      isActualPage: true,
    },
    {
      condition: actualPage < totalPages,
      label: ">",
      offset: offset + 20,
    },
    {
      condition: actualPage < totalPages,
      label: totalPages,
      offset: maxOffset,
      width: "w-fit px-2",
    },
  ];

  return (
    <div className="flex gap-4 flex-wrap items-center my-5 self-center">
      {links.map((link, i) => {
        const isDisabled = link.condition === false;

        if (link.isActualPage) {
          return (
            <div
              key={i}
              className="bg-blue-600 text-white py-1 px-2 rounded-md h-fit flex items-center"
            >
              {link.label}
            </div>
          );
        }

        return (
          <Link
            key={i}
            href={isDisabled ? "#" : createPageUrl(link.offset)}
            className={`h-8 flex items-center justify-center rounded transition
              text-white ${link.width ?? "w-8"}
              ${
                isDisabled
                  ? "bg-gray-500 opacity-50 pointer-events-none cursor-not-allowed"
                  : "bg-gray-700 hover:bg-gray-800"
              }`}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}
