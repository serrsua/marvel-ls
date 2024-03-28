import Image from "next/image";
import Paginate from "./paginate";
import Link from "next/link";

const Main = ({ data, category, total, offset }) => {
  return (
    <div className="flex flex-col flex-wrap gap-5 items-center mt-5 mx-5">
      <Paginate category={category} total={total} offset={offset} />
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {data.map((obj) => (
          <Link
            href={`/detail/${obj.id}?category=${category}&offset=${offset}`}
            key={obj.id}
            className="p-2 bg-green-400 bg-opacity-40 overflow-hidden rounded-lg w-full hover:bg-orange-400 hover:bg-opacity-50 duration-500"
          >
            <p
              className="text-center my-3 text-lg font-bold line-clamp-1 cursor-default"
              title={obj.name ?? obj.title}
            >
              {obj.name ?? obj.title}
            </p>
            <div className={`relative ${category !== "characters" ? "h-60 md:h-80 lg:h-[25rem] xl:h-[27rem]" : "h-40 md:h-72" } w-full mx-auto`}>
              <Image
                className="rounded-xl"
                src={obj.image}
                fill={true}
                sizes="100vw"
                alt={`image of ${obj.name}`}
                loading="lazy"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Main;
