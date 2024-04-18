import ButtonDetail from "@/app/components/buttonDetail";
import axios from "axios";
import Info from "./components/info";
import Image from "next/image";

const { BASE64 } = process.env

const Detail = async ({ params }) => {
  const { id, category } = params;

  const { data } = await axios(
    `https://gateway.marvel.com:443/v1/public/${category}/${id}?ts=1&apikey=${process.env.API_KEY}&hash=${process.env.HASH}`
  );

  const { name, title, description, thumbnail, comics, series, characters } =
    data.data.results[0];

  return (
    <section>
      <div className="flex flex-col items-center gap-3 py-5 mx-2 lg:grid lg:grid-cols-2 lg:place-items-center">
        <ButtonDetail />
        <h2 className="text-4xl font-bold text-center lg:hidden">
          {name || title}
        </h2>
        {description && (
          <p className="p-3 text-center bg-orange-300 bg-opacity-40 rounded-2xl lg:col-[1/2] lg:hidden">
            {description}
          </p>
        )}

        <div
          className={`rounded-md relative border border-gray-500 border-opacity-30 w-[90%] h-fit lg:rounded-3xl xl:max-h-[40rem] xl:max-w-[30rem] ${
            name ? "aspect-square" : "aspect-[9/16]"
          }`}
        >
          <Image
            src={`${thumbnail.path}.${thumbnail.extension}`}
            alt={`image of ${name || title}`}
            fill={true}
            sizes="90vw"
            quality={100}
            placeholder={BASE64}
          />
        </div>

        <div
          className={
            "bg-green-300 bg-opacity-40 rounded-2xl p-2 flex flex-col gap-5 w-[90%]"
          }
        >
          <h2 className="text-4xl font-bold text-center hidden lg:inline-block">
            {name || title}
          </h2>
          {description && (
            <p className="p-3 text-center bg-orange-300 bg-opacity-40 rounded-2xl hidden lg:inline-block">
              {description}
            </p>
          )}
          {category === "characters" ? null : (
            <Info title="Personajes" data={characters} />
          )}
          {category === "comics" ? null : (
            <Info title="Comics" data={comics} />
          )}
          {category === "series" ? null : (
            <Info title="Series" data={series} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Detail;
