"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Container from "@/app/components/ui/Container";
import CategoriesFilters from "@/app/components/ui/CategoriesFilters";
import ProductCard from "@/app/components/ui/ProductCard";

const Categories = () => {
  const pathname = usePathname(); // Get current path
  const [allProducts, setAllProducts] = useState([]);
  const category = pathname.split("/")[2]; // Extract the dynamic category part of the URL

  // Helper function to format the category ID
  const formatId = (id) => {
    return id
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .replace(/(^\w|\s\w)/g, (match) => match.toUpperCase());
  };

  // Fetch products for the current category
  useEffect(() => {
    const fetchData = async () => {
      if (category) {
        const endpoint = `http://localhost:3000/api/categories/${category}`;
        try {
          const response = await fetch(endpoint);
          const data = await response.json();
          setAllProducts(data);
        } catch (error) {
          console.error("Error fetching data", error);
        }
      }
    };
    fetchData(); // Fetch when category changes
  }, [category]);
  useEffect(() => {}, [allProducts]);

  return (
    <Container>
      <h2 className="text-4xl text-center font-semibold mb-5">
        {formatId(category)}
      </h2>
      <div className="flex items-start gap-10">
        <CategoriesFilters id={category} />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {allProducts.length > 0 ? (
            allProducts.map((item) => (
              <ProductCard item={item} key={item._id} />
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Categories;
