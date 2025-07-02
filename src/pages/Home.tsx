import Layout from "../components/Layout";
import Carousel from "../components/Carousel";

function Home() {
  return (
    <Layout>
      <div className="grid grid-cols-2 gap-46">
        <div className="grid grid-cols-2">
          <ProductCard productInfo={product1} />
          <ProductCard productInfo={product1} />
          <ProductCard productInfo={product1} />
          <ProductCard productInfo={product1} />
        </div>
        <Carousel />
        <div className="flex ">
          <p>محصولات ویژه</p>
          <button className="btn">Default</button>
        </div>
        <div className="flex ">
          <ProductCard productInfo={product1} />
          <ProductCard productInfo={product1} />
          <ProductCard productInfo={product1} />
          <ProductCard productInfo={product1} />
        </div>
      </div>
    </Layout>
  );
}

export default Home;
