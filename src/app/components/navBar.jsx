import Link from "next/link";
import InputSearch from "./inputSearch";

const NavBar = ({title}) => {
  return (
    <nav className=" bg-gray-800 grid grid-cols-[0.3fr,1fr] py-4 place-items-center text-white">
      <Link className="px-8" href={"/"}>Volver</Link>
      <div className="w-full flex justify-around items-center gap-2 text-center">
        <Link className="text-sm lg:text-base" href={`/home/category/${title}?offset=0`} >Borrar Búsqueda</Link>
        <InputSearch category={title} />
      </div>
    </nav>
  );
};

export default NavBar;
