import AsideBar from "../../components/asideBar";
import NavBar from "../../components/navBar";

const LayoutHome = ({ children, params }) => {
  const category = params.category[1]

  return (
    <section className="grid grid-cols-[20%,80%] grid-rows-[70px, auto]">
      <NavBar title={category} />
      <AsideBar />
      {children}
    </section>
  );
};

export default LayoutHome;
