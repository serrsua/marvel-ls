import axios from "axios";

export const func = {
  filter: (category, data) => {
    let filteredData = [];
    if (category === "characters") {
      filteredData = data.results.map((object) => {
        return {
          id: object.id,
          name: object.name,
          image: `${object.thumbnail.path}.${object.thumbnail.extension}`,
          description: object.description ?? "No tiene descripcion",
          comics: object.comics.items,
          series: object.series.items,
          stories: object.stories.items,
        };
      });
    } else {
      filteredData = data.results.map((object) => {
        return {
          id: object.id,
          name: object.title,
          description: object.description ?? "No tiene descripcion",
          image: `${object.thumbnail.path}.${object.thumbnail.extension}`,
          characters:
            object.characters.items.length > 0
              ? object.characters.items
              : "NO hay info",
        };
      });
    }
    return filteredData;
  },
  getData: async (offset, category) => {
    const data = (
      await axios.get(
        `https://gateway.marvel.com:443/v1/public/${category}?ts=1&apikey=${process.env.API_KEY}&hash=${process.env.HASH}&offset=${offset}`
      )
    ).data.data;

    return data;
  },
  search: async (category, search, offset) => {
    const data = (
      await axios.get(
        `https://gateway.marvel.com:443/v1/public/${category}?ts=1&apikey=${
          process.env.API_KEY
        }&hash=${process.env.HASH}&offset=${offset}&${
          category === "characters"
            ? `nameStartsWith=${search}`
            : `titleStartsWith=${search}`
        }`
      )
    ).data.data;

    return data;
  },
};
