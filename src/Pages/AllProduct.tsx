// import { useNavigate } from "react-router-dom";
// import AllProductCard from "../components/Cart/ProductCard/AllProductCard";
// import { useQuery } from "@tanstack/react-query";
// import server from "../utils/axios";

// type Product = {
//   productId: string;
//   title: string;
//   price: number;
//   description: string;
//   imageUrl?: string;
//   [key: string]: string | number | undefined;
// };

// const fetchProducts = async (): Promise<Product[]> => {
//   const response = await server.get("/products");
//   return response.data.map((item: Product) => ({
//     productId: item._id,
//     title: item.title,
//     price: item.price,
//     description: item.description,
//     imageUrl: item.imageUrl,
//   }));
// };

// const getPersianDate = () => {
//   const date = new Date();
//   const formatter = new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//     weekday: "long",
//   });
//   return formatter.format(date);
// };

// const usePersianDate = () => {
//   return useQuery({
//     queryKey: ['persianDate'],
//     queryFn: getPersianDate,
//     refetchInterval: 24 * 60 * 60 * 1000, // Refetch every 24 hours
//     staleTime: Infinity, // Consider the date fresh until next refetch
//   });
// };

// const AllProduct = () => {
//   const navigate = useNavigate();

//   const { data: products, isLoading: productsLoading } = useQuery<Product[]>({
//     queryKey: ["products"],
//     queryFn: fetchProducts,
//   });

//   const { data: persianDate, isLoading: dateLoading } = usePersianDate();

//   if (productsLoading || dateLoading) return <div>Loading...</div>;

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 gap-[10px] justify-center px-8">
//       {products &&
//         products.map((product) => (
//           <AllProductCard
//             key={product.productId}
//             title={product.title}
//             description={product.description}
//             price={product.price.toString()}
//             imageUrl={product.imageUrl || ''}
//             date={persianDate || ''}
//             onView={() => navigate(`/edit-product/${product.productId}`)}
//           />
//         ))}
//     </div>
//   );
// };

// export default AllProduct;
