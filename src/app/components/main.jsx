import Image from "next/image";

const Main = ({ data, category }) => {

  return (
    <div className=" flex flex-wrap gap-3" >
      {data.map((obj) => (
        <div key={obj.id} className=" p-2 bg-yellow-400" >
          <p>{obj.name ?? obj.title}</p>
          <Image src={obj.image} width={150} height={150} alt={`image of ${obj.name}`} />
        </div>
      ))}
    </div>
  );
};

export default Main;
