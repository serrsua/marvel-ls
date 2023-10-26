import Link from "next/link";
import Principal from "../components/principal";
import axios from "axios";
const {API_KEY, HASH } = process.env;

export default async function Comics() {

  /* const comics = (await (axios.get(`https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=${API_KEY}&hash=${HASH}`))).data.data; */

  /* console.log(comics); */

    return (
      <main>
        <h1>Comics de Marvel</h1>
        <Principal title={"Todos los comics de Marvel"} data={comics} />
        <Link href={"/"} >Inicio</Link>
      </main>
    )
  }