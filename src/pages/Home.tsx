import { Link } from "react-router-dom";
import ProductCard from "../components/product-card";
const Home = () => {
  const addTocartHandler = () => {};

  return (
    <div className="home">
      <section></section>

      <h1>
        Latest Product
        <Link to="/search" className="findmore">
          More
        </Link>
      </h1>

      <main>
        <ProductCard
          productId="dafdfsd"
          name="MacBook"
          price={4545}
          stock={435}
          handler={addTocartHandler}
          photo="https://m.media-amazon.com/images/I/71ItMeqpN3L._AC_SX522_.jpg"
        />
      </main>
    </div>
  );
};

export default Home;
