import Link from "next/link";
import Principal from "../components/principal";
import axios from "axios";
const {API_KEY, HASH } = process.env;

export default async function Series() {

  /* const series = (await (axios.get(`https://gateway.marvel.com:443/v1/public/series?ts=1&apikey=${API_KEY}&hash=${HASH}`))).data.data; */

  /* console.log(series); */
    return (
      <main>
        <h1>Series de Marvel</h1>
        <Principal title={"Todas las series de Marvel"} data={"series"} />
        <Link href={"/"} >Inicio</Link>
      </main>
    )
  }