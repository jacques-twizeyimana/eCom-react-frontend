import CategoriesHero from "../components/categories/CategoriesHero";
import RecommendedProducts from "../components/categories/RecommendedProducts";
import Banner from "../components/homepage/Banner";
import Brands from "../components/homepage/Brands";
import Footer from "../components/homepage/Footer";
import Navbar from "../components/homepage/Navbar";
import Navigate from "../components/categories/Navigate";
import Dropdown from "../components/categories/Dropdown";
export default function categories() {
  const slides = [
    {
      id: 1,
      pages: ["Home", "Categories", "Men", "Gadgets"],
      title: "PRODUCT CATEGORIES",
      image: "/img/categories/mac3.png",
    },
    {
      id: 2,
      pages: ["Home", "Categories", "Men", "Gadgets 1"],
      title: "PRODUCT CATEGORIES 1",
    },
    {
      id: 3,
      pages: ["Home", "Categories", "Men", "Gadgets 2"],
      title: "PRODUCT CATEGORIES 2",
    },
    {
      id: 4,
      pages: ["Home", "Categories", "Men", "Gadgets 3"],
      title: "PRODUCT CATEGORIES 3",
    },
  ];
  return (
    <div className={"ms-0 p-0 container-fluid"}>
      <Banner />
      <Navbar />

      <CategoriesHero slides={slides} />
      <Navigate />
      <RecommendedProducts />
      <Brands />

      <Footer />
    </div>
  );
}
