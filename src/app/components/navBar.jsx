import Link from "next/link";

const NavBar = () => {
  return (
    <nav className=" bg-gray-800 grid grid-cols-2 py-4 place-items-center text-white">
      <Link className="px-8" href={"/"}>Volver</Link>
      <div className="w-full">
        <h1>Buscar</h1>
        <input className="w-[150px]" type="text" name="" id="" placeholder="Todavia no funca"/>
      </div>
    </nav>
  );
};

export default NavBar;
