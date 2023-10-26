import Link from "next/link";

const characters = "axios";

export default function Characters() {
  return (
    <main>
      <h1>Personajes de Marvel</h1>
      <Link href={"/"}>Inicio</Link>
    </main>
  );
}
