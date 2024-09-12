"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const CategoriesFilters = ({ id }) => {
  const url = process.env.NEXT_PUBLIC_APP_URL;
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${url}/api/categories`);
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []); // Only fetch categories once on component mount

  if (loading) {
    return <p>Loading categories...</p>;
  }

  return (
    <div className="hidden md:inline-flex flex-col gap-6">
      <p className="text-3xl font-bold">Filters</p>
      <div>
        <p className="text-sm uppercase font-semibold underline underline-offset-2 decoration-[1px] mb-2">
          Select Categories
        </p>
        <div className="flex flex-col gap-y-2 min-w-40">
          {categories.map((item) => (
            <Link
              href={`/categories/${item._base}`}
              key={item._id}
              className={`text-base font-medium text-start underline underline-offset-2 decoration-[1px] decoration-transparent hover:decoration-gray-950 hover:text-black duration-200 ${
                item._base === id
                  ? "text-greenText decoration-greenText"
                  : "text-lightText"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesFilters;
