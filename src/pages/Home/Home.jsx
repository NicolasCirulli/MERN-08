import Carousel from "../../components/Carousel/Carousel";
import LayoutMain from "../Layouts/LayoutMain";
import "./home.css";
const Home = () => {
  return (
    <LayoutMain>
      <main className="flex-grow-1 d-flex flex-column">
        <section className="home-hero">
          <h2 className="home-hero-title">
            Aca estaria el hero, si tuviera uno
          </h2>
        </section>
        <section className="home-carousel">
          <Carousel />
        </section>
      </main>
    </LayoutMain>
  );
};

export default Home;
