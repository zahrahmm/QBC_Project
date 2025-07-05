import Layout from "../components/Layout";
import Carousel from "../components/Carousel";
import type { productType } from "../types/productType";
import { server } from "../utils/axios";
import { useState, useEffect } from "react";

function Home() {
  // State for products , loading status, and errors
  const [products, setProducts] = useState<productType[]>([]);

  useEffect(() => {
    // 2. Define the async function to fetch data using axios
    const fetchProducts = async () => {
      try {
        const response = await server.get("/api/products/allproducts");

        // 2. Log the response data directly, not the state
        console.log("Fetched data:", response.data);

        // Set the state. React will re-render with the new data.
        setProducts(response.data);
      } catch (err) {
        console.log(err);
        // Axios automatically handles non-2xx responses as errors
      }
    };

    fetchProducts();
    console.log(products);
  }, []); // Empty dependency array ensures this runs only once

  return (
    <Layout>
      <div className="grid grid-cols-2 gap-46">
        <div className="grid grid-cols-2">{/* <ProductCard /> */}</div>
        <Carousel />
        <div className="flex ">
          <p>محصولات ویژه</p>
          <button className="btn">Default</button>
        </div>
        <div className="flex ">{/* <ProductCard /> */}</div>
      </div>
    </Layout>
  );
}

export default Home;
