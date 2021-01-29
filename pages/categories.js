import RecommendedProducts from "../components/categories/RecommendedProducts";
import Brands from "../components/homepage/Brands";
import Footer from "../components/homepage/Footer";
import Navbar from "../components/homepage/Navbar";

export default function categories() {
  return (
    <div className={"m-0 p-0 container-fluid"}>
      <Navbar></Navbar>
      <RecommendedProducts></RecommendedProducts>
      <Brands></Brands>
      <Footer></Footer>
    </div>
  );
}
