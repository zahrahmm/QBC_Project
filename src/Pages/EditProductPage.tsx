import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import EditProduct from "./EditProduct";
import axios from "axios";
import { useProductStore } from "../store/useProductStore";

type ProductData = {
    title: string;
    price: number;
    description: string;
    imageUrl: string;
};

const EditProductPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { fetchProducts } = useProductStore();
    const [productData, setProductData] = useState<ProductData | null>(null);

    useEffect(() => {
        axios.get(`https://qbc9.liara.run/api/products/${id}`).then((res) => {
            setProductData({
                title: res.data.title,
                price: res.data.price.toString(),
                description: res.data.description,
                imageUrl: res.data.imageUrl,
            });
        });
    }, [id]);

    if (!productData) return <div>در حال بارگذاری...</div>;

    return (
        <EditProduct
            productId={id!}
            productData={{
                title: productData.title,
                price: productData.price.toString(),
                description: productData.description,
                // image is optional and not available here
            }}
            onUpdated={() => {
                fetchProducts();
                navigate("/all-product");
            }}
            onDeleted={() => {
                fetchProducts();
                navigate("/all-product");
            }}
        />
    );
};

export default EditProductPage;