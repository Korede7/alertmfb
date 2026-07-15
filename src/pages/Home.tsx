// import Navbar from "../components/Navbar";
import Homepage from "../pages/Homepage";
import OurProducts from "../pages/OurProducts";
import DigitalBanking from "../quicklinks/DigitalBanking";
import PointOfSales from "../quicklinks/PointOfSales";
import Cards from "../quicklinks/Cards";
import SMELoans from "../quicklinks/SMELoans";
import Testimonials from "../components/Testimonials";
import GetStarted from "../components/GetStarted";
import FindABranch from "../components/FindABranch";
import FAQ from "../components/FAQ";
// import Footer from "../components/Footer";


const Home = () => {
  return (
    <div className="bg-white min-h-screen">
      <Homepage />

      <div id="our-products" className="scroll-mt-24">
        <OurProducts />
      </div>

      <div id="digital-banking" className="scroll-mt-24">
        <DigitalBanking />
      </div>

      <div id="point-of-sale" className="scroll-mt-24">
        <PointOfSales />
      </div>

      <div id="cards" className="scroll-mt-24">
        <Cards />
      </div>

      <div id="sme-loans" className="scroll-mt-24">
        <SMELoans />
      </div>
      <Testimonials />
      <GetStarted />
      <FindABranch />
      <FAQ />
    </div>
  );
};

export default Home;


