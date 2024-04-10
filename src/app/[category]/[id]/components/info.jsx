export default function Info({ title, data }) {
  return (
    <>
      <ul>
        <h6 className="font-bold">
          {data?.items?.length ? title : `No Tiene ${title}`}
        </h6>
        {data?.items?.map((item, i) => (
          <li className="ml-3" key={i}>
            {item.name}
          </li>
        ))}
      </ul>
    </>
  );
}