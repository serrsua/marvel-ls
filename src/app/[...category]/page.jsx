import axios from "axios";
import Link from "next/link";
import Main from "../components/main";
import Filter from "./filter";

const CategoryPage = async ({ params, searchParams }) => {
  const { offset } = searchParams;
  const category = params.category[1];

  const getData = async (offset = 0) => {
    const data = (
      await axios.get(
        `https://gateway.marvel.com:443/v1/public/${category}?ts=1&apikey=${process.env.API_KEY}&hash=${process.env.HASH}&offset=${offset}`
      )
    ).data.data;
    return data;
  };

  //llamamos por el offset que se quiera
  const data = await getData(offset);

  //filtra datos dependiendo de la categoria
  const filteredData = Filter(category, data);

  return (
    <section>
      <h2>
        {category === "characters" && `Todos los Personajes de Marvel`}
        {category === "comics" && `Todos los Comics de Marvel`}
        {category === "series" && `Todas Las Series de Marvel`}
      </h2>
      <Main data={filteredData} total={data.total} category={category} />
    </section>
  );
};

export default CategoryPage;
