import Container from "./Container";
import Link from "next/link";
import Pagination from "./Pagination";

const Productlist = () => {
  return (
    <Container>
      <div className="mb-10">
        <div className="flex items-center justify-between">
          <h2 className="text-4xl font-bold">Our Products</h2>
          <Link href="/product"> All our products</Link>
        </div>
        <div className="w-full h-[1px] bg-gray-200 mt-2" />
      </div>
      <Pagination />
    </Container>
  );
};

export default Productlist;
