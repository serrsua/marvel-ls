import { Suspense } from "react";
import Cards from "../components/Cards";

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
  const { category } = await params;
  const awaitedSearchParams = await searchParams;

  return (
    <section className="py-5 flex flex-col items-center">
      <h2 className=" font-bold text-2xl text-center">
        {category === "characters" && `Personajes de Marvel`}
        {category === "comics" && `Comics de Marvel`}
        {category === "series" && `Series de Marvel`}
      </h2>
      <Suspense
        key={Date.now().toString()}
        fallback={
          <div className="grid place-items-center mt-[20%] font-bold text-3xl">
            <div className="flex justify-center items-center py-10 w-full">
              <div className="w-20 h-20 border-8 border-green-500 border-t-transparent rounded-full animate-spin" />
            </div>
            <div className="flex gap-4 flex-wrap items-center my-5 self-center">
              {Array.from({ length: 5 }).map((_, index) => (
                <div
                  key={index}
                  className="w-8 h-8 bg-gray-300 rounded animate-pulse"
                />
              ))}
            </div>
          </div>
        }
      >
        <Cards searchParams={awaitedSearchParams} category={category} />
      </Suspense>
    </section>
  );
};

export default CategoryPage;
