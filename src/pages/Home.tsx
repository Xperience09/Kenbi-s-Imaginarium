import { Link } from "react-router-dom";
import girlReading from "../assets/girlReading.png";
import poemPNG from "../assets/poemPNG.png";
function Home() {
  return (
    <div className="page container home-content">
      {/* first row - site info */}
      <div className="row home-row">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img className="image" src={girlReading} />
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <p className="homeQuote">
            "Kenbi's Imaginarium is where words come to life, weaving stories of
            love, loss, and growth. Dive into a world where imagination knows no
            bounds, and let the stories inspire your own creativity."
          </p>
        </div>
      </div>
      {/* second row -poem info */}
      <div className="row home-row">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div className="row">
            <p className="homeQuote">
              Explore poems that delve into inner turmoil, emotional struggles,
              and the journey of growth, resilience, and healing. These
              introspective verses capture the essence of pain and
              self-discovery.
            </p>
            <Link className="link text-center" to="/poem">
              Explore Poems
            </Link>
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img className="image" src={poemPNG} />
        </div>
      </div>
    </div>
  );
}

export default Home;
