import Link from "next/link";

const data = [
  { href: "/home/category/characters", title: "Personajes" },
  { href: "/home/category/comics", title: "Comics" },
  { href: "/home/category/series", title: "Series" },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <h1 className=" text-4xl font-bold mt-10">Mundo Marvel</h1>
      <div className="flex flex-col gap-5 m-10 w-full items-center">
        {data.map((route, i) => (
          <div
            className="flex w-[100%] h-52 lg:h-96 items-center justify-center"
            key={i}
          >
            <Link
              className="rounded-lg bg-red-400 h-4/5 w-4/5"
              href={`${route.href}?offset=0`}
            >
              {route.title}
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
