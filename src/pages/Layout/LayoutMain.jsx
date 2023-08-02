import Footer from "../../components/Footer/Footer";
import NavbarMain from "../../components/Navbar/NavbarMain";

const LayoutMain = ({ children }) => {
  return (
    <div className="app-layout">
      <header className="container app-header">
        <NavbarMain />
      </header>
      {children}
      <Footer />
    </div>
  );
};

export default LayoutMain;
