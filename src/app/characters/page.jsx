import Link from "next/link";
import Principal from "../components/principal";
import axios from "axios";
const {API_KEY, HASH } = process.env;


export default async function Characters() {
  
  /* const characters = (await (axios.get(`https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=${API_KEY}&hash=${HASH}`))).data.data; */
  /* console.log(characters); */

  return (
    <main>
      <h1>Personajes de Marvel</h1>
      <Principal title={"Todos los personajes de Marvel"} data={characters} />
      <Link href={"/"}>Inicio</Link>
    </main>
  );
}
