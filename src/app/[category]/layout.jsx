import NavBar from "../components/navBar";

const LayoutHome = ({ children, params }) => {

  return (
    <section className="">
      <NavBar params={params} />
      {children}
    </section>
  );
};

export default LayoutHome;
