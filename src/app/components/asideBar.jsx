import Link from "next/link";

const AsideBar = () => {
  return (
    <aside className="bg-slate-600 px-4 py-4 w-full">
      <p>Barra lateral</p>
      <Link href={"/"}>Salir</Link>
    </aside>
  );
};

export default AsideBar;
