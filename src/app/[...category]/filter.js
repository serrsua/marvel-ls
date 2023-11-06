const Filter = (category, data) => {
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
        title: object.title,
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
};

export default Filter;