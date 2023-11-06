import Image from "next/image";

const Main = ({ data, category }) => {
  console.log("data: ", data.length);
  console.log("category: ", category);

  return (
    <div className=" flex flex-wrap gap-3" >
      {data.map((obj) => (
        <div key={obj.id} className=" p-2 bg-yellow-400" >
          <p>{obj.name}</p>
          <Image src={obj.image} width={150} height={150} alt={`image of ${obj.name}`} />
        </div>
      ))}
    </div>
  );
};

export default Main;
