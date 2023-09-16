"use client";

import { useState } from "react";
import { categoryListData } from "@/shared/data";
import Image from "next/image";
import { Category } from "@/types";

interface CategoryListProps {
  onCategoryChange: (value: string) => void;
}

const CategoryList = ({ onCategoryChange }: CategoryListProps) => {
  const [categoryList, setCategoryList] = useState(categoryListData);
  const [selectedCategory, setSelectedCategory] = useState(0);

  const handleOnClick = (item: Category, itemIdx: number) => {
    setSelectedCategory(itemIdx);
    onCategoryChange(item.value);
  };

  return (
    <div>
      <h2 className="font-bold">Select Food Type</h2>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {categoryList.map((item, index) => (
          <div
            key={item.id}
            onClick={() => handleOnClick(item, index)}
            className={`flex flex-col justify-center items-center bg-gray-100 p-2 m-2 rounded-lg grayscale hover:grayscale-0 cursor-pointer border-purple-400 ${
              selectedCategory === index ? "grayscale-0 border-[1px]" : null
            }`}
          >
            <Image src={item.icon} alt={item.name} width={40} height={40} />
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
