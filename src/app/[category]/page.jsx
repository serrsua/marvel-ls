import { Suspense } from "react";
import Cards from "../components/Cards";
import Paginate from "../components/paginate";
import { func } from "../api/func";

//genero las 3 rutas de categorias
export async function generateStaticParams() {
  const categories = ["characters", "comics", "series"];

  return categories.map((category) => ({
    category,
  }));
}

export const dynamicParams = false;
//--------------------------------

const CategoryPage = async ({ params, searchParams }) => {
  const { offset, search } = searchParams;
  const { category } = params;

  let data;

  if (!search) data = await func.getData(offset, category);
  else data = await func.search(category, search, offset);

  const totalPages = Math.ceil(data.total / data.limit);

  return (
    <section className="py-5 flex flex-col items-center">
      <h2 className=" font-bold text-2xl text-center">
        {category === "characters" && `Personajes de Marvel`}
        {category === "comics" && `Comics de Marvel`}
        {category === "series" && `Series de Marvel`}
      </h2>
      <Paginate totalPages={totalPages} />
      <Suspense
        key={Date.now().toString()}
        fallback={
          <div className="grid place-items-center mt-[20%] font-bold text-3xl">
            <div className="loader" />
          </div>
        }
      >
        <Cards searchParams={searchParams} category={category} />
      </Suspense>
    </section>
  );
};

export default CategoryPage;
