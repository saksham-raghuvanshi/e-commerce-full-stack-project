import React from "react";
import { categories } from "../../Data/categories";
import CategoriesCard from "./Card/CategoriesCard";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const responsive = {
  0: { items: 1 },
  720: { items: 3 },
  1024: { items: 5 },
};

const items = categories.map((items) => <CategoriesCard items={items} />);
const AllCategories = () => {
  return (
    <div>
      <h2 className="font-[800] text-[15px] sm:text-[22px] md:text-[28px] text-center mb-2 mt-2 ">
        All Categories
      </h2>
      <div className="m-2">
        <AliceCarousel
          disableButtonsControls
          infinite
          autoPlayInterval={1000}
          items={items}
          responsive={responsive}
        />
      </div>
    </div>
  );
};

export default AllCategories;
