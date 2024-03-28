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
    <section className="bg-teal-50">
      <div className="flex flex-col items-center gap-3 py-5 mx-2">
        <Link
          href={`/home/category/${category}?offset=${offset}`}
          className="bg-orange-300 px-2 py-1 rounded-lg text-lg font-bold border border-gray-300"
        >
          Volver
        </Link>
        <h2 className="text-4xl font-bold text-center">{`${name ?? title}`}</h2>
        {description && (
          <p className="p-3 text-center bg-orange-300 bg-opacity-40 rounded-2xl">{`${description}`}</p>
        )}

        <img
          src={`${thumbnail.path}.${thumbnail.extension}`}
          alt="imagen del personaje"
          className="rounded-md border border-gray-500 border-opacity-30 w-[90%] h-fit"
        />

        <div className={"bg-green-300 bg-opacity-40 rounded-2xl p-2 flex flex-col gap-5 w-[90%]"}>
          <ul>
            <h6 className="font-bold" >{comics?.items?.length ? "Comics" : null}</h6>
            {comics?.items?.map((comic, i) => (
              <li className="ml-3" key={i}>
                {comic.name}
              </li>
            ))}
          </ul>
          <ul>
            <h6 className="font-bold">{series?.items?.length ? "Series" : null}</h6>
            {series?.items?.map((serie, i) => (
              <li className="ml-3" key={i}>
                {serie.name}
              </li>
            ))}
          </ul>
          <ul>
            <h6 className="font-bold">{characters?.items?.length ? "Personajes" : null}</h6>
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
