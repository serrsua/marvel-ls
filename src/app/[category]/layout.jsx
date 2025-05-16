import NavBar from "../components/navBar";

const LayoutHome = ({ children }) => {
  return (
    <section className="">
      <NavBar />
      {children}
    </section>
  );
};

export default LayoutHome;
