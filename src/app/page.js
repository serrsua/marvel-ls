import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Página principal</h1>
      <div>
        <Link className="block" href={"/characters"}>Personajes</Link>
        <Link className="block" href={"/comics"}>Comics</Link>
        <Link className="block" href={"/series"}>Series</Link>
      </div>
    </main>
  );
}
