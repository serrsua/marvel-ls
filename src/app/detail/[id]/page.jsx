import axios from "axios";
import Link from "next/link";

const Detail = async ({ params, searchParams }) => {
  const { id } = params;
  const { category, offset } = searchParams;

  console.log("SP: ",searchParams);

  const { data } = await axios(
    `https://gateway.marvel.com:443/v1/public/${category}/${id}?ts=1&apikey=${process.env.API_KEY}&hash=${process.env.HASH}`
  );

  const { name, title, description, thumbnail, comics, series, characters } =
    data.data.results[0];

  return (
    <section>
      <div>
        <Link href={`/home/category/${category}?offset=${offset}`} >Volver</Link>
        <h2>{`Nombre: ${name ?? title}`}</h2>
        <p>{`Descripción: ${description}`}</p>
        <img
          src={`${thumbnail.path}.${thumbnail.extension}`}
          alt="imagen del personaje"
        />
        <div>
          <ul>
            <h6>{comics?.items?.length ? "Comics:" : null}</h6>
            {comics?.items?.map((comic, i) => (
              <li key={i}>{comic.name}</li>
            ))}
          </ul>
          <ul>
            <h6>{series?.items?.length ? "Series:" : null}</h6>
            {series?.items?.map((serie, i) => (
              <li key={i}>{serie.name}</li>
            ))}
          </ul>
          <ul>
            <h6>{characters?.items?.length ? "Personajes:" : null}</h6>
            {characters?.items?.map((character, i) => (
              <li key={i}>{character.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Detail;
