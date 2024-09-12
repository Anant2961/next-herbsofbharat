import Container from "@/app/components/ui/Container";
import ProductCard from "@/app/components/ui/ProductCard";
import CategoriesFilters from "@/app/components/ui/CategoriesFilters";

export default async function Page() {
  const url = process.env.NEXT_PUBLIC_APP_URL;
  const res = await fetch(`${url}/api/products`);
  const id = await res.json();
  return (
    <Container>
      <div className="flex items-start gap-10">
        <CategoriesFilters id={null} />
        <div>
          <p className="text-4xl font-semibold mb-5 text-center">
            Products Collection
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {id.map((item) => (
              <ProductCard item={item} key={item._id} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
