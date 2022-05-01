import React from "react";
import Announcement from "../../Layout/Announcement";
import Navbar from "../../Layout/Navbar";
import Categories from "./Categories";
import Footer from "../../Layout/Footer";
import Newsletter from "./Newsletter";
import Products from "./Products";
import Slider from "./Slider";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </>
  );
}
