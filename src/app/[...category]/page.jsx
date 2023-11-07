import axios from "axios";
import Link from "next/link";
import Main from "../components/main";
import Filter from "./filter";

const CategoryPage = async ({ params, searchParams }) => {
  const { es, offset } = searchParams;
  const category = params.category[1];

  const getData = async (offset = 0) => {
    const data = (
      await axios.get(
        `https://gateway.marvel.com:443/v1/public/${category}?ts=1&apikey=${process.env.API_KEY}&hash=${process.env.HASH}&offset=${offset}`
      )
    ).data.data;
    return data;
  };

  const data = await getData(offset);

  //filtra datos dependiendo de la categoria
  const filteredData = Filter(category, data);

  return (
    <section>
      <h2>
        {es === "Series"
          ? "Todas las Series de Marvel"
          : `Todos los ${es} de Marvel`}
      </h2>
      <Main data={filteredData} total={data.total} category={category} />
    </section>
  );
};

export default CategoryPage;
