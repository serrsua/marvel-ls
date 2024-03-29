import Link from "next/link";
import InputSearch from "./inputSearch";
import Search from "../../../public/icons/Search";

const NavBar = () => {
  return (
    <nav className=" bg-gray-800 grid grid-cols-2 py-4 place-items-center text-white">
      <Link className="px-8" href={"/"}>Volver</Link>
      <div className="w-full flex items-center gap-2">
        <InputSearch />
        <Search />
      </div>
    </nav>
  );
};

export default NavBar;
