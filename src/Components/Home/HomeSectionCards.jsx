import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import CategoriesCard from "./Card/CategoriesCard";
import { categories } from "../../Data/categories";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const items = categories.map((items) => <CategoriesCard items={items} />);

export const HomeSectionCards = () => (
  <AliceCarousel
    disableButtonsControls
    infinite
    autoPlayInterval={1000}
    items={items}
    responsive={responsive}
  />
);
