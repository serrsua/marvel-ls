import Image from "next/image";
import Link from "next/link";
import { func } from "../api/func";

import jsonData from "@/app/base64.json";
import Paginate from "./paginate";

const Cards = async ({ searchParams, category }) => {
  const { offset, search } = searchParams;

  const data = search
    ? await func.search(category, search, offset)
    : await func.getData(offset, category);

  const { filteredData, totalPages } = func.filter(category, data);

  return (
    <div className="flex flex-col flex-wrap gap-5 place-content-center mt-5 mx-5 min-w-[90%]">
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 place-items-center w-full">
        {filteredData.map((obj) => (
          <Link
            href={`/${category}/${obj.id}?offset=${offset}`}
            key={obj.id}
            className="p-2 bg-gray-800 overflow-hidden rounded-lg w-full text-teal-50 hover:text-black hover:bg-green-500 hover:outline hover:outline-1 outline-zinc-950 duration-500"
          >
            <p
              className="text-center my-3 text-lg font-bold line-clamp-1 cursor-default"
              title={obj.name}
            >
              {obj.name}
            </p>
            <figure
              className={`relative ${
                category !== "characters"
                  ? "h-60 md:h-80 lg:h-[25rem] xl:h-[27rem]"
                  : "h-40 md:h-72"
              } w-full mx-auto overflow-hidden rounded-xl transition-all duration-700 hover:scale-110`}
            >
              <Image
                src={obj.image}
                fill={true}
                sizes="100vw"
                alt={`image of ${obj.name}`}
                loading="lazy"
                className=" object-cover"
                quality={90}
                placeholder={jsonData.base64}
              />
            </figure>
          </Link>
        ))}
      </div>
      <Paginate totalPages={totalPages} />
    </div>
  );
};

export default Cards;
