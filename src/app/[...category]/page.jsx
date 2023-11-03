import axios from "axios";
import Link from "next/link";

const CategoryPage = async ({ params, searchParams }) => {
  const { es } = searchParams;
  const category = params.category[1];
  //   console.log("category: ", category);

  //comentado para que no se haga al pedo el axios...

  //   const data = (
  //     await axios.get(
  //       `https://gateway.marvel.com:443/v1/public/${category}?ts=1&apikey=${process.env.API_KEY}&hash=${process.env.HASH}`
  //     )
  //   ).data.data;
  //   console.log(data);
  return (
    <section>
      <h2>
        {es === "Series"
          ? "Todas las Series de Marvel"
          : `Todos los ${es} de Marvel`}
      </h2>
    </section>
  );
};

export default CategoryPage;
