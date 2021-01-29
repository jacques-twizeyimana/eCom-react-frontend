import CategoriesHero from "../components/categories/CategoriesHero";
import RecommendedProducts from "../components/categories/RecommendedProducts";
import Banner from "../components/homepage/Banner";
import Brands from "../components/homepage/Brands";
import Footer from "../components/homepage/Footer";
import Navbar from "../components/homepage/Navbar";

export default function categories() {
  return (
    <div className={"m-0 p-0 container-fluid"}>
      <Banner></Banner>
      <Navbar></Navbar>
      <CategoriesHero></CategoriesHero>
      <RecommendedProducts></RecommendedProducts>
      <Brands></Brands>
      <Footer></Footer>
    </div>
  );
}
