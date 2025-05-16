import Link from "next/link";
import InputSearch from "./(inputSearch)/inputSearch";
import { Suspense } from "react";

const NavBar = () => {
  return (
    <nav className=" bg-gray-800 grid grid-cols-[0.4fr,1fr] py-4 place-items-center text-white">
      <Link className="px-8" href="/">
        Salir
      </Link>
      <div className="w-full flex justify-around items-center gap-2 text-center">
        <Suspense fallback={<div>Loading...</div>}>
          <InputSearch />
        </Suspense>
      </div>
    </nav>
  );
};

export default NavBar;
