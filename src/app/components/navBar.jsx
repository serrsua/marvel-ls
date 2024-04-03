import Link from "next/link";
import InputSearch from "./inputSearch";

const NavBar = ({title}) => {
  return (
    <nav className=" bg-gray-800 grid grid-cols-2 py-4 place-items-center text-white">
      <Link className="px-8" href={"/"}>Volver</Link>
      <div className="w-full flex items-center gap-2">
        <Link href={`/home/category/${title}?offset=0`} >Borrar búsqueda</Link>
        <InputSearch category={title} />
      </div>
    </nav>
  );
};

export default NavBar;
