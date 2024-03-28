import axios from "axios";
import Link from "next/link";
import Main from "../../components/main";
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
    <section className="bg-teal-50 py-5" > 
      <h2 className=" font-bold text-2xl text-center">
        {category === "characters" && `Personajes de Marvel`}
        {category === "comics" && `Comics de Marvel`}
        {category === "series" && `Series de Marvel`}
      </h2>
      <Main data={filteredData} total={data.total} category={category} offset={offset} />
    </section>
  );
};

export default CategoryPage;
