import Link from "next/link";
import Image from "next/image";

const data = [
  { href: "/home/category/characters", title: "Personajes", img: "/assets/personajes.webp" },
  { href: "/home/category/comics", title: "Comics", img: "/assets/comics.webp" },
  { href: "/home/category/series", title: "Series", img: "/assets/series.webp" },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-black bg-opacity-90">
      <h1 className=" text-4xl font-bold mt-10 text-white">Mundo Marvel</h1>
      <div className="flex flex-col gap-5 m-10 w-full items-center">
        {data.map((route, i) => (
          <div
            className="flex w-[100%] h-52 lg:h-96 items-center justify-center"
            key={i}
          >
            <Link
              className=" flex justify-center items-center relative rounded-lg bg-red-400 h-4/5 w-4/5"
              href={`${route.href}?offset=0`}
            >
              <Image sizes="100vw" fill={true} src={route.img} />
              <h2 className=" absolute bg-white text-black text-4xl" >{route.title}</h2>

            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
