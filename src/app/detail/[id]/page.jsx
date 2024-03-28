import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const Detail = async ({ params, searchParams }) => {
  const { id } = params;
  const { category, offset } = searchParams;

  const { data } = await axios(
    `https://gateway.marvel.com:443/v1/public/${category}/${id}?ts=1&apikey=${process.env.API_KEY}&hash=${process.env.HASH}`
  );

  const { name, title, description, thumbnail, comics, series, characters } =
    data.data.results[0];

  return (
    <section>
      <div className="flex flex-col items-center gap-3 mt-4">
        <Link
          href={`/home/category/${category}?offset=${offset}`}
          className="bg-orange-400 px-2 py-1 rounded-lg"
        >
          Volver
        </Link>
        <h2 className="text-4xl font-bold">{`${name ?? title}`}</h2>
        <p className="p-3 text-center bg-orange-300 bg-opacity-40 rounded-2xl">{`${description}`}</p>
        <div className="relative w-[90%] h-[300px]">
          <Image
            src={`${thumbnail.path}.${thumbnail.extension}`}
            alt="imagen del personaje"
            fill={true}
            className="rounded-md"
          />
        </div>
        <div className=" bg-green-300 bg-opacity-40 rounded-2xl p-2">
          <ul>
            <h6>{comics?.items?.length ? "Comics:" : null}</h6>
            {comics?.items?.map((comic, i) => (
              <li className="ml-3" key={i}>
                {comic.name}
              </li>
            ))}
          </ul>
          <ul>
            <h6>{series?.items?.length ? "Series:" : null}</h6>
            {series?.items?.map((serie, i) => (
              <li className="ml-3" key={i}>
                {serie.name}
              </li>
            ))}
          </ul>
          <ul>
            <h6>{characters?.items?.length ? "Personajes:" : null}</h6>
            {characters?.items?.map((character, i) => (
              <li className="ml-3" key={i}>
                {character.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Detail;
