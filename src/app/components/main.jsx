import Image from "next/image";
import Paginate from "./paginate";
import Link from "next/link";

const Main = ({ data, category, total, offset }) => {
  return (
    <div className="flex flex-col flex-wrap gap-5 items-center m-5">
      <Paginate category={category} total={total} offset={offset} />
      <div className="flex flex-wrap justify-evenly items-center gap-2">
        {data.map((obj) => (
          <Link
            href={`/detail/${obj.id}?category=${category}&offset=${offset}`}
            key={obj.id}
            className="p-2 bg-orange-300 h-fit overflow-hidden rounded-lg w-52 hover:bg-orange-400"
          >
            <p className="text-center my-3 text-lg font-bold line-clamp-1 cursor-default" title={obj.name ?? obj.title}>
              {obj.name ?? obj.title}
            </p>
            <div className={`relative ${category !== "characters" ? "h-72" : "h-52" } w-full mx-auto`}>
              <Image
                className=" rounded-xl mx-auto"
                src={obj.image}
                fill={true}
                alt={`image of ${obj.name}`}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Main;
