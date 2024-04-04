import AsideBar from "../../components/asideBar";
import NavBar from "../../components/navBar";

const LayoutHome = ({ children, params }) => {
  const category = params.category[0]
  // const { offset } = searchParams

  return (
    <section className="">
      <NavBar title={category} />
      {/* <AsideBar /> */}
      {children}
    </section>
  );
};

export default LayoutHome;
