import AsideBar from "../components/asideBar";
import NavBar from "../components/navBar";

const LayoutHome = ({ children, params }) => {
  const category = params.category[1]

  return (
    <section className="grid grid-cols-[20%,auto] grid-rows-2">
      <NavBar title={category} />
      <AsideBar />
      {children}
    </section>
  );
};

export default LayoutHome;
