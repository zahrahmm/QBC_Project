import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import server from "../utils/axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export type ProductData = {
  title: string;
  price: string;
  description: string;
  imageUrl?: string;
};

const fetchProduct = async (id: string) => {
  const { data } = await server.get(`/products/${id}`);
  return {
    title: data.title,
    price: data.price.toString(),
    description: data.description,
    imageUrl: data.imageUrl,
  };
};

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id!),
    enabled: !!id,
  });

  const [productData, setProductData] = useState<ProductData>({
    title: "",
    price: "",
    description: "",
    imageUrl: "",
  });
  const [image, setImage] = useState<File | undefined>(undefined);

  // Use data from the query to set initial state
  useState(() => {
    if (data) setProductData(data);
  });

  const updateMutation = useMutation({
    mutationFn: async () => {
      const formData = new FormData();
      formData.append("title", productData.title);
      formData.append("price", productData.price);
      formData.append("description", productData.description);
      if (image) formData.append("image", image);

      const response = await server.put(
        `/products/${id}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      queryClient.invalidateQueries({ queryKey: ["product", id] });
      navigate("/all-product");
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async () => {
      await server.delete(`/products/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      navigate("/all-product");
    },
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <form
        className="m-auto max-w-[1090px] pt-26"
        onSubmit={(e) => e.preventDefault()}
      >
        {/* Form fields remain the same */}
        <div className="flex flex-col gap-6">
          <input
            type="file"
            className="file-input w-full h-31"
            onChange={(e) => setImage(e.target.files?.[0])}
          />
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-base font-normal">
              Product Name
            </legend>
            <input
              type="text"
              className="input w-full"
              placeholder="Enter product name"
              value={productData.title}
              onChange={(e) =>
                setProductData({ ...productData, title: e.target.value })
              }
            />
          </fieldset>
          {/* Other form fields... */}
          <button
            type="button"
            className="btn btn-soft btn-success hover:text-white mb-5"
            onClick={() => updateMutation.mutate()}
            disabled={updateMutation.isPending}
          >
            {updateMutation.isPending ? "Updating..." : "Update Product"}
          </button>
          {id && (
            <button
              type="button"
              className="btn btn-soft btn-error hover:text-white mb-5 mr-3"
              onClick={() => deleteMutation.mutate()}
              disabled={deleteMutation.isPending}
            >
              {deleteMutation.isPending ? "Deleting..." : "Delete Product"}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default EditProduct;