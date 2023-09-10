import React from "react";

const CategoriesCard = ({ items }) => {
  return (
    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          class="object-cover object-top w-full h-[460px]"
          src={items.imageUrl}
          alt="product image"
        />
      </a>
      <div class="px-5 pb-5">
        <a href="#">
          <h3 class="text-[24px] text-center font-semibold tracking-tight text-gray-900 dark:text-white">
            {items.title}
          </h3>
        </a>
      </div>
    </div>
  );
};

export default CategoriesCard;
