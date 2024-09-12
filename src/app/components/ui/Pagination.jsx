import ProductCard from "./ProductCard";

export default async function Pagination() {
  const url = process.env.NEXT_PUBLIC_APP_URL;
  const res = await fetch(`${url}/api/products`);
  const products = await res.json();
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products &&
        products?.map((item) => <ProductCard key={item?._id} item={item} />)}
    </div>
  );
}
