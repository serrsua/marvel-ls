import Link from "next/link";
import Image from "next/image";

const data = [
  {
    href: "/home/characters",
    title: "Personajes",
    img: "/assets/personajes.webp",
  },
  { href: "/home/comics", title: "Comics", img: "/assets/comics.webp" },
  { href: "/home/series", title: "Series", img: "/assets/series.webp" },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-black bg-opacity-90">
      <h1 className=" text-4xl font-bold mt-10 text-teal-50">Mundo Marvel</h1>
      <div className="flex flex-col gap-5 m-10 w-full items-center">
        {data.map((route, i) => (
          <div
            className="flex w-[100%] h-52 lg:h-96 items-center justify-center"
            key={i}
          >
            <Link
              className="flex justify-center items-center relative rounded-2xl overflow-hidden bg-red-400 h-4/5 w-4/5 duration-300 transition-all group hover:opacity-70 "
              href={`${route.href}?offset=0`}
            >
              <Image sizes="90vw" fill={true} alt="portada" src={route.img} />
              <h2 className=" absolute bg-stone-900 text-teal-50 text-4xl font-bold px-2 py-1 bg-opacity-70 rounded-2xl duration-300 transition-all group-hover:text-green-400 group-hover:scale-125 md:group-hover:scale-150">
                {route.title}
              </h2>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
